import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import image from '../../images/homebike-4.png'
import './Header.css'


const Header = () => {
    return (
       <div className='container'>
           <div className='row'>
               <div className='col-lg-6 col-md-12 col-sm-12'>
               <img className='header-image mt-4' src={image} alt="" />
               </div>
               <div className='col-lg-6 col-md-12 col-sm-12'>
               <h1 className='header-text me-5'>
                   ERGO MXR-Z 226
             </h1>
             <hr className='text-light ms-auto'/>
           <div className='text-icon'>
           <p className='p-1'>EXPLORE THIS ERGO BIKE <i className="arrow1 fa fa-arrow-right"></i></p>
             <p className='p-2'>FIND RETAILERS <i className="arrow2 fa fa-arrow-right"></i></p>
             <div className='d-flex text-icon'>
             <i className="social-icon fa fa-facebook-f"></i>
             <i className="social-icon fa fa-twitter"></i>
             <i className="social-icon fa fa-youtube"></i>
               </div>
           </div>
           </div>
            
       </div>
    </div>
    );
};

export default Header;