//**----------------npm install --save react-tabs------------------ */

import orderCoverImg from "../../assets/menu/00.jpg"

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import OrderTap from "./OrderTap";
import Covers from "../Shared/Covers";
import useMenu from "../../hooks/useMenu";

const Order = () => {
     

 const categories = ['Working', 'Herding','Toy','Hound','popular']
      const {category} = useParams();
      const initialIndex = categories.indexOf(category)
      const [tabIndex,setTabIndex] = useState(initialIndex);
     const [menu] = useMenu()
      console.log("ooo",menu)


      const Working = menu.filter(item => item.category === 'Working');
        const Herding = menu.filter(item => item.category === 'Herding');
          const Toy = menu.filter(item => item.category === 'Toy');
            
             const Hound = menu.filter(item => item.category === 'Hound');
             
              const popular = menu.filter(item => item.category === 'popular');
      
      return (
             <div className="">
                   <Helmet>
                          <title>Pet Haven | Order Food</title>
                          
                        </Helmet>
                 <Covers img={orderCoverImg} title="Order food"
                 ></Covers> 
           <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Working Dogs</Tab>
    <Tab>Herding Dogs</Tab>
     <Tab>Toy Dogs</Tab>
    <Tab>Hound Dogs</Tab>
     <Tab>popular Dogs</Tab>
   
  </TabList>
   {/* <TabPanel>
       <div className="grid md:grid-cols-3 gap-10 mt-6">
            {salad.map(item =><FoodCards
      key={item._id}
      item={item}
      ></FoodCards>)}
      </div> 
  </TabPanel> */}
  <TabPanel>
      <OrderTap
      title="Working" items={Working}></OrderTap>
  </TabPanel>
  <TabPanel>
       <OrderTap  title="Herding" items={Herding}></OrderTap>
  </TabPanel>
  <TabPanel>
       <OrderTap title="Toy" items={Toy}></OrderTap>
  </TabPanel>
  <TabPanel>
       <OrderTap  title="Hound" items={Hound}></OrderTap>
  </TabPanel>
  <TabPanel>
       <OrderTap title="popular" items={popular}></OrderTap>
  </TabPanel>
 
</Tabs>
            </div>
      );
};

export default Order;

