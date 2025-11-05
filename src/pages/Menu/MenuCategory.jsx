import { Link } from "react-router-dom";
import DogItems from "../Home/PopularMenu/DogItems";
import Covers from "../Shared/Covers";
import { useState } from "react";
const MenuCategory = ({items,title,img,description}) => {
      console.log("xxxxxxxxxxxx",items)
        const [dataLength,setDataLength] = useState(4);
        const [show4,setShoe4] = useState(false);
        const handleShow4 = () =>{
            if (show4){
                  setDataLength(4);
                  setShoe4(false)
            }
            else{
                  setDataLength(items.length);
                  setShoe4(true);
            }

        }
      return (
             <div className="pt-8">
                  {title && img ?( <Link to={`/order/${title}`}> <Covers img={img} title={title} description={description}></Covers> </Link>) :title ? (<h2 className="text-3xl font-bold text-center mb-6" > </h2>

                  ): null}
                 <div div className="grid md:grid-cols-2 gap-10 my-16">
                  {
                       items.slice(0,dataLength).map(item=><DogItems
                        key={item._id}
                        item={item}
                        ></DogItems>)
                  }
            </div> 
            <div className="text-center">
              <button onClick={handleShow4} className=" uppercase btn border-2 hover:text-white py-6 px-20 text-[12px]  mb-2 border-b-black hover:bg-black">{show4 ? "Show Less" : "Show All"}</button>
              

            </div>
            <div className="text-center">
                 
         <Link to={`/order/${title}`}
         >  <button  className=" uppercase btn border-2 hover:text-white py-6 px-20 text-[12px]  mb-6 border-b-black hover:bg-black">ORDER YOUR FAVOURITE Dogs</button>
                     </Link>
                     </div>
            </div>
      );
};

export default MenuCategory;