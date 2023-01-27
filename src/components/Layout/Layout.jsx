// import { Menu } from "pages/Menu";
import { Outlet } from "react-router-dom";
import { AppBar } from "components/AppBar/AppBar";
import { Footer } from "components/Footer/Footer";

export const Layout = () => {
  
  return (
    <div>
      <AppBar />
      {/* <Menu /> */}
      <Outlet/>
      <Footer />
    </div>
  );
};