import { Outlet } from "react-router-dom";
import Footer from "../shared/footer/Footer";



const Roott = () => {
    return (
        <div className="font-poppins"> 
      
        <Outlet></Outlet>
        
       
      
           
         

        </div>
    );
};

export default Roott;