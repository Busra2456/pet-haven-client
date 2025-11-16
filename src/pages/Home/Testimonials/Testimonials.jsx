//**---------npm install swiper--------------- */
//**------------npm i @smastrom/react-rating--------- */


import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";





const Testimonials = ({refresh}) => {
  // const {name,image,description,_id} = testimonials;
  //  console.log("l",testimonials)
  // const dogInfo = review?.dogInfo || {};
  //  const { _id, name, image, description } = dogInfo;


  // console.log("....lll",dogInfo)
  
       const [reviews,setReviews] = useState([]);
       const axiosPublic = useAxiosPublic();
       const [expandedReviews, setExpandedReviews] = useState({});

       const toggleReadMore = (id) => {
  setExpandedReviews(prev => ({
    ...prev,
    [id]: !prev[id]
  }));
};


      //  const {_id} = useParams()
        // const { state } = useLocation();
// const dog = useMemo(() => state || {}, [state]);

          // const location = useLocation();
                // const {user} =useAuth()
                //  const dog = state || {};         
  // const { name, image, description } = dog;
// 

          // const handleAddToCard2 = ({cart}) =>{
          //    const {name,image,_id} = cart; 
                
          //         if(user && user.email){
          //           // send cart item to the database
                    
          //           const cartItem = {
          //             // menuId:_id,
          //             // email:user.email,
          //             name,
          //             image,
          //             _id
          //             // price
          //           }  
          //           useAxiosSecure.post('/carts', cartItem)
          //           .then(res =>{
          //             console.log(res.data)
          //             if(res.data.insertedId){
          //               Swal.fire({
          //   position: "top-end",
          //   icon: "success",
          //   title: `${name} added to your cart`,
          //   showConfirmButton: false,
          //   timer: 1500
          // });
          
          // //refetch cart to update the cart items count
          // // refetch()
          //             }
          //           })
          //         }
          //         else{
          //           Swal.fire({
          //   title: "You are not Logged",
          //   text: "Please login to add to the cart?",
          //   icon: "warning",
          //   showCancelButton: true,
          //   confirmButtonColor: "#3085d6",
          //   cancelButtonColor: "#d33",
          //   confirmButtonText: "Yes, login!"
          // }).then((result) => {
          //   if (result.isConfirmed) {
          //    //send the user to the login page
          //    Navigate('/login',{state:{from:location}})
          //   }
          // });
          //         }
          //        }

       

  // const dog = state || {}; 
    // const dog = location.state || {};


      // console.log("Dog data from location state 👉", dog);

      
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axiosPublic.get('/reviews');
        setReviews(res.data);
        // let allReviews = res.data;
      //    if(_id) {
      //   allReviews = allReviews.filter((review) =>review.dogId === _id)
      //  }
      //          setReviews(allReviews);
      //              if (res.data.insertedId) {
      //                Navigate(`/add=review/${_id}`, { state: { dog } })}



      } catch (err) {
        console.error(err);
      }
    };
    fetchReviews();
  }, [ axiosPublic , refresh]);


 

       const topReviews = reviews
       .filter((review) => review.rating === 5)
       .sort(
        (a,b) =>
          new Date(b.createdAt || 0).getTime() -
          new Date(a.createdAt || 0).getTime()
        
       )
       .slice(0,10);



         



        
      
      return (
//                <section className="my-20">
//             <SectionTitle
//             subHeading="---What Our Clients Say---"
//             heading="TESTIMONIALS"
//             ></SectionTitle>

//          <div className="p-5">


    
//     </div>
     

//              <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       
      
//    { 
//        topReviews.length > 0 ? (
//             topReviews.map((review) =>(
            
             

//             <SwiperSlide
//             key={review._id}>
                 
//   <div className="m-10 flex flex-col items-center text-center text-black space-y-4">
    

  

    

    
//   </div>


//                  <div className="m-24 flex flex-col items-center mx-24 my-16 text-black">

//                   {/*  User Photo */}
//     {review.photo && (

//       <img
//         src={review.photo}
//         alt={review.name}
//         className="w-20 h-20 rounded-full object-cover border-2 border-orange-400"
//       />
//     )}
// <h3 className="text-2xl text-orange-400">{review.name}</h3> 
                 

//                     <Rating
//       style={{ maxWidth: 180}}
//       value={review.rating}
//       readOnly
//     />
//                    <p className="py-8">{review.details}</p> 

//                    {review.dogInfo && (
//                   <div className="mt-6 text-center">
//                     <img
//                       src={review.dogInfo.image}
//                       alt={review.dogInfo.name}
//                       className="w-40 h-40 object-cover rounded-2xl mx-auto"
//                     />
//                     <h4 className="text-xl font-semibold mt-3">
//                       {review.dogInfo.name}
//                     </h4>
//                     <h4 className="text-xl font-semibold mt-3">
//                       {review.dogInfo.description}
//                     </h4>
                    
//                   </div>
//                 )}
                  
//                  </div> 
                  
//             </SwiperSlide>))
//       ):(<p className="text-center text-gray-500 py-10">No 5-star reviews yet </p>

//       )
//        }
//       </Swiper>


//      <Link  to={`/add-review/${_id}`} 
//      state={{name, image, description}}
//        >
//         <button> show all</button>
//       </Link>

      
                  
//             </section>
//  return (
    <section className="my-20 ">
      <SectionTitle
        subHeading="---What Our Clients Say---"
        heading="TESTIMONIALS"
      />

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {topReviews.length > 0 ? (
          topReviews.map((review) => {
            // Safe destructuring
            const dogInfo = review?.dogInfo || {};
            const { name, image, description } = dogInfo;
                        const isExpanded = expandedReviews[review._id] || false;


            return (
              <SwiperSlide key={review._id}>
                <div className="m-20 flex flex-col items-center text-black text-center ">
                  {/* User Photo */}
                  {review.photo && (
                    <img
                      src={review.photo}
                      alt={review.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-orange-400"
                    />
                  )}

                  <h3 className="text-2xl my-3 text-orange-400">{review.name}</h3>

                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                  />
                  

                  
            {/* <h1 className="max-w-2xl mx-auto text-gray-700 leading-relaxed text-justify my-8 px-4">{review.details}</h1> */}

            <h1  className={`max-w-2xl text-gray-700 leading-relaxed text-[10px] transition-all duration-500`}
                     style={{
                      maxHeight: isExpanded ? '1000px' : '120px',
                      overflow: 'hidden',
                      whiteSpace: 'pre-line',
                    }}>
  {expandedReviews[review._id]
    ? review.details
    : review.details?.slice(0, 150) + (review.details.length > 350 ? '...' : '')}
  {review.details.length > 150 && (
 <button
                      onClick={() => toggleReadMore(review._id)}
                      className="text-blue-500 mt-2 ml-2 underline"
                    >
                      {isExpanded ? 'Read Less' : 'Read More'}
                    </button>  )}
</h1>


                                  



                  {/* Dog Info */}
                  {dogInfo && name && (
                    <div className="mt-6 text-center">
                      {image && (
                        <img
                          src={image}
                          alt={name}
                          className="w-40 h-40 object-cover rounded-2xl mx-auto"
                        />
                      )}
                      <p className="text-gray-600 text-xl mt-3">{description}</p>
                    </div>
                  )}

                  {/* Link to AddReview */}
                  {review._id && name && (
                    <Link
                      to={`/dashboard/add-review/${review._id}`}
                      state={{ name, image, description }}
                    >
                      <button className="uppercase btn border-2 hover:text-white py-6 px-20 text-[12px]  my-5 border-b-black hover:bg-black">
                        Review Dogs
                      </button>
                    </Link>
                  )}
                </div>
              </SwiperSlide>
            );
          })
        ) : (
          <p className="text-center text-gray-500 py-10">
            No 5-star reviews yet
          </p>
        )}
      </Swiper>
    </section>
      );
};

export default Testimonials;


