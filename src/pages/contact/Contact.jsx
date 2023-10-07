/* eslint-disable react/no-unknown-property */

import { Link } from 'react-router-dom';
import Navbar from '../../shared/navbar/Navbar';
import Footer from '../../shared/footer/Footer';

const Contact = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>


            <div className='flex flex-col items-center justify-center mt-20 ' id='services'>
             <h3 className='text-amber-500'> Fix a Meeting with Us</h3>
             <h1 className='text-purple-950 text-4xl font-metamorphous font-bold'>__Book A Consult__</h1>
            </div>       
<div className="flex items-center justify-center p-12">


 
  <div className="mx-auto w-full max-w-[550px] shadow-lg p-6 rounded-md">
    <form action="" method="POST">
      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="fName"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              First Name
            </label>
            <input
              type="text"
              name="fName"
              id="fName"
              placeholder="First Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="lName"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lName"
              id="lName"
              placeholder="Last Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>
      <div className="mb-5">
        <label
          for="guest"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Which location you want to place your event?
        </label>
        <input
          type="text"
          name="guest"
          id="guest"
          placeholder="Location"
          min="0"
          className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="-mx-3 flex flex-wrap">
        <p className='mb-3 block text-base font-medium text-[#07074D] ml-3'>What time would you prefer for a meeting with us?</p>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="date"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="time"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Time
            </label>
            <input
              type="time"
              name="time"
              id="time"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-5">
        <label className="mb-3 block text-base font-medium text-[#07074D]">
          Which event you want to plan?
        </label>
        <div className=" items-center  mt-6 block ">
        <div className="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton1"
              className="h-5 w-5"
            />
            <label
              for="radioButton1"
              className="pl-3 text-base font-medium text-[#07074D]"
            >
            Weading
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton2"
              className="h-5 w-5"
            />
            <label
              for="radioButton2"
              className="pl-3 text-base font-medium text-[#07074D]"
            >
             Anneversary
            </label>
          </div>

          {/*  */}
          <div className="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton3"
              className="h-5 w-5"
            />
            <label
              for="radioButton3"
              className="pl-3 text-base font-medium text-[#07074D]"
            >
            Birthday
            </label>
          </div>
         
          {/*  */}

          <div className="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton4"
              className="h-5 w-5"
            />
            <label
              for="radioButton4"
              className="pl-3 text-base font-medium text-[#07074D]"
            >
             Baby Shower
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton5"
              className="h-5 w-5"
            />
            <label
              for="radioButton5"
              className="pl-3 text-base font-medium text-[#07074D]"
            >
             Retirement Party
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="radio"
              name="radio1"
              id="radioButton6"
              className="h-5 w-5"
            />
            <label
              for="radioButton6"
              className="pl-3 text-base font-medium text-[#07074D]"
            >
             Engagement 
            </label>
          </div>

        </div>
      </div>

      <div>
        <Link to='/'><button 
          className="hover:shadow-form rounded-md hover:bg-purple-950 py-3 px-8 text-center text-base font-semibold text-white outline-none w-full bg-amber-500 "
        >
          Submit
        </button></Link>
      </div>
    </form>
  </div>
</div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;