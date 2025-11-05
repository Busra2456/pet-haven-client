import {  useState } from "react";
import AddReview from "./AddReview";
import Testimonials from "./Testimonials";

const GoReview = () => {
 
  
      
       const [refreshReviews, setRefreshReviews] = useState(0);
        const handleReviewAdded = () => {
          setRefreshReviews(prev => prev + 1); // triggers Testimonials to refetch
        };

 
      return (
            <div>

                   <AddReview onReviewAdded={handleReviewAdded}
                    />
                    <Testimonials 
                    
                     refresh={refreshReviews} ></Testimonials>
          
         


            </div>
      );
};

export default GoReview;