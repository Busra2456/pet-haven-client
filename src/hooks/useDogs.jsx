import { useEffect, useState } from "react";

const useDogs = () => {
     
           const [dogs,setDogs] = useState([]);
     const [loading, setLoading] = useState(true)
            useEffect(() =>{
                 fetch('http://localhost:5000/dogs')
                 .then(res => res.json())
                 .then(data => 
                     {setDogs(data)
                       setLoading(false)
                         console.log('API response:', data); 
                     })
           },[])
     
           return [dogs,loading]
     
};

export default useDogs;