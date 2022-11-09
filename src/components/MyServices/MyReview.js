import React from 'react';

const MyReview = ({ myreview }) => {
    const { fullname, name, message, email } = myreview
    console.log(myreview)
    return (
        <div className='bg-base-300 p-5 rounded-md'>
            <div className='flex items-center'>
                <img className=' w-[60px] h-[60px] rounded-full object-cover' src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" alt="" />
                <h1 className='pl-4 capitalize text-lg'>{fullname}</h1>
            </div>
            <h1>{name}</h1>
            <p>{message}</p>
        </div>
    );
};

export default MyReview;