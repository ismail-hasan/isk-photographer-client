import React, { Children, useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../../ContextProvider/ContextProvider';
import TitleHook from '../../Hook/TitleHook';
import SingleServiceCard from './SingleServiceCard';

const ServicesPage = () => {
    TitleHook('Services')
    const allService = useLoaderData()

    return (
        <div>
            <h3 className='text-center font-semibold text-4xl  capitalize pt-10'>All My Services {allService.length} </h3>
            <div className='grid grid-cols-3 gap-10 w-[90%] mx-auto mb-10 my-10'>
                {
                    allService.map(singleService => <SingleServiceCard
                        key={singleService._id} singleService={singleService}
                    ></SingleServiceCard>)
                }
            </div>
        </div >
    );
};

export default ServicesPage;