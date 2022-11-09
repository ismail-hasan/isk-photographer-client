import React, { useContext } from 'react';
import { authContext } from '../../ContextProvider/ContextProvider';

const Review = ({ review }) => {
    const { name, fullname, message } = review
    const { user } = useContext(authContext)
    console.log(review)
    return (
        <div className='bg-white p-5  w-[80%] mx-auto'>
            <div className='flex items-center'>
                {
                    user?.photoURL ?
                        <img className=' w-[60px] h-[60px] rounded-full object-cover' src={user?.photoURL} alt="" />
                        :
                        <img className=' w-[60px] h-[60px] rounded-full object-cover' src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="" />

                }


                <h1 className='pl-4 capitalize text-lg'>{fullname}</h1>
            </div>
            <h1>{name}</h1>
            <p>{message}</p>
        </div>
    );
};

export default Review;