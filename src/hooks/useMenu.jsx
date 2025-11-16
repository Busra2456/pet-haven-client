// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
      const axiosPublic = useAxiosPublic()
//              const [menu,setMenu] = useState([]);
//        const [loading, setLoading] = useState(true)
//               useEffect(() =>{
//            fetch('http://localhost:5000/menu')
//            .then(res => res.json())
//            .then(data=>{
//             setMenu(data)
//             setLoading(false)
//            }
//                )
//      },[])
const {data: menu = [],isPending: loading,refetch} = useQuery({
  queryKey:['menu'],
  queryFn: async() =>{
    const res = await axiosPublic.get('/menu');
    return res.data;
  }
})

      return [menu,loading,refetch]
};

 export default useMenu;

// // useMenu.js
// const useMenu = () => {
//   const [menu, setMenu] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('http://localhost:5000/users')
//       .then(res => res.json())
//       .then(data => {
//         // যদি array না আসে, empty array fallback
//         setMenu(Array.isArray(data) ? data : []);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error(err);
//         setMenu([]);
//         setLoading(false);
//       });
//   }, []);

//   return [menu, loading];
// };
// export default useMenu;

// import { useEffect, useState } from "react";
// import axios from "axios";

// const useMenu = () => {
//   const [menu, setMenu] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/menu")
//       .then(res => {
//         if (Array.isArray(res.data)) {
//           setMenu(res.data);
//         } else {
//           console.error("Expected an array but got:", res.data);
//           setMenu([]);
//         }
//       })
//       .catch(err => {
//         console.error("Failed to fetch menu:", err);
//         setMenu([]);
//       });
//   }, []);

//   return [menu];
// };

// export default useMenu;
