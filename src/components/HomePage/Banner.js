import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'

const Banner = () => {
    return (
        <div className="hero min-h-screen banner-section"  >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <p className='text-lg capitalize'>welcome to</p>
                    <h1 className="mb-5 text-5xl font-bold">ISK Photography</h1>
                    <p className="mb-5 w-1/2 text-center mx-auto text-lg">Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor</p>
                    <Link to='/services'>
                        <button className="bg-black uppercase py-3 px-6">All My services</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Banner;