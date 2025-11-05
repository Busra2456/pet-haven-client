

import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules';
import DogCard from "../Home/DogsCard/DogCard";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";


const OrderTap = ({items}) => {

  const [currentPage, setCurrentPage] = useState(0);
  // const itemsPerPage = 6;
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const numberOfPages = Math.ceil(items.length / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  

  const paginatedItems = items.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const handlePrev = () => {
    if (currentPage > 0)
       setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < numberOfPages - 1) 
      setCurrentPage(currentPage + 1);
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };


   const handleItemsPerPage = e =>{
        const val = parseInt(e.target.value)
       console.log(val)
       setItemsPerPage(val);
       setCurrentPage(0);}

  
  return (
    <div>
    
      <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <div className="grid md:grid-cols-3 gap-10 mt-6">
            {
            paginatedItems.map(cart => (
              <DogCard key={cart._id} cart={cart} />
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
       <p className="max-w-90 mx-auto text-center  text-3xl font-bold my-8 border-b-4 border-gray-900 pb-4">Pages : {currentPage}</p>

      <div className="flex justify-center gap-2 my-4 ">
         
        <button onClick={handlePrev} className="text-6xl  font-semibold rounded-sm text-black">
          <FaCaretLeft />


        </button>
        <div className="">

       
        {
            pages.map(page => (
            <button 
            key={ page }
            
            className={currentPage === page ? 'border-3 bg-black py-2 px-3 text-2xl m-2 font-semibold rounded-sm text-white' : 'border-3 border-gray-300 py-2 px-3 text-2xl m-2 font-semibold rounded-sm text-black'}
            onClick={() => setCurrentPage(page)}
            > {page} </button> ))
            } </div>

            
           <button onClick={handleNext} className=" text-6xl  font-semibold rounded-sm text-black">
<FaCaretRight />

</button>
          
      
       

        <select
          value={itemsPerPage}
         onChange={handleItemsPerPage}
          className="bg-black px-3 text-2xl font-semibold rounded-sm text-white"
        >
          <option value={'3'}>3</option>
          <option value={'5'}>5</option>
          <option value={'9'}>9</option>
          <option value={'12'}>12</option>
        </select>
      </div>
    </div>
  );
};

export default OrderTap;
