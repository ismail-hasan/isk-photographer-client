import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';


const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
            })
    }, [])


    return (
        <>
            <div className='text-center pt-24 pb-10 '>
                <h1 className='text-4xl text-red-500 font-semibold'>Read Our Blog</h1>
                <p className='text-lg pt-3'>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='grid grid-cols-3 gap-10 w-[90%] mx-auto mb-10'>
                {
                    services.map(service => <ServiceCard
                        key={service._id} service={service}
                    ></ServiceCard>)
                }
            </div>

            <Link to='/services'>
                <button className='text-lg px-2 py-1 flex justify-center items-center bg-red-500 text-white text-center'>See More</button>
            </Link>
        </>
    );
};

export default Services;