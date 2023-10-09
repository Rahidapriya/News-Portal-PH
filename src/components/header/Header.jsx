/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Header = () => {
  
  useEffect(()=>{
      AOS.init({duration:'1000'})
    })
  return (
    <div>
      <div
        className="hero min-h-[91vh]  relative"
        style={{
          backgroundImage: 'url(https://i.ibb.co/yyQHQ9B/header.jpg)',
          backgroundPosition: 'center', // Set background position to center
          backgroundSize: 'cover', // Maintain aspect ratio and cover the entire container
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="" data-aos="fade-up">
            <h1 className="mb-5 text-2xl md:text-3xl lg:text-4xl font-bold font-metamorphous">Crafting Memorable <br /> Events</h1>
            <p className="mb-5 text-xxl md:text-xl md:w-8/12 lg:w-5/12 mx-auto">
            Unforgettable weddings, birthdays,
and more await your vision's embrace.
Let's craft an extraordinary event,
capturing moments you'll forever embrace.
            </p>
           <Link to='/contact'> <button className="btn lg:px-8 cursor-pointer z-20 bg-orange-500 hover:bg-purple-950  rounded-none text-white font-bold border-none font-metamorphous">Book A Consult</button></Link>
          </div>
        </div>
       
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 left-0 w-full">
          <path
            fill="#fff"
            fillOpacity=".20"
            d="M0,96L48,117.3C96,139,192,181,288,176C384,171,480,117,576,117.3C672,117,768,171,864,208C960,245,1056,267,1152,256C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg> */}
      </div>
    </div>
  );
};

export default Header;
