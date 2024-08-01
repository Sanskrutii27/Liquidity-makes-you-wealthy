import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PublicComponent = () => {
    const auth = localStorage.getItem('user');
    return (
        auth ? <Navigate to='/private' /> : <Outlet />
    );
};

export default PublicComponent;

