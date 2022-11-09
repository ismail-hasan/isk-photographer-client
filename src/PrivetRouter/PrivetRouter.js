import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../ContextProvider/ContextProvider';

const PrivetRouter = ({ children }) => {
    const { user } = useContext(authContext)
    const location = useLocation
    if (!user) {
        return <Navigate to='/login' state={{ form: location }} replace></Navigate >
    }
    return children

};

export default PrivetRouter;