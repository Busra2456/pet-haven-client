import { Rating } from "@smastrom/react-rating";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useState } from "react";
import '@smastrom/react-rating/style.css'
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import {  Link, useLocation } from "react-router-dom";
const AddReview = ({onReviewAdded}) => {
             
        // const location = useLocation();
      
       const { state } = useLocation(); 
        // const { _id } = useParams();    
        // const dog = state || {}; // ← এখানে ডেটা আসবে
          // console.log("Dog data in AddReview:", dog);
      
      
        const dog = state || {};         
        const { name, image, description } = dog;
        const axiosPublic = useAxiosPublic();
         
            const { register, handleSubmit, reset } = useForm();
        const [rating, setRating] = useState(0);
        
        const {user} = useContext(AuthContext);
      // const navigate = useNavigate();
      
        const onSubmit = async (data) => {
            if (!user){
                  alert("Please log in before submitting a review!");
            return;
            }
          const reviewData = {
            dogId:dog._id,
            name: user.displayName || data.name,
            email: user.email || data.email,
            photo:user.photoURL ||"https://i.ibb.co.com/RkTYjj4c/logo.png",
            details: data.details,
            rating,
            createdAt: new Date(),
            dogInfo: {
              name,
              image,
              description,
            },
           
          };
          const res = await axiosPublic.post('/reviews', reviewData);
          if (res.data.insertedId) {
            alert("Review added successfully!");
            reset();
            setRating(0);
            onReviewAdded();
            // navigate(`/Testimonials/${_id}`, { state: { dog} })
      
          }
        };
      return (
     <div className="max-w-5xl mx-auto m-10 bg-white p6 rounded-2xl shadow-lg">

 <div className="p-5">
     <div className="text-center ">
 <h1 className="text-5xl font-bold mb-3">Review for {name}</h1>
      {image && <img  src={image} alt={name} className="my-6 rounded-lg mb-4" />}
      <p className="text-gray-700 mb-5 text-2xl mt-6">{description}</p>      </div>

    
    </div>
                
      <h2 className="text-5xl font-semibold mb-10 text-center">Give Your Review </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <input
          {...register("name", { required: true })}
          placeholder="Your Name"
          defaultValue={user?.displayName}
          readOnly
          className="input input-bordered w-full text-center text-2xl p-5"
        />
        <input
          {...register("email", { required: true })}
          placeholder="Your Email"
          defaultValue={user?.email}
          readOnly
          className="input input-bordered w-full text-center text-2xl p-5"
        />
        <textarea
          {...register("details", { required: true })}
          placeholder="Your Review"
          className="textarea textarea-bordered w-full text-2xl pb-8"
        />
        
        <div className="flex flex-col items-center">
          <p className="text-lg font-medium mb-2">Your Rating:</p>
          <Rating
            style={{ maxWidth: 180 }}
            value={rating}
            onChange={setRating}
          />  </div>

     

        <button
          type="submit"
          className="uppercase btn border-2 text-white py-6 px-20 text-[12px]  mb-2 border-b-black bg-black w-full"
        >
          Submit Review
        </button>
       
      </form> 
    </div>      );
};

export default AddReview;