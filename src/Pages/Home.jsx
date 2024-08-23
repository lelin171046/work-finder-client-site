import React from 'react';
import Carousel from '../Component/Carousel';
import TabCategories from '../Component/TabCategories';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
   
    return (
        <div>
            <h2>home</h2>
            <Carousel></Carousel>
            <TabCategories ></TabCategories>
        </div>
    );
};

export default Home;