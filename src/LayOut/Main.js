import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shard/Footer/Footer';
import Header from '../Shard/Header/Header';

const Main = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Main;