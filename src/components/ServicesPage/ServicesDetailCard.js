import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authContext } from '../../ContextProvider/ContextProvider';
import Review from './Review';


const ServicesDetailCard = ({ detail }) => {
    const { _id, name, img, dec, Price } = detail
    const { user } = useContext(authContext)
    const [reviews, setReviews] = useState([])
    const [newReviw, setNewReviw] = useState(false)
    console.log(reviews)



    useEffect(() => {
        fetch(`https://app-server-tau.vercel.app/review?seviceid=${_id}`)
            .then(res => res.json())
            .then(data => {
              
                const revarse = [...data].reverse()
                setReviews(revarse)

            })
    }, [newReviw, _id])


    const handleForm = (e) => {
        e.preventDefault()
        const form = e.target
        const fullname = form.name.value
        // const fullname = `${form.firstName.value} ${form.lastName.value}`
        const message = form.message.value
        const email = form.email.value
        const reviewData = {
            seviceid: _id,
            fullname,
            message,
            name,
            email,
        }
        console.log(fullname);


        fetch('https://app-server-tau.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged) {
                    setNewReviw(!newReviw)
                    console.log(data)
                    toast.success('review added success')
                    form.reset()
                }
            })
            .catch(e => console.log(e))
    }


    return (
        <div className="py-20">
            <div className='w-[90%] mx-auto bg-base-100 shadow-xl flex items-center'>
                <div className='w-1/2'>
                    <img className='w-full h-[400px]' src={img} alt="" />
                </div>
                <div className="ml-10 w-1/2">
                    <h2 className="card-title text-3xl capitalize pb-3">
                        {name}
                    </h2>
                    <h3 className='text-lg font-semibold'>Price : <span className='text-[#e115e8] text-2xl py-1'>$ {Price}</span></h3>

                    <p className='text-lg pt-4'>{dec}</p>
                </div>
            </div>
            <div className='grid gap-5 w-[80%] mx-auto mt-20'>
                <h2 className='text-center text-3xl my-5 font-semibold'>AvailAble Review {reviews.length}</h2>
                {
                    reviews.map(review => <Review
                        key={review._id} review={review}
                    ></Review>)
                }
            </div>
            <div className='pt-28'>
                {
                    user?.email ?
                        <>
                            <form onSubmit={handleForm} className='bg-white py-10 w-1/2 mx-auto rounded-md px-10'>
                                <h2 className='text-4xl mb-10 text-center capitalize'>please review</h2>
                                <input name='name' type="text" defaultValue={user?.displayName} readOnly placeholder="User Name" className="input input-bordered input-info w-full mt-8" required /><br />
                                <input name='email' defaultValue={user?.email || 'Unregistered'} readOnly type="email" placeholder="Type here" className="input input-bordered input-info w-full mt-8" /> <br />
                                <textarea name='message' className="textarea textarea-accent w-full mt-8 h-40" placeholder="Message" required></textarea>
                                <button className='bg-black mb-5 text-white px-8 mt-5 text-lg rounded py-2'>Send</button>
                            </form>
                        </>
                        :
                        <>
                            <h2 className='text-4xl mb-10 text-center capitalize'>Please login to add a review</h2>
                            <Link className='text-center flex justify-center my-10' to='/login'>
                                <button className='text-lg px-4 py-1 rounded-sm flex justify-center items-center bg-red-500 text-white text-center'> Please Login</button>
                            </Link>

                        </>
                }
            </div>
        </div>
    );
};

export default ServicesDetailCard;