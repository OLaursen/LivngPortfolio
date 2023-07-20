import React from 'react';
import Content from '../components/mainview/Contentbox';
import Buttonpack from '../components/sidebar/Togglepack'
import "./Home.css";


const Home = () => {
    return(
    <>
    <div className="content-area">
        <div className="col-1">
            <Buttonpack className="Buttonpack"/>
        </div>
        <div className="col-11">
            <Content />
        </div>
    </div>
    </>
    );

};
export default Home;