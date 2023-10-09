/* eslint-disable react/no-unknown-property */

import Footer from "../../shared/footer/Footer";
import PriceCard from "./PriceCard";

/* eslint-disable react/prop-types */
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

   

const SingleCard = ({ card }) => {
    const { id, serviceType, imageURL, backgroundColor, buttonColor, description, priceRange,location,details } = card || {};
    useEffect(()=>{
      AOS.init({duration:'1000'})
    })
    return (
      <div className="" >
        <div className="hero h-[50vh]" style={{ backgroundImage: `url(${imageURL})` }}>
          <div className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content text-left text-black bg-white z-20" data-aos="fade-down">
            <div className="max-w-md">
              <h1 className="mb-5 text-3xl font-bold font-metamorphous" style={{ color: buttonColor }}>{serviceType}</h1>
              {/* <p className="mb-5">{description}</p> */}
              <p className="mb-5">Location  {location}</p>
              <p className="mb-5">Details:{details}</p>
             <div className="flex items-center font-metamorphous font-bold">
                <p>Price </p>
                <button className="btn  text-white"style={{background:backgroundColor}}>{priceRange}</button>
             </div>
            </div>
          </div>
        </div>

        {/* card */}
        <PriceCard></PriceCard>
        <Footer></Footer>
        
      </div>
    );
  };
  
  export default SingleCard;
  

