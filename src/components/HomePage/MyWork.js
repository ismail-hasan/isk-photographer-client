import React from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const MyWork = () => {
    return (
        <div className='my-20 w-[90%] mx-auto grid grid-cols-2 items-center' >
            <div className='w-[80%]'>
                <img className='rounded' src="https://images.news18.com/ibnlive/uploads/2021/08/sun-photo.jpg" alt="" />
            </div>
            <div className='w-full'>
                <h1 className='text-pink-500 font-semibold text-lg'>Hello , This is </h1>
                <h1 className='pb-5 text-4xl font-bold capitalize'>ismail photography</h1>
                <p className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam ducimus voluptates molestias beatae saepe! Vero sapiente culpa asperiores architecto et.</p>
                <div className='my-8'>
                    <div className='flex items-center mb-3'>
                        <BsFillCheckCircleFill className='text-pink-500 text-[20px]' />
                        <p className='pl-3 text-lg capitalize'>Lorem ipsum dolor sit.</p>
                    </div>
                    <div className='flex items-center mb-3'>
                        <BsFillCheckCircleFill className='text-pink-500 text-[20px]' />
                        <p className='pl-3 text-lg capitalize'>Lorem ipsum dolor sit.</p>
                    </div>
                    <div className='flex items-center mb-3'>
                        <BsFillCheckCircleFill className='text-pink-500 text-[20px]' />
                        <p className='pl-3 text-lg capitalize'>Lorem ipsum dolor sit.</p>
                    </div>
                    <div className='flex items-center mb-3'>
                        <BsFillCheckCircleFill className='text-pink-500 text-[20px]' />
                        <p className='pl-3 text-lg capitalize'>Lorem ipsum dolor sit.</p>
                    </div>
                    <div className='flex items-center mb-3'>
                        <BsFillCheckCircleFill className='text-pink-500 text-[20px]' />
                        <p className='pl-3 text-lg capitalize'>Lorem ipsum dolor sit.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyWork;