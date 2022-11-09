import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../ContextProvider/ContextProvider';
import MyReview from './MyReview';

const MyServices = () => {
    const [myReviews, setMyReviews] = useState([])
    const { user } = useContext(authContext)
    // console.log(user)
    console.log(setMyReviews)
    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email])
    return (
        <div className='bg-white m-20'>
            <div className='grid gap-10'>
                {
                    myReviews.map(myreview => <MyReview
                        key={myreview._id} myreview={myreview}
                    >
                    </MyReview>)
                }
            </div>
        </div>
    );
};

export default MyServices;