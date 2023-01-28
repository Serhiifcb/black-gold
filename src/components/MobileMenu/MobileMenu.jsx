import css from './MobileMenu.module.css';
import clsx from "clsx";
import { setActivePage } from 'redux/activePageSlice';
import { setActiveFilter } from 'redux/activeFilterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setIsModal } from 'redux/isModalSlice';
import { NavLink } from 'react-router-dom';

export const MobileMenu = () => {
  const dispatch = useDispatch();
  const activeItem = useSelector(state => state.activePage);
  const menuItems = ["Піца", "Напої", "Перші страви", "Другі страви", "Десерти", "Закуски", "Гаряче", "Комплексні обіди"];
  const changeActivePage = event => {
    dispatch(setActivePage(event.target.textContent));
    dispatch(setActiveFilter(''));
    dispatch(setIsModal(false));
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