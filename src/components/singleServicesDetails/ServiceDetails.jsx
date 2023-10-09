
import  { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleCard from './singleCard';
import Navbar from '../../shared/navbar/Navbar';





  
  

   

const ServiceDetails = () => {
    const[card,setCard]=useState({});
    const {id}=useParams();
    const cards=useLoaderData();
    
   
    useEffect(()=>{
        const findCard=cards?.find(card=>card.id==id);
        setCard(findCard)

    },[id,cards])
    console.log(card);
    return (
        <div>
            <Navbar></Navbar>
           <SingleCard card={card}></SingleCard>
        </div>
    );
};

export default ServiceDetails;