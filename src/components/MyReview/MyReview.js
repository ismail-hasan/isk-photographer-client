import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../ContextProvider/ContextProvider';
import TitleHook from '../../Hook/TitleHook';
import MyReviewData from './MyReviewData';


const MyReviews = () => {
    TitleHook('My Reviews')
    const [myReviews, setMyReviews] = useState([])
    // const [newReviw, setNewReviw] = useState(myReviews)
    console.log(myReviews)
    const { user } = useContext(authContext)

    useEffect(() => {
        fetch(`https://app-server-tau.vercel.app/review?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email])


    const handleDelete = (id) => {
        // // navigate(`/editdata/${id}`)
        const agree = window.confirm('are you sure delete this id')

        if (agree) {
            fetch(`https://app-server-tau.vercel.app/review/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('delete success')
                        const remainnig = myReviews.filter(rev => rev._id !== id)
                        setMyReviews(remainnig)
                    }

                })
        }
    }
    const handleUpdate = () => {
        console.log('clicked')
    }

    return (
        <div className='bg-white m-20'>
            <div className='grid gap-10'>
                {myReviews?.length ?
                    <h3 className='text-center text-3xl font-semibold'>My All Review : {myReviews.length}</h3>
                    :
                    <h3 className='text-center text-3xl font-semibold'>No Review Ware Found</h3>

                }
                {
                    myReviews.map(myreview => <MyReviewData
                        key={myreview._id} myreview={myreview} handleDelete={handleDelete} handleUpdate={handleUpdate}
                    >
                    </MyReviewData>)
                }
            </div>
        </div>
    );
};

export default MyReviews;