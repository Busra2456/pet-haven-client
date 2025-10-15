
const DogCard = ({cart}) => {
    const {name,image,description} = cart; 
      return (
            <div >
                  <div className="card bg-base-100 w-96 shadow-2xl ">
  <figure className="">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl max-w-full" />
  </figure>
  <div className="card-body space-y-3 items-center text-center">
    <h2 className="card-title text-3xl font-semibold text-black">{name}</h2>
    <p className="text-[10px] text-base-400" >{description} </p>
    <div className="card-actions">
      <button className="btn border-2 border-b-black hover:text-white py-5 px-9 text-[10px] hover:bg-black">Buy Now</button>
    </div>
  </div>
</div>
                  
            </div>
      );
};

export default DogCard;