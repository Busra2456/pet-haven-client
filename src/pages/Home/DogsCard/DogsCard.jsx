import {useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import DogCard from "./DogCard";
// import Testimonials from "../Testimonials/Testimonials";





const DogsCard = ({items}) => {
      console.log('hhghg',items)

      const [dogCarts,setDogsCarts] = useState([]);
       const [dataLength,setDataLength] = useState(3);
        const [show3,setShoe3] = useState(false);
                  


        const handleShow3 = () =>{
            if (show3){
                  setDataLength(3);
                  setShoe3(false)
            }
            else{
                  setDataLength(dogCarts.length);
                  setShoe3(true);
            }

        }
      useEffect(()=>{
            fetch('http://localhost:5000/menu')
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

                <div className={`${ show3 ? "grid md:grid-cols-3 gap-10 my-16 justify-items-center":"flex items-center justify-evenly mb-12 flex-wrap"}`} >
                  {
                   dogCarts.slice(0,dataLength).map(cart=><DogCard key={cart._id} cart={cart} ></DogCard>)
                  }
                </div>
                  

                  <div className="text-center">
              <button onClick={handleShow3} className=" uppercase btn border-2 hover:text-white py-6 px-20 text-[12px]  mb-2 border-b-black hover:bg-black">{show3 ? "Show Less" : "Show All"}</button>
              

            </div>

                  
            </section>
      );
};

export default DogsCard;

