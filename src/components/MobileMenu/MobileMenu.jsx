import css from './MobileMenu.module.css';
import clsx from "clsx";
import { setActivePage } from 'redux/activePageSlice';
import { setActiveFilter } from 'redux/activeFilterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setIsModal } from 'redux/isModalSlice';
import { NavLink } from 'react-router-dom';
import { animateScroll as scroll} from 'react-scroll'


export const MobileMenu = () => {
  const dispatch = useDispatch();
  const activeItem = useSelector(state => state.activePage);
  const menu = useSelector(state => state.kitchenMenu.menu);
  const changeActivePage = event => {
    dispatch(setActivePage(event.target.textContent));
    dispatch(setActiveFilter(''));
    dispatch(setIsModal(false));
    scroll.scrollToTop();
  }
  return (
    <div className={css.menuBackdrop}>
      <ul>
      {menu.map(item =>
        <li key={item.name} className={clsx(css.menuItem, { [css.isActive]: activeItem === item.name })}>
          <NavLink to='/menu' className={clsx(css.menuLink, { [css.activeLink]: activeItem === item.name })} onClick={changeActivePage}>
            {item.name}
          </NavLink>
        </li>)
      }
      </ul>
    </div>
  );
};