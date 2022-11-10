import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'

const Banner = () => {
    return (
        <div className="flex items-center min-h-screen banner-section px-[80px]"  >
            <div className=" bg-opacity-60"></div>
            <div className=" text-center text-neutral-content">
                <div className="text-left">
                    <p className='text-lg capitalize'>welcome to</p>
                    <h1 className="mb-5 text-5xl font-bold">ISK Photography</h1>
                    <p className="mb-5 text-lg">Photography is the art, application, and practice of creating <br /> durable images by recording light, either electronically by means of an image sensor</p>
                    <Link to='/services'>
                        <button className="bg-black uppercase py-3 px-6">All My services</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Banner;