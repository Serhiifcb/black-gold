import { Outlet } from "react-router-dom";
import { AppBar } from "components/AppBar/AppBar";
import { Footer } from "components/Footer/Footer";
import css from "./Layout.module.css"
import { DesktopAppBar } from "components/DesktopAppBar/DesktopAppBar";
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { setIsModal } from 'redux/isModalSlice';

export const Layout = () => {
  const dispatch = useDispatch();
  const isModal = useSelector(state => state.isModal);
  const isDesktop = useMediaQuery({
    query: '(min-width: 1440px)'
  })
  isDesktop && isModal &&  dispatch(setIsModal(false));
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