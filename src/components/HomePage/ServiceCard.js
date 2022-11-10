import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { img, dec, name, _id } = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <img className='' src={img} alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p> {dec.length > 50 ? dec.slice(0, 59) + " ......" : dec}</p>
                <Link to={`services/${_id}`}>
                    <button className='bg-[#e115e8] py-1 px-5 text-white capitalize mt-5  text-lg rounded'>Details</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;