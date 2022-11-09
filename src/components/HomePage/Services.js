import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';


const Services = () => {
    const [services, setServices] = useState([])


    // const [count, setCount] = useState(0)
    // const [page, setPage] = useState(0)
    // const [size, setSize] = useState(4)
    // console.log(count)

    useEffect(() => {
        fetch(`http://localhost:5000/limitservice`)
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

            <Link className='text-center flex justify-center my-10' to='/services'>
                <button className='text-lg px-4 py-1 rounded-sm flex justify-center items-center bg-red-500 text-white text-center'>Details</button>
            </Link>
        </>
    );
};

export default Services;