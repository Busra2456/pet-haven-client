        //npm install react-hook-form// 
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SignUp = () => {
        const axiosPublic = useAxiosPublic();
      const { register, handleSubmit,reset , formState: { errors } } = useForm();
       const {createUser, updateUserProfile} =useContext(AuthContext)
       const navigate = useNavigate()
       const onSubmit = (data) =>{
           
            createUser(data.email, data.password)
            .then((result) => {
                  const loggedUser = result.user;
                  console.log(loggedUser)
                  updateUserProfile(data.name,data.photoURL)
                  .then(()=>{
                  //create user entry in the database
                  const userInfo ={
                   name: data.name,
                   email: data.email
                    }
                    axiosPublic.post('/users',userInfo)
                    .then(res =>{
                      if(res.data.insertedId){
                        console.log('user added to the database')
                          reset();
                   
Swal.fire({
  position: "top-end",
  icon: "success",
  title: "User created successfully",
  showConfirmButton: false,
  timer: 1500
});
navigate('/');

                      }
                    })
                  
//                    reset();
                   
// Swal.fire({
//   position: "top-end",
//   icon: "success",
//   title: "User created successfully",
//   showConfirmButton: false,
//   timer: 1500
// });
// navigate('/');
                  })
                  .catch(error => console.log(error))
                  
            })
            
       }

       

      return (
             <>
            
             <Helmet>
                <title>Bistro Boss | Sign Up</title>
                                      
                    </Helmet>
              <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col md:flex-row-reverse">
    <div className="text-center md:w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card md:w-1/2 bg-base-100 max-w-sm  shadow-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="fieldset">
         
         
           <label className="label">Name</label>
          <input type="text" {...register("name",{ required: true }) }  name="name" className="input" placeholder="Name" />
            {errors.name && <span className="text-red-600">Name field is required</span>}


          <label className="label">Photo URL</label>
          <input type="text" {...register("photoURL",{ required: true }) }   className="input" placeholder="Photo URL" />
            {errors.name && <span className="text-red-600">Photo URL is required</span>}
          
          
           <label className="label">Email</label>
          <input type="email" {...register("email",{ required: true })} name="email" className="input" placeholder="Email" />
 {errors.email && <span className="text-red-600">Email field is required</span>}

          <label className="label">Password</label>
          <input type="password" {...register("password", {
             required: true,
             minLength:6, 
             maxLength: 20,
             pattern:/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
             
             
              })} name="password"  className="input" placeholder="Password" />
           {errors.password?.type === "required" && (
        <p className="text-red-600">Password is required</p>
      )}

                 {errors.password?.type === "minLength" && (
        <p className="text-red-600">Password must be 6 characters</p>
      )}
       {errors.password?.type === "maxLength" && (
        <p className="text-red-600">Password must be less then 20</p>
      )}
      {errors.password?.type === "pattern" && (
        <p className="text-red-600">Password must be have one Uppercase, one lower case, one number and one special character</p>
      )}

          <div><a className="link link-hover">Forgot password?</a></div>

           <label className="label">  </label>
         
         

          <input  className="btn btn-neutral mt-4" type="submit" value="Sign Up" />

          <p className="px-6"><small>Already have an account<Link to="/login">Create an account</Link></small></p>
          {/* <SocialLogin></SocialLogin> */}
        </div>
      </form>
    </div>
  </div>
</div>
            </>
      );
};

export default SignUp;