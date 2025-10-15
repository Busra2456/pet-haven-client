import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import DogCard from "./DogCard";




const DogsCard = () => {
      const [dogCarts,setDogsCarts] = useState([]);
      useEffect(()=>{
            fetch('dogdata.json')
            .then(res=>res.json())
            .then(data =>{
                  const cardItems = data.filter(item => item.category === 'dogsItemCard')
                  setDogsCarts(cardItems)
            }
            )
           
      },[])
      return (
            <section>
                  <SectionTitle
                  heading="---Should Try---"
                  subHeading="CHEF RECOMMENDS"
                  ></SectionTitle>

                <div  className="flex items-center justify-evenly mb-12 " >
                  {
                        dogCarts.map(cart=><DogCard key={cart._id} cart={cart} ></DogCard>)
                  }
                </div>

                  
            </section>
      );
};

export default DogsCard;