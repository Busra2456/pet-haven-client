//**-----------------------npm i react-parallax------------------- */
import { Parallax } from 'react-parallax';

const Cover = ({img,title,description}) => {
      return (
              <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        
        bgImageAlt="The menu"
        strength={0}
          bgImageStyle={{
        objectFit: "contain", 
      }}

  
    >
      <div className="hero h-[400px] ">
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center ">
    <div className="  absolute left-1/2 transform -translate-x-1/2 -translate-y-1/40 bg-black/45 bg-opacity-80 py-20 px-30 w-6xl text-center space-y-8 max-w-5xl mx-auto
    ">
      <h1 className="mb-5 text-4xl font-bold uppercase">{title}</h1>
      <p className="mb-5 uppercase">
       {description}
      </p>
      
    </div>
  </div>
</div>
    </Parallax>
      );
};

export default Cover;