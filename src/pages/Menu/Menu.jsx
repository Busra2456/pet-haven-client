import { Helmet } from "react-helmet-async";

import menuImg from "../../assets/menu/banner3.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useMenu from "../../hooks/useMenu";
import ToyDogs3 from"../../assets/menu/ToyDogs3.jpg"
import HoundDogs4 from"../../assets/menu/HoundDogs4.jpg"
import HerdingDogs2 from"../../assets/menu/HerdingDogs2.jpg"
import WorkingDogs1 from "../../assets/menu/WorkingDogs1.jpg";
import MenuCategory from "./MenuCategory";
import Covers from "../Shared/Covers";
import { Link } from "react-router-dom";






const Menu = () => {
       const [menu] = useMenu();
       
       const Working = menu.filter(item => item.category === 'Working');
        const Herding = menu.filter(item => item.category === 'Herding');
          const Toy  = menu.filter(item => item.category === 'Toy');
            
             const Hound  = menu.filter(item => item.category === 'Hound');
             
             const  popular = menu.filter(item => item.category === 'popular');
 
            
      return (
            <div>
                  <Helmet>
                        <title>Pet Haven | Menu</title>
                  </Helmet>
                 <Link to={"/order/popular"}>
                   <Covers img={menuImg}  title="our menu" description="Would you like to try a dish?"></Covers>
                 </Link>
                 
                 
                 
                  {/* maim cover */}
              <SectionTitle subHeading="---Don't miss---" heading="TODAY'S OFFER" ></SectionTitle>

                {/* offered menu items */}
             <MenuCategory 
             items={popular}
             title="popular"             
             ></MenuCategory>

             
             
             {/* dessert menu items */}
            
              <MenuCategory 
             items={Working}
             title="Working"
             img={WorkingDogs1}
             description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
             
             ></MenuCategory>

              {/* soup menu items*/}
              <MenuCategory 
             items={Herding}
             title="Herding"
             description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
             img={HerdingDogs2}
             ></MenuCategory> 
             {/* salad  menu items*/}
             <MenuCategory 
             items={Toy}
             title="Toy"
             description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
             img={ToyDogs3}

             ></MenuCategory> 
             {/* pizza menu items*/}
            <MenuCategory 
             items={Hound}
             title="Hound"
             description="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
             img={HoundDogs4}
             ></MenuCategory>  

             
               
                  
            </div>
      );
};

export default Menu;