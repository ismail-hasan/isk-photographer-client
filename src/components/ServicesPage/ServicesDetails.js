import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServicesDetailCard from './ServicesDetailCard';

const ServicesDetails = () => {
    const dataDetails = useLoaderData()

    return (
        <div>
            {
                dataDetails.map(detail => <ServicesDetailCard
                    key={detail._id} detail={detail}
                ></ServicesDetailCard>)
            }
            <div className='mb-20'>
                <h2 className='text-4xl text-center capitalize'>please review</h2>
                <form >
                <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
                </form>
            </div>
        </div>
    );
};

export default ServicesDetails;