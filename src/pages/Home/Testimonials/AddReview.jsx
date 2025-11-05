import { Rating } from "@smastrom/react-rating";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import {useEffect, useState } from "react";
import '@smastrom/react-rating/style.css'
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useLocation, useParams } from "react-router-dom";

const AddReview = ({onReviewAdded}) => {
 const { state } = useLocation(); 
  const { _id } = useParams();    

  const dog = state || {};         
  const { name, image, description } = dog;
  const axiosPublic = useAxiosPublic();
   
      const { register, handleSubmit, reset } = useForm();
  const [rating, setRating] = useState(0);
  
  const {user} = useContext(AuthContext);

  const onSubmit = async (data) => {
      if (!user){
            alert("Please log in before submitting a review!");
      return;
      }
    const reviewData = {
      dogId:_id,
      name: user.displayName || data.name,
      email: user.email || data.email,
      photo:user.photoURL ||"https://i.ibb.co.com/RkTYjj4c/logo.png",
      details: data.details,
      rating,
    };
    const res = await axiosPublic.post('/reviews', reviewData);
    if (res.data.insertedId) {
      alert("Review added successfully!");
      reset();
      setRating(0);
      onReviewAdded();

    }
  };


      return (
               <div className="max-w-md mx-auto my-10 bg-white p-6 rounded-2xl shadow-lg">

 <div className="p-5">
      <h1 className="text-3xl font-bold mb-3">Review for {name}</h1>
      {image && <img src={image} alt={name} className="w-64 rounded-lg mb-4" />}
      <p className="text-gray-600 mb-5">{description}</p>

    
    </div>
                
      <h2 className="text-2xl font-semibold mb-4 text-center">Give Your Review</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input
          {...register("name", { required: true })}
          placeholder="Your Name"
          defaultValue={user?.displayName}
          readOnly
          className="input input-bordered w-full"
        />
        <input
          {...register("email", { required: true })}
          placeholder="Your Email"
          defaultValue={user?.email}
          readOnly
          className="input input-bordered w-full"
        />
        <textarea
          {...register("details", { required: true })}
          placeholder="Your Review"
          className="textarea textarea-bordered w-full"
        />
        
        <div className="flex flex-col items-center">
          <p className="text-lg font-medium mb-2">Your Rating:</p>
          <Rating
            style={{ maxWidth: 180 }}
            value={rating}
            onChange={setRating}
          />
         </div>

        <button
          type="submit"
          className="btn btn-primary w-full"
        >
          Submit Review
        </button>
      </form>
    </div>

      );
};

export default AddReview;



