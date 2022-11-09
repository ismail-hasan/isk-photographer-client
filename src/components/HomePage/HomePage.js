import React from 'react';
import TitleHook from '../../Hook/TitleHook';
import Banner from './Banner';
import MyWork from './MyWork';
import Quote from './Quote';
import Services from './Services';


const HomePage = () => {
    TitleHook('Home')

    return (
        <div>
            <Banner></Banner>
            <MyWork></MyWork>
            <Quote></Quote>
            <Services></Services>
        </div>
    );
};

export default HomePage;