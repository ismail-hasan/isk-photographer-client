import React from 'react';
import { Link } from 'react-router-dom';

const SingleServiceCard = ({ singleService }) => {
    const { img, dec, name, _id } = singleService
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{dec}</p>
                <Link to={`/service/${_id}`}>
                    <button className='bg-red-500 rounded-sm py-1 px-3 text-white capitalize mt-5  text-lg'>see more</button>
                </Link>
            </div>
        </div>
    );
};

export default SingleServiceCard;