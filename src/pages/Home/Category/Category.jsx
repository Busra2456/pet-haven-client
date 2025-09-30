       //  Use swiper JS to create a category Swiper
                  //  npm install swiper
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {
      return (
            <section>
             <SectionTitle
             subHeading={"From 11.00am to 10.00pm "}
             heading={"Order Online"}
             ></SectionTitle>
                
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide><img src={slide1} alt="" />
        <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Entlebucher</h3></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" /> <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Siberian Husky</h3></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /> <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Vizsla</h3></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" /> <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Dalmatian</h3></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" /> <h3 className='text-4xl uppercase text-center -mt-20 text-white'>Cavapoo</h3></SwiperSlide>
        
       
      </Swiper>
   
             
            </section>
      );
};

export default Category;