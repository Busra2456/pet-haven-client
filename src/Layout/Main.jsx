import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBer from "../pages/Shared/NavBer/NavBer";

const Main = () => {
      const location = useLocation();
      const noNavBerFooter = location.pathname.includes('login') || location.pathname.includes('signup') || location.pathname.includes('add-review')
      return (
            <div> 
                  
                 { noNavBerFooter || <NavBer></NavBer>}
                  <Outlet></Outlet>
                 { noNavBerFooter || <Footer></Footer>}
            </div>
      );
};

export default Main;