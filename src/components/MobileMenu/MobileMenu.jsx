import css from './MobileMenu.module.css';
import clsx from "clsx";
import { setActivePage } from 'redux/activePageSlice';
import { setActiveFilter } from 'redux/activeFilterSlice';
import { useDispatch, useSelector } from 'react-redux';

export const MobileMenu = ({setIsModal}) => {
  const dispatch = useDispatch();
  const activeItem = useSelector(state => state.activePage);
  const menuItems = ["Піца", "Напої", "Перші страви", "Другі страви", "Десерти", "Закуски", "Гаряче", "Комплексні обіди"];
  const changeActivePage = event => {
    dispatch(setActivePage(event.target.textContent));
    dispatch(setActiveFilter(''));
    setIsModal(false);
  }
  return (
    <ul className={css.menuBackdrop}>
      {menuItems.map(item =>
        <li key={item} className={clsx(css.menuItem, { [css.isActive]: activeItem === item })}>
          <button className={clsx(css.menuLink, { [css.activeLink]: activeItem === item })} onClick={changeActivePage}>
            {item}
          </button>
        </li>)
      }
    </ul>
  );
};