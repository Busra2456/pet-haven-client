//**---------npm install swiper--------------- */
//**------------npm i @smastrom/react-rating--------- */


import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";
import useAxiosPublic from "../../../hooks/useAxiosPublic";



const Testimonials = ({refresh}) => {
       const [reviews,setReviews] = useState([]);
       const axiosPublic = useAxiosPublic();
      
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axiosPublic.get('/reviews');
        setReviews(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchReviews();
  }, [ axiosPublic,refresh]);

       
      
      
      return (
               <section className="my-20">
            <SectionTitle
            subHeading="---What Our Clients Say---"
            heading="TESTIMONIALS"
            ></SectionTitle>

        
     

             <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
       {
            reviews.map(review => <SwiperSlide
            key={review._id}>
                 
  <div className="m-10 flex flex-col items-center text-center text-black space-y-4">
    {/* ✅ User Photo */}
    {/* {review.photo && (
      <img
        src={review.photo}
        alt={review.name}
        className="w-20 h-20 rounded-full object-cover border-2 border-orange-400"
      />
    )} */}

  

    

    
  </div>


                 <div className="m-24 flex flex-col items-center mx-24 my-16 text-black">

                  {/* ✅ User Photo */}
    {review.photo && (
      <img
        src={review.photo}
        alt={review.name}
        className="w-20 h-20 rounded-full object-cover border-2 border-orange-400"
      />
    )}
<h3 className="text-2xl text-orange-400">{review.name}</h3> 
                 

                    <Rating
      style={{ maxWidth: 180}}
      value={review.rating}
      readOnly
    />
                   <p className="py-8">{review.details}</p> 
                  
                 </div> 
                  
            </SwiperSlide>)
       }
      </Swiper>
        
                  
            </section>
      );
};

export default Testimonials;