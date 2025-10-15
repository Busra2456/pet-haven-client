import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured1.jpg';
import './Featured.css'

const Featured = () => {
      return (
            <div className="featured-item bg-fixed text-white pt-8 my-20 featured-img">
                  <SectionTitle subHeading="check it out" heading="FROM OUR MENU" ></SectionTitle>
                   <div className="md:flex justify-center items-center pt-12 pb-20 px-36 ">
                        <div className="w-1/2">
                              <img src={featuredImg} alt="" />
                        </div>
                    <div className="md:ml-15 w-1/2">
                              <p>
                                   March 20, 2023


                              </p>
                              <p className="uppercase">WHERE CAN I GET SOME?</p>
                              <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur. 
                              </p>
                     <button className="btn btn-outline border-0  border-b-2">Order Now</button>

                             
                              
                        </div>
                  
            </div>
              </div>
      );
};

export default Featured;