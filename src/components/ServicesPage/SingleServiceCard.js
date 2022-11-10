import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const SingleServiceCard = ({ singleService }) => {
    const { img, dec, name, _id } = singleService
    console.log(singleService)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={img}>
                    <img className='w-full h-[310px] rounded-md' src={img} alt="" />
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p> {dec.length > 50 ? dec.slice(0, 50) + " ......" : dec}</p>
                <Link to={`/services/${_id}`}>
                    <button className='bg-red-500 rounded-sm py-1 px-3 text-white capitalize mt-5 text-lg'>Details</button>
                </Link>
            </div>
        </div>
    );
};

export default SingleServiceCard;