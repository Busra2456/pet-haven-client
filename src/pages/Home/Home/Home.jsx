import PetHaven from "../../PetHaven/PetHaven";
import Banner from "../Banner/Banner";
import CallUs from "../callUs/CallUs";
import Category from "../Category/Category";
import DogsCard from "../DogsCard/DogsCard";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
      return (
            <div>
                <Banner></Banner>
                <Category></Category>
                <PetHaven></PetHaven>
                <PopularMenu></PopularMenu>
                <CallUs></CallUs>
                <DogsCard></DogsCard>
                <Featured></Featured>
                <Testimonials></Testimonials>
            </div>
      );
};

export default Home;