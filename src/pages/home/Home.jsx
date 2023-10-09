
import { useLoaderData } from 'react-router-dom';
import Header from '../../components/header/Header';
import Navbar from '../../shared/navbar/Navbar';
import ServicesCard from '../../components/servicesCard/ServicesCard';
import Scroll from '../../components/scroll/Scroll';
import Footer from '../../shared/footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const Home = () => {
    const cards=useLoaderData();
    useEffect(()=>{
        AOS.init({duration:'1000'})
      })
    
    return (
       
         <div className=''> 
         <Navbar></Navbar>
          <Header></Header>
          <Scroll></Scroll>
          {/* services */}
       
        <div className='flex flex-col items-center justify-center mt-20 ' id='services' data-aos="fade-up">
             <h3 className='text-amber-500 text-center'>Turning Dreams Into Reality</h3>
             <h1 className='text-purple-950 text-2xl md:text-4xl font-metamorphous font-bold text-center'>__Our Services__</h1>
            </div>
          <div className='flex flex-col items-center w-full'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 lg:my-20 gap-6">
                                {
                                    cards.map(card=><ServicesCard key={card.id} card={card}></ServicesCard>)
                                }
                </div>
          </div>
                <Footer></Footer>
      
         </div>
         
      
       
       
        
    );
};

export default Home;