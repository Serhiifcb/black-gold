import { FilterButton } from "components/FilterButton/FilterButton";
import { MenuCard } from "components/MenuCard/MenuCard";
import { useSelector } from "react-redux";
import css from './MenuList.module.css';
import { fetchMenu, fetchMenuList } from "redux/menu/menuOperations";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const MenuList = () => {
  // const { rootCategory, category } = useParams();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchMenu())
  // }, [dispatch]);
  const activeCategoryId = useSelector(state => state.activePage.id);
  // // console.log('rootMenu: ', rootMenu);
  // let categoryList = [];
  // let activeCategory;
  // categoryList = rootMenu.find(element => element.slug === rootCategory);
  // categoryList && (activeCategory = categoryList.find(element => element.slug === category));1
  useEffect(() => {
    dispatch(fetchMenuList(activeCategoryId))
  }, [dispatch, activeCategoryId]);

  const foodList = useSelector(state => state.menu.menuList);
  const actveCategory = useSelector(state => state.activePage.name);
  // const foodList = menu.find(element => element.name === food);
  const filters = ["Акційні", "Популярні", "Спочатку дешевші", "Спочатку дорожчі"];
  
  return (
    <div className={css.container}>
      <div className={css.content}>
        <p className={css.food}>{actveCategory}</p>
        <div className={css.filterBlock}>
          {filters.map(itemFilter => <FilterButton key={itemFilter } filter={itemFilter}/>)}
        </div>
        <ul className={css.list}>
          {(foodList.length > 0) && (foodList.map(item => <MenuCard key={item.id} name={item.name} url={item.image} about={item.description} price={item.price} size={item.weight} />))}
        </ul>
      </div>
    </div>
  );
};