import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../ContextProvider/ContextProvider';
import TitleHook from '../../Hook/TitleHook';

const Register = () => {
    const { createUser, googleSingIn } = useContext(authContext)
    TitleHook('Register')
    const nagivate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, email, password)



        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
                nagivate('/')

            })
            .catch(e => console.log(e))
    }
    const handleGoogle = () => {
        googleSingIn()
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(e => console.log(e))
    }

    return (
        <div className="hero py-10 min-h-screen bg-base-200">
            <div className="hero-content flex-col w-full">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <p className='text-center text-3xl pb-4'>Register</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Full Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="Password" className="input input-bordered" />
                            <p className='pt-2'>already have't acount <Link className='underline' to='/login'> login</Link> </p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register Now</button>
                        </div>
                    </form>
                    <div className=' text-center'>
                        <p className=''>OR</p>
                        <button onClick={handleGoogle} className='border mb-10 py-2 px-4 w-1/2 mt-5 mx-auto font-semibold'>Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;