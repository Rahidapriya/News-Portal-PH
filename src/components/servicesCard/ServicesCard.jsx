/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



  
  
const ServicesCard = ({card}) => {
    const{id,serviceType,imageURL,backgroundColor,buttonColor,description ,priceRange}=card;
    useEffect(()=>{
      AOS.init({duration:'1000'})
    })
    const [isFlipped,setIsFlipped]=useState(false);
    const flipCard=()=>{
        setIsFlipped(!isFlipped)
        // const cardBgStyle = {
        //     background: `${backgroundColor}`,
        // };
    }
    return (
        <div className='lg:w-10/12 mx-auto w-full' data-aos="fade-up">
            
            <ReactCardFlip flipDirection='vertical' isFlipped={isFlipped}>
                {/* <Navbar></Navbar> */}
                <div className='flex lg:w-96   w-72 gap-5 flex-col rounded-xl  bg-clip-border text-gray-700 shadow-md' style={{ background: backgroundColor }} onClick={flipCard} >
  <div className="  lg:h-56 h-44 overflow-hidden rounded-t-xl bg-blue-gray-500 bg-clip-border text-white ">
    <img className='w-full '
      src={imageURL}
      alt="img-blur-shadow"
      layout="fill"
    />
  </div>
  <div className="p-6 text-white text-center">
    <h5 className="font-metamorphous mb-2 block  text-xl font-semibold leading-snug tracking-normal antialiased" >
     {serviceType}
    </h5>
    <p className="block  text-base font-light leading-relaxed text-inherit antialiased">
     {description}
    </p>
    <p className=' mt-6 badge text-lg border-none py-4 text-white'style={{ background:buttonColor }} ><span className='mr-4'>Price:</span>{priceRange}</p>
  </div>
 
</div>
<div>
<div className="p-6 pt-0 relative flex lg:w-96   w-72 flex-col rounded-xl  bg-clip-border text-gray-700 shadow-md" style={{ background: buttonColor }} onClick={flipCard}>
     <p className=" text-center font-bold text-xl block text-white font-poppins leading-relaxed  antialiased mt-20">
      Are You excited to celebrate your memorable day more memorable with us <span className='block text-6xl text-center'>?</span>
    </p>
    <Link to={`/donate/${id}`}>
    <button
      className="mt-12 select-none rounded-lg font-metamorphous py-3 px-6 text-center align-middle text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:bg-white w-full " style={{ background: backgroundColor }}
      type="button"
      data-ripple-light="true"
    >
      See Details
    </button>
    </Link>
  </div>
</div>
</ReactCardFlip>
        </div>
    );
};

export default ServicesCard;