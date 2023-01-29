import css from './DesktopMenu.module.css';
import clsx from "clsx";
import { setActivePage } from 'redux/activePageSlice';
import { setActiveFilter } from 'redux/activeFilterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { animateScroll as scroll} from 'react-scroll'


export const DesktopMenu = () => {
  const dispatch = useDispatch();
  const activeItem = useSelector(state => state.activePage);
  const menuItems = ["Піца", "Напої", "Перші страви", "Другі страви", "Десерти", "Закуски", "Гаряче", "Комплексні обіди"];
  const changeActivePage = event => {
    dispatch(setActivePage(event.target.textContent));
    dispatch(setActiveFilter(''));
    scroll.scrollToTop();
  }
  return (
    <ul className={css.menuBackdrop}>
      {menuItems.map(item =>
        <li key={item} className={clsx(css.menuItem, { [css.isActive]: activeItem === item })}>
          <NavLink to='/menu' className={clsx(css.menuLink, { [css.activeLink]: activeItem === item })} onClick={changeActivePage}>
            {item}
          </NavLink>
        </li>)
      }
    </ul>
  );
};