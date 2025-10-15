import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import DogItems from "./DogItems";


const PopularMenu = () => {
      const [items,setItems] = useState([]);
      useEffect(() =>{
            fetch('dogdata.json')
            .then(res=>res.json())
            .then(data =>{
                  const poplarItems = data.filter(item => item.category === 'popular')
                  setItems(poplarItems)
            })
      },[])
      return (
            <section className="mb-12">
                  <SectionTitle
                  heading="---Check it out---"
                  subHeading="FROM OUR MENU"
                  ></SectionTitle>

                  <div  className="grid md:grid-cols-2 gap-10">
                        {
                             items.map(item=><DogItems key={item._id} item={item} ></DogItems>) 
                        }
                  </div>
                  <div className="max-w-3xs mx-auto my-10">
                     <button className=" uppercase btn border-2 hover:text-white py-6 px-20 text-[10px] border-b-black hover:bg-black">View Full</button>
                     </div>
                  
            </section>
      );
};

export default PopularMenu;