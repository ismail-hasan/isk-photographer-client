import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TitleHook from '../../Hook/TitleHook';
import SingleServiceCard from './SingleServiceCard';

const ServicesPage = () => {
    TitleHook('Services')
    const allService = useLoaderData()

    const totalService = allService.result
    return (
        <div>
            <h3>Total setvices hare : </h3>
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