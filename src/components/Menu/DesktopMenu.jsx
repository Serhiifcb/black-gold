import css from './DesktopMenu.module.css';
import clsx from "clsx";
import { setActivePage, setActiveId } from 'redux/activePageSlice';
import { setActiveFilter } from 'redux/activeFilterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { animateScroll as scroll} from 'react-scroll'
import styled from "styled-components";
import { fetchMenu } from 'redux/menu/menuOperations';
import { useEffect} from 'react';
import { useParams } from 'react-router-dom';

const StyledRootLink = styled(NavLink)`
  &.active {
    background-color: #d7b56d;
    color: black;
    opacity: 1;
  }
`;

const StyledCategoryLink = styled(NavLink)`
  &.active {
    background: #262626;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.25);
    border-radius: 0px 4px 4px 0px;
    border-right: 5px solid #EAB441;
    color:#EAB441;
  }
`;

export const DesktopMenu = () => {
  const { rootCategory } = useParams();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchMenu())
  }, [dispatch]);
  
  const rootMenu = useSelector(state => state.menu.categories);
  
  const categoryList = rootMenu.find(element => element.slug === rootCategory);
  
  const changeActivePage = event => {
    dispatch(setActivePage(event.target.textContent));
    dispatch(setActiveFilter(''));
    scroll.scrollToTop();
  }

  const changeActiveRootCategory = () => {
    dispatch(setActiveFilter(''));
    scroll.scrollToTop();
  }

  const setFirstActiveCategory = (activeId) => {
    dispatch(setActiveId(activeId[0].id)); 
    dispatch(setActivePage(activeId[0].name));
  }
  const setActiveCategory = (activeId) => {
    dispatch(setActiveId(activeId));
  }
  
  return (
    <>
      <div className={css.rootCategories}>
        {(rootMenu.length > 0) && (rootMenu.map(item =>
          <StyledRootLink
            key={item.name}
            className={css.rootCategoriesItem}
            to={`/${item.slug}`}
            onClick={(event) => { changeActiveRootCategory(event); setFirstActiveCategory(item.children) }}>
            {item.name}
          </StyledRootLink>
          ))}
      </div>
      <div className={css.menu}>
        {(categoryList) && (categoryList.children.map(item =>
          <StyledCategoryLink
            key={item.name}
            className={clsx(css.menuItem, css.menuLink)}
            to={`/${rootCategory}/${item.slug}`}
            onClick={(event) => { changeActivePage(event); setActiveCategory(item.id) }}>
            {item.name}
          </StyledCategoryLink>
        ))}
      </div>
    </>
  );
};