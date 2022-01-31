import React from 'react'
import web from "../src/Image/Andhra invo.jpg"
import {NavLink} from "react-router-dom";
import Common from './Common';
const About = () =>{
  return(
    <>
      <Common name = "WelCome to About page of" imgsrc={web} visit= "/contact" btname="Contact Now" />
    </>
  );
};

export default About;