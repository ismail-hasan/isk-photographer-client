import React from 'react';
import { Link } from 'react-router-dom';

const ServicesDetailCard = ({ detail }) => {
    const { _id, name, img, dec } = detail
    return (
        <div className="w-[90%] mx-auto bg-base-100 shadow-xl flex items-center my-20">
            <div className='w-1/2'>
                <img src={img} alt="Shoes" />
            </div>
            <div className="ml-10 w-1/2">
                <h2 className="card-title text-3xl">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className='text-lg pt-5'>{dec}</p>
                
            </div>
        </div>
    );
};

export default ServicesDetailCard;