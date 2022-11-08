import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../../ContextProvider/ContextProvider';
import ServicesDetailCard from './ServicesDetailCard';

const ServicesDetails = () => {
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