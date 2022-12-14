import React, { useContext } from 'react';
import { authContext } from '../../ContextProvider/ContextProvider';

const Review = ({ review }) => {
    const { name, fullname, message } = review
    const { user } = useContext(authContext)
    console.log(review)
    return (
        <div className='bg-base-300 p-5 rounded-md'>

            <div className='flex items-center'>
                <img className=' w-[60px] h-[60px] rounded-full object-cover' src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" alt="" />

                <div>
                    <h1 className='pl-4 '>Name :-</h1>
                    <h1 className='pl-4 capitalize text-lg text-[#e115e8]'><span className='font-semibold'>{fullname}</span></h1>
                </div>
            </div>
            <h1 className='text-lg py-3'>Service Name : <span className='font-semibold'>{name}</span></h1>
            <p>Message :-</p>
            <p className='font-semibold'>{message}</p>
        </div>
    );
};

export default Review;