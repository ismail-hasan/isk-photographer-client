import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../ContextProvider/ContextProvider';

const Header = () => {
    const { user, logOut } = useContext(authContext)
    const handleOut = () => {
        logOut()
            .then(data => console.log(data))
            .catch(e => console.log(e))
    }
    return (
        <div className="navbar bg-black text-white px-[90px]">
            <div className="navbar-start bg-black">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {/* all li show hare  */}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">ISK PHOROGRAPHY</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='blog'>Blog</Link></li>
                    <li> <Link to="myreview">My Review</Link></li>
                    <li><Link to='addservices'>Add Services</Link></li>



                </ul>
            </div>
            <div className="navbar-end list-none">
                {user?.email ?
                    <>
                        <li><Link onClick={handleOut} to='login'>LogOut</Link></li>
                    </>
                    :
                    <>
                        <li><Link className='mr-3' to='login'>Login</Link></li>
                        <li><Link to='register'>Register</Link></li>
                    </>


                }
            </div>
        </div>
    );
};

export default Header;