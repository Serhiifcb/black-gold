import { AppBar } from "components/AppBar/AppBar";
import { MenuList } from "components/MenuList/MenuList";
import { Footer } from "components/Footer/Footer";

export const Menu = () => {
  
  return (
    <>
      <AppBar />
      <div>
        <MenuList />
      </div>
      <Footer/>
    </>
  );
};