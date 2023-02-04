// import { Menu } from "pages/Menu";
import { Outlet } from "react-router-dom";
import { AppBar } from "components/AppBar/AppBar";
import { Footer } from "components/Footer/Footer";
import css from "./Layout.module.css"
import { DesktopAppBar } from "components/DesktopAppBar/DesktopAppBar";
import { useSelector } from 'react-redux';
// import clsx from "clsx";

export const Layout = () => {
  const isModal = useSelector(state => state.isModal);
  return (
    <div className={css.layout}>
      <AppBar />
      <DesktopAppBar/>
      {!isModal && <div className={css.content}>
        <Outlet />
        <Footer />
      </div>}
    </div>
  );
};