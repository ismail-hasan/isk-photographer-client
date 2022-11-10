// import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import TitleHook from '../../Hook/TitleHook';
import ServicesDetailCard from './ServicesDetailCard';

const ServicesDetails = () => {
    TitleHook('ServicesDetails')
    const dataDetails = useLoaderData()
  


    return (
        <div className='bg-base-200'>
            {
                dataDetails.map(detail => <ServicesDetailCard
                    key={detail._id} detail={detail}
                ></ServicesDetailCard>)
            }

        </div>
    );
};

export default ServicesDetails;