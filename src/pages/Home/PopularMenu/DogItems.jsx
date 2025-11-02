

const DogItems = ({item}) => {
      const {name,image,price,description} = item
      return (
            <div>
                  <div className="flex items-center space-x-3 my-6">
                  <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[100px] h-[80px]" src={image} alt="" />
                  <div>
                        <h3 className="uppercase text-xl mb-2" >{name}-----------</h3>
                        <p>{description}</p>
                       
                  </div>
                  <p className="text-yellow-500" >{price}</p>

                  
            </div>
                 
            </div>
      );
};

export default DogItems;