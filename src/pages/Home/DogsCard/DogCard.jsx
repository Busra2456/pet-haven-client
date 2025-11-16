import {Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";


const DogCard = ({cart}) => {
    const {name,image,description,_id,price} = cart; 
    console.log('Allah',cart)
      const {user} =useAuth()
       const navigate = useNavigate();
       const location = useLocation();
       const axiosSecure = useAxiosSecure();
       const [,refetch] = useCart();
        
     const handleAddToCard = () =>{
      
        if(user && user.email){
          // send cart item to the database
          
          const cartItem = {
            menuId:_id,
            email:user.email,
            name,
            image,
            price
          }  
          axiosSecure.post('/carts', cartItem)
          .then(res =>{
            console.log(res.data)
            if(res.data.insertedId){
              Swal.fire({
  position: "top-end",
  icon: "success",
  title: `${name} added to your cart`,
  showConfirmButton: false,
  timer: 1500
});

//refetch cart to update the cart items count
refetch()
            }
          })
        }
        else{
          Swal.fire({
  title: "You are not Logged",
  text: "Please login to add to the cart?",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, login!"
}).then((result) => {
  if (result.isConfirmed) {
   //send the user to the login page
   navigate('/login',{state:{from:location}})
  }
});
        }
       }
      return (
            <div >
                  <div className="card bg-base-100 w-96 shadow-2xl mb-10">
  <figure className="">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl max-w-full min-h-full" />
  </figure>
   <p className="bg-slate-900 text-white absolute right- mr-4 mt-4 px-4">${price}</p>
  <div className="card-body space-y-3 items-center text-center">
    <h2 className="card-title text-3xl font-semibold text-black">{name}</h2>
    <p className="text-[10px] text-base-400" >{description} </p>

      

    <div className="card-actions">
 < button
      onClick={handleAddToCard}
       className="btn border-2 border-b-black hover:text-white py-5 px-9 text-[10px] hover:bg-black">Buy Now</button>

     
              <Link to={`/dashboard/add-review/${_id}`}  state={{ name, image, description, price }}
         >  <button  className=" uppercase btn border-2 hover:text-white py-6 px-20 text-[12px]  mb-6 border-b-black hover:bg-black">review Dogs</button>
                     </Link>
    </div>
  </div>
</div>

                  
            </div>
      );
};

export default DogCard;      