import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../ContextProvider/ContextProvider';
import TitleHook from '../../Hook/TitleHook';

const Login = () => {
    const { signInUser, googleSingIn } = useContext(authContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    TitleHook('Login')
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        signInUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(e => setError(e.message))

    }
    const handleGoogle = () => {
        googleSingIn()
            .then(result => {
                const user = result.user
                const currenUser = {
                    email: user.email
                }
                console.log('user is', currenUser)

                // jwt token 
                fetch('https://app-server-tau.vercel.app/jwt', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currenUser)
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
                console.log(user)
                navigate(from, { replace: true })

            })
            .catch(e => console.log(e))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-full">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <p className='text-center text-3xl pb-4'>Login</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" required className="input input-bordered" />
                            <p className='pt-2'>already have't acount <Link className='underline' to='/register'> register</Link> </p>
                        </div>
                        <p className='text-red-500'>{error}</p>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
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

export default Login;