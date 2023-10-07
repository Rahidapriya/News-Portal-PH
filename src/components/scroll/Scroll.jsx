
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Scroll = () => {
    return (
        <div className="mt-10">
             <Marquee pauseOnHover={true} speed={100}>
 <Link to="/" className="mr-12 text-3xl bg-black  bg-opacity-5 text-gray-500 py-10 rounded-md px-4 font-poppins"> PLANNING WITH HEART</Link>
 <Link to="/" className="mr-12 text-3xl bg-black  bg-opacity-5 text-gray-500 py-10 rounded-md px-4 font-poppins"> UNIQUE DECORATION</Link>
 <Link to="/" className="mr-12 text-3xl bg-black  bg-opacity-5 text-gray-500 py-10 rounded-md px-4 font-poppins"> Talented PLANNES</Link>
 <Link to="/" className="mr-12 text-3xl bg-black  bg-opacity-5 text-gray-500 py-10 rounded-md px-4 font-poppins"> CUSTOMER SETISFACTION</Link>
 <Link to="/" className="mr-12 text-3xl bg-black  bg-opacity-5 text-gray-500 py-10 rounded-md px-4 font-poppins"> TOP CLASS EVENT PLANNER</Link>


</Marquee>
        </div>
    );
};

export default Scroll;