import React from 'react'
import web from "../src/Image/Andhra invo.jpg"
import {NavLink} from "react-router-dom";
const Common = (props) =>{
  return(
    <>
       <section id = "header" className="d-flex align-item-center" >
       <div className="container-fluid nav_bg">
           <div className="row row-cols-2">
               <div className="col-10 mx-auto">
                  <div className="row row-cols-2">
                 <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                   <h1>
                       {props.name}
                        <strong className =
                       'brand-name'>Berojgar</strong>
                   </h1> 
                   <h2 className="my-3">
                    Come and join us. Industry is not setup by one pepole it is a combination of many loyal people
                   </h2>
                   <div className="mt-3">
                   <NavLink to={props.visit} className="btn btn-primary">
                       {props.btname}      </NavLink>
                   </div>
                </div>

                    <div className='col-lg-6order-1 order-lg-2 header-img'>
                      <img src = {props.imgsrc} className='img-fluid animated' alt='img '/>
                    </div>
                 </div>
               </div>
           </div>
       </div>

       </section>
    </>
  );
};

export default Common;