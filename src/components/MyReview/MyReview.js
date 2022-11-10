import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../ContextProvider/ContextProvider';
import MyReviewData from './MyReviewData';


const MyReviews = () => {
    const [myReviews, setMyReviews] = useState([])
    const { user } = useContext(authContext)

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email])
   
    return (
        <div className='bg-white m-20'>
            <div className='grid gap-10'>
                <h3 className='text-center text-3xl font-semibold'>My All Review : {myReviews.length}</h3>
                {
                    myReviews.map(myreview => <MyReviewData
                        key={myreview._id} myreview={myreview}
                    >
                    </MyReviewData>)
                }
            </div>
        </div>
    );
};

export default MyReviews;