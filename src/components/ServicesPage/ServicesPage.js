import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleServiceCard from './SingleServiceCard';

const ServicesPage = () => {
    const totalService = useLoaderData()
    return (
        <div>
            <h3>Total setvices hare : {totalService.length}</h3>
            <div className='grid grid-cols-3 gap-10 w-[90%] mx-auto mb-10 my-20'>
                {
                    totalService.map(singleService => <SingleServiceCard
                        key={singleService._id} singleService={singleService}
                    ></SingleServiceCard>)
                }
            </div>
        </div>
    );
};

export default ServicesPage;