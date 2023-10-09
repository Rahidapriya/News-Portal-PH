
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Scroll = () => {
    return (
        <div className="mt-10 text-black ">
             <Marquee pauseOnHover={true} speed={100}>
 <Link to="/" className="mr-12 text-3xl  text-black-500 py-10  px-4 rounded-md font-poppins"> PLANNING WITH HEART</Link>
 <Link to="/" className="mr-12 text-3xl  text-black-500 py-10  px-4 font-poppins"> UNIQUE DECORATION</Link>
 <Link to="/" className="mr-12 text-3xl  text-black-500 py-10  px-4 font-poppins"> Talented PLANNES</Link>
 <Link to="/" className="mr-12 text-3xl  text-black-500 py-10  px-4 font-poppins"> CUSTOMER SETISFACTION</Link>
 <Link to="/" className="mr-12 text-3xl  text-black-500 py-10  px-4 font-poppins"> TOP CLASS EVENT PLANNER</Link>


</Marquee>


        </div>
    );
};

export default Scroll;