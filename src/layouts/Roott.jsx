import { Outlet } from "react-router-dom";
import Footer from "../shared/footer/Footer";



const Roott = () => {
    return (
        <div className="font-poppins"> 
        <div>
        <Outlet></Outlet>
        </div>
        <div>
        {/* <Footer className=" mt-20" /> */}
        </div>
      
           
         

        </div>
    );
};

export default Roott;