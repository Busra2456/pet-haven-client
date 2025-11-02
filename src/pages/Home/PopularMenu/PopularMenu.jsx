// import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import DogItems from "./DogItems";
import useMenu from "../../../hooks/useMenu";
import { Link } from "react-router-dom";
import Covers from "../../Shared/Covers";
import MenuCategory from "../../Menu/MenuCategory";



const PopularMenu = () => {
    
      const [menu] = useMenu();
       const popular = menu.filter(item => item.category === 'popular')

      

      // const [items,setItems] = useState([]);
      //  useEffect(() =>{
      //       fetch('dogdata.json')
      //       .then(res=>res.json())
      //       .then(data =>{
      //             const poplarItems = data.filter(item => item.category === 'popular')
      //             setItems(poplarItems)
      //       })
      // },[])


      return (
            <section className="mb-12">
                  <SectionTitle
                  heading="---Check it out---"
                  subHeading="FROM OUR MENU"
                  ></SectionTitle>
                   {/* <Covers title="our menu"></Covers> */}



                  {/* <div  className="grid md:grid-cols-2 gap-10">
                        {
                         popular.map(item=><DogItems key={item._id} item={item} ></DogItems>) 
                        }
                  </div> */}
                   <MenuCategory 
             items={popular}
             title="popular"
             
             
             ></MenuCategory> 
                  {/* <div className="text-center">
                 
         <Link
         >  <button  className=" uppercase btn border-2 hover:text-white py-6 px-20 text-[12px]  mb-6 border-b-black hover:bg-black">ORDER YOUR FAVOURITE Dogs</button>
                     </Link>
                     </div> */}
                  
            </section>
      );
};

export default PopularMenu;