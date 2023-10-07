
import Navbar from '../../shared/navbar/Navbar';
import {RiFileList3Line} from 'react-icons/ri';
import {MdBrunchDining} from 'react-icons/md';
import {MdEco} from 'react-icons/md';
import {GiStairsCake} from 'react-icons/gi';
import {SlNote} from 'react-icons/sl';
import {MdMonochromePhotos} from 'react-icons/md';
import guest from '../../assets/guest.jpg'
import dining from '../../assets/dining.jpg'
import registry from '../../assets/registrery.jpg'
import photography from '../../assets/photography.jpg'
import decoration from '../../assets/decoration.jpg'
import cake from '../../assets/cake.jpg'

const Features = () => {
    return (
        <div>
           <Navbar></Navbar> 
           <div>
           <div className='flex flex-col items-center justify-center mt-20 ' id='services'>
             <h3 className='text-amber-500'> Have a Look to Our Features</h3>
             <h1 className='text-purple-950 text-4xl font-metamorphous font-bold'>__Our Features__</h1>
            </div>
           </div>

          <div className='m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-auto w-9/12 gap-2 '>
          <div className="card  w-80 bg-base-100 shadow-xl image-full mx-auto">
  <figure><img src={guest} className='' alt="Shoes" /></figure>
  <div className="card-body text-center flex flex-col items-center justify-center ">
    <RiFileList3Line className='w-12 h-12 mx-auto mb-3'></RiFileList3Line>
    <h2 className=" text-2xl font-bold  font-poppins text-center overline ">Guest List</h2>
  
   
  </div>
</div>

<div className=" card w-96 mx-auto bg-base-100 shadow-xl image-full  ">
  <figure><img src={dining} alt="Shoes" /></figure>
  <div className="card-body text-center flex flex-col items-center justify-center">
    <MdBrunchDining className='w-12 h-12 mx-auto mb-3'></MdBrunchDining>
    <h2 className=" text-2xl font-bold  font-poppins text-center overline ">Fine Dining</h2>
  
   
  </div>
</div>

<div className="card   w-80 bg-base-100 shadow-xl image-full mx-auto">
  <figure><img src={decoration} alt="Shoes" /></figure>
  <div className="card-body text-center flex flex-col items-center justify-center">
    <MdEco className='w-12 h-12 mx-auto mb-3'></MdEco>
    <h2 className=" text-2xl font-bold  font-poppins text-center overline ">Unique Decoration</h2>
  
   
  </div>
</div>

<div className="card   w-96 bg-base-100 shadow-xl image-full mx-auto">
  <figure><img src={cake} alt="Shoes" /></figure>
  <div className="card-body text-center flex flex-col items-center justify-center">
    <GiStairsCake className='w-12 h-12 mx-auto mb-3'></GiStairsCake>
    <h2 className=" text-2xl font-bold  font-poppins text-center overline ">Perfect Cake</h2>
  
   
  </div>
</div>

<div className="card   w-80 bg-base-100 shadow-xl image-full  mx-auto">
  <figure><img src={registry} alt="Shoes" /></figure>
  <div className="card-body text-center flex flex-col items-center justify-center">
    <SlNote className='w-12 h-12 mx-auto mb-3'></SlNote>
    <h2 className=" text-2xl font-bold  font-poppins text-center overline ">Weading Registry</h2>
  
   
  </div>
</div>

<div className="card   w-96 bg-base-100 shadow-xl image-full mx-auto">
  <figure><img src={photography} alt="Shoes" /></figure>
  <div className="card-body text-center flex flex-col items-center justify-center ">
    <MdMonochromePhotos className='w-12 h-12 mx-auto mb-3'></MdMonochromePhotos>
    <h2 className=" text-2xl font-bold  font-poppins text-center overline ">Photography</h2>
  
   
  </div>
</div>
          </div>
        </div>
    );
};

export default Features;