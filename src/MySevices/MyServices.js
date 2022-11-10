import React from 'react';
import TitleHook from '../Hook/TitleHook';

const MyServices = () => {
    TitleHook('Add Services')
    const addService = (e) => {

        e.preventDefault()
        const form = e.target
        const name = form.name.value
        // const fullname = `${form.firstName.value} ${form.lastName.value}`
        const dec = form.message.value
        const img = form.image.value
        const serviceData = {
            img,
            name,
            dec,
        }
        console.log(serviceData);

        fetch('https://app-server-tau.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    console.log(data)
                    form.reset()
                    alert('review add sucess')
                }


            })

    }
    return (
        <div>
            <form onSubmit={addService} className='bg-white py-10 w-1/2 mx-auto rounded-md px-10'>
                <h2 className='text-4xl mb-10 text-center capitalize'>Add Services</h2>
                <input name='name' type="text" placeholder="Service Name" className="input input-bordered input-info w-full mt-8" required /><br />
                <input name='image' type="text" placeholder="Image URL" className="input input-bordered input-info w-full mt-8" required /> <br />
                <textarea name='message' className="textarea textarea-accent w-full mt-8 h-40" placeholder="Message" required></textarea>
                <button className='bg-black mb-5 text-white px-8 mt-5 text-lg rounded py-2'>Send</button>
            </form>
        </div>
    );
};

export default MyServices;