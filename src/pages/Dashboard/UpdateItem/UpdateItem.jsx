import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import useMenu from "../../../hooks/useMenu";

const image_hosting_key =import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateItem = () => {
      // const [refetch]= useMenu();
         const { register, handleSubmit } = useForm();
      const  {name,category,description,price,_id} = useLoaderData();

     console.log("lllllllllllllll",_id)
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
        const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
        console.log('da o',menuRes.data);
        if(menuRes.data.modifiedCount > 0){
          // show success popup
          // refetch();
          Swal.fire({
  position: "top-end",
  icon: "success",
  title: `${data.name} is updated to the menu.`,
  showConfirmButton: false,
  timer: 1500
});

        }
      }
      console.log('paisy',res.data);
};
      return (
            <div>
                 <SectionTitle heading="Update an Item" subHeading="Refresh info" ></SectionTitle> 
                  <div className="">
                 <form onSubmit={handleSubmit(onSubmit)}>
                     
                       <div className="form-control">
                             <fieldset className="fieldset">
                   <legend className="fieldset-legend">Recipe Name*</legend>
                   <input 
                   {...register("name",{required: true})}
                   required
                   type="text"
                   defaultValue={name}
                  className="input w-full"
                  placeholder="Dog Name" />
                  
                 </fieldset>
                       </div>
                       <div className="flex gap-6 ">
                       {/* category */}
                         <div className="form-control w-full">
                             <fieldset className="fieldset">
                   <legend className="fieldset-legend">Category Name*</legend>
                  <select defaultValue={category} {...register("category",{required: true})} className="select w-full ">
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
                   defaultValue={price}
                  className="input w-full"
                  placeholder="Price" 
                   {...register("price",{required: true})}/>
                  
                 </fieldset>
                       </div>
                      </div>
                      {/* recipe details */}
                      <div className="">
                 <fieldset className="fieldset">
                   <legend className="fieldset-legend ">Dog details</legend>
                   <textarea defaultValue={description} {...register("recipe",{required: true})} className="textarea h-24 w-full" placeholder="Bio"></textarea>
                  
                 </fieldset>
                      </div>
                 
                      <div className="w-full  ">
                       <input  {...register("image",{required: true})} type="file" className="file-input" />
                      </div>
                  
                 
                    <button className="btn">Update menu Item</button>
                     </form>
                                  </div>
            </div>
      );
};

export default UpdateItem;