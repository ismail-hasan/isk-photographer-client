import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { img, dec, name, _id, Price } = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={img}>
                    <img className='w-full h-[310px] rounded-md ' src={img} alt="" />
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <h3 className='text-lg font-semibold'>Price : <span className='text-[#e115e8] text-2xl py-1'>$ {Price}</span></h3>
                <p> {dec.length > 100 ? dec.slice(0, 100) + " ......" : dec}</p>
                <Link to={`services/${_id}`}>
                    <button className='bg-[#e115e8] py-1 px-5 text-white capitalize mt-5  text-lg rounded'>Details</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;