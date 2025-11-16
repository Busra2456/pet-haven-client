import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const image_hosting_key =import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
        const { register, handleSubmit , reset} = useForm();
       const axiosPublic = useAxiosPublic();
       const axiosSecure = useAxiosSecure()
  const onSubmit = async (data) => {
      console.log(data)
      //image upload to imgbb and then get an url
      const imageFile = {image: data.image[0]}
      const res = await axiosPublic.post(image_hosting_api,imageFile,{
        headers:{
          'content-type' : 'multipart/form-data'
        }
      });
      if (res.data.success){
        //now send the menu item to the server with the image url
        const menuItem = {
          name: data.name,
          category:data.category,
          price: parseFloat(data.price),
          recipe: data.recipe,
          image:res.data.data.display_url
        }
        //
        const menuRes = await axiosSecure.post('/menu',menuItem);
        console.log('da o',menuRes.data);
        if(menuRes.data.insertedId){
          // show success popup
          reset();
          Swal.fire({
  position: "top-end",
  icon: "success",
  title: `${data.name} is added to the menu.`,
  showConfirmButton: false,
  timer: 1500
});

        }
      }
      console.log('paisy',res.data);
};
      return (
            <div className="text-4xl ">
                 <SectionTitle heading="add an item" subHeading="What's new?"></SectionTitle>
                 <div className="">
<form onSubmit={handleSubmit(onSubmit)}>
    
      <div className="form-control">
            <fieldset className="fieldset">
  <legend className="fieldset-legend">Recipe Name*</legend>
  <input 
  {...register("name",{required: true})}
  required
  type="text"
 className="input w-full"
 placeholder="Recipe Name" />
 
</fieldset>
      </div>
      <div className="flex gap-6 ">
      {/* category */}
        <div className="form-control w-full">
            <fieldset className="fieldset">
  <legend className="fieldset-legend">Category Name*</legend>
 <select defaultValue="default" {...register("category",{required: true})} className="select w-full ">
    <option disabled={true} value="default">Select a category</option>
   <option value="Working">Working Dogs</option>
     <option value="Herding">Herding Dogs</option>
    <option value="Toy">Toy Dogs</option>
     <option value="Hound">Hound Dogs</option>
      <option value="popular">popular Dogs</option>
  </select>
 
 
</fieldset>
      </div>
      {/* Price */}
        <div className="form-control w-full">
            <fieldset className="fieldset">
  <legend className="fieldset-legend"> Price*</legend>
    <input 
 
  type="number"
 className="input w-full"
 placeholder="Price" 
  {...register("price",{required: true})}/>
 
</fieldset>
      </div>
     </div>
     {/* recipe details */}
     <div className="">
<fieldset className="fieldset">
  <legend className="fieldset-legend ">Recipe details</legend>
  <textarea  {...register("recipe",{required: true})} className="textarea h-24 w-full" placeholder="Bio"></textarea>
 
</fieldset>
     </div>

     <div className=" w-full ">
      <input  {...register("image",{required: true})} type="file" className="file-input" />
     </div>
 

   <button className="btn">Add Item <FaUtensils></FaUtensils></button>
    </form>
                 </div>
            </div>
      );
};

export default AddItems;