import React from 'react'
import web from '../src/Image/pic.jpg';
import {NavLink} from "react-router-dom";
import Common from './Common';
const Home = () =>{
  return(
    <>
     <Common name = "Grow your bussiness with us join us" imgsrc={web} visit= "/service" 
     btname="Get Started" />
    </>
  );
};

export default Home;