import React from 'react'
import Content from '../components/mainview/Contentbox'
import Buttonpack from '../components/sidebar/Togglepack';


const Home = () => {
    return(
    <>
    <h1>This is the homepage</h1>
    <div className="col-1">
        <Buttonpack />
    </div>
    <div className="col-11">
        <Content />
    </div>
    </>
    );

};
export default Home;