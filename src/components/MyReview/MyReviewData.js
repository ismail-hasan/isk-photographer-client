import { data } from 'autoprefixer';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyReviewData = ({ myreview }) => {
    const { fullname, name, message, seviceid, _id } = myreview

    // const navigate = useNavigate()
    const handleDelete = (id) => {
        // // navigate(`/editdata/${id}`)
        const agree = window.confirm('are you sure delete this id')

        if (agree) {
            fetch(`http://localhost:5000/review/${_id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => console.log())
        }
    }
    return (
        <div className='bg-base-300 p-5 rounded-md flex justify-between items-center '>
            <div>
                <div className='flex items-center'>
                    <img className=' w-[60px] h-[60px] rounded-full object-cover' src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" alt="" />

                    <div>
                        <h1 className='pl-4 '>Name :-</h1>
                        <h1 className='pl-4 capitalize text-lg'><span className='font-semibold'>{fullname}</span></h1>
                    </div>
                </div>
                <h1 className='text-lg py-3'>Service Name : <span className='font-semibold'>{name}</span></h1>
                <p>Message :-</p>
                <p className='font-semibold'>{message}</p>
            </div>
            <div>
                <button onClick={() => handleDelete(seviceid)} className='bg-red-500 ml-4 py-2 px-5 text-white capitalize'>delete</button>
                {/* <button onClick={handleUpdate} className='bg-red-500 ml-4 py-2 px-5 text-white capitalize'>Update</button> */}
            </div>
        </div>
    );
};

export default MyReviewData;