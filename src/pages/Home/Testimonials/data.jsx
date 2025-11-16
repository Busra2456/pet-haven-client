// import { useEffect, useState } from "react";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";
// import Testimonials from "./Testimonials";

// const data = () => {
//   const [dogtestimonials,setDogtestimonials] = useState([]);
//      const axiosPublic = useAxiosPublic();


//  useEffect(() => {
//                             const fetchReviews = async () => {
//                               try {
//                                 const res = await axiosPublic.get('/carts');
//                                 setDogtestimonials(res.data);
//                               //   let allReviews = res.data;
//                               //    if(_id) {
//                               //   allReviews = allReviews.filter((review) =>review.dogId === _id)
//                               //  }
//                                       //  setReviews(review);
//                                           //  if (res.data.insertedId) {
//                                             //  Navigate(`/add=review/${_id}`, { state: { dog } })}
                        
                        
                        
//                               } catch (err) {
//                                 console.error(err);
//                               }
//                             };
//                             fetchReviews();
//                           }, [ axiosPublic ]);

//       return (
//             <div>

// {
//                          dogtestimonials.map(testimonials=><Testimonials key={testimonials._id} testimonials={testimonials} ></Testimonials>)

// }
                  
//             </div>
//       );
// };

// export default data;