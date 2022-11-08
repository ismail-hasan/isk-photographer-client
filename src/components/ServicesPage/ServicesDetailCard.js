import React, { useContext } from 'react';
import { authContext } from '../../ContextProvider/ContextProvider';

const ServicesDetailCard = ({ detail }) => {
    const { _id, name, img, dec } = detail
    const { user } = useContext(authContext)


    const handleForom = (e) => {
        e.preventDefault()
        const form = e.target
        const name = `${form.firstName.value} ${form.lastName.value}`
        const message = form.message.value
        // const email = user?.email || 'unregisterd'
        // console.log(name, message)
        const reviewData = {
            serviceID: _id,
            name,
            message,
        }
        console.log(reviewData)
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset()
                    alert('review added success')
                }
            })
            .catch(e => console.log(e))



    }


    return (
        <div className="py-20">
            <div className='w-[90%] mx-auto bg-base-100 shadow-xl flex items-center'>
                <div className='w-1/2'>
                    <img src={img} alt="Shoes" />
                </div>
                <div className="ml-10 w-1/2">
                    <h2 className="card-title text-3xl">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p className='text-lg pt-5'>{dec}</p>

                </div>
            </div>
            <div className='pt-28'>
                <form onSubmit={handleForom} className='bg-white py-10 w-1/2 mx-auto rounded-md px-10'>
                    <h2 className='text-4xl mb-10 text-center capitalize'>please review</h2>
                    <input name='firstName' type="text" placeholder="Last Name" className="input input-bordered input-info w-full mt-8" required /><br />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered input-info w-full mt-8" required /><br />
                    <input name='email' defaultValue={user?.email || 'Unregistered'} readOnly type="email" placeholder="Type here" className="input input-bordered input-info w-full mt-8" /> <br />
                    <textarea name='message' className="textarea textarea-accent w-full mt-8 h-40" placeholder="Message" required></textarea>
                    <button className='bg-black mb-5 text-white px-8 mt-5 text-lg rounded py-2'>Send</button>
                </form>
            </div>
        </div>
    );
};

export default ServicesDetailCard;