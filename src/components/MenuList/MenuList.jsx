import { FilterButton } from "components/FilterButton/FilterButton";
import { MenuCard } from "components/MenuCard/MenuCard";
import { useSelector } from "react-redux";
import css from './MenuList.module.css';
import { fetchMenuList } from "redux/menu/menuOperations";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const MenuList = () => {
  
  
  const { rootCategory, category } = useParams();  
  const rootMenu = useSelector(state => state.menu.categories);
  console.log('rootMenu: ', rootMenu);
  const categoryList = rootMenu.find(element => element.slug === rootCategory);
  console.log('categoryList: ', categoryList);
  const activeCategory1 = categoryList ? categoryList.children.find(element => element.slug === category) : null;
  console.log('activeCategory1: ', activeCategory1);


  const dispatch = useDispatch();
  // const activeCategoryId = useSelector(state => state.activePage.id);
  const activeCategoryId = (!activeCategory1 && categoryList) ? categoryList.children[0].id : activeCategory1 ? activeCategory1.id : 5;
  console.log('activeCategoryId: ', activeCategoryId);
  
  useEffect(() => {
    dispatch(fetchMenuList(activeCategoryId))
  }, [dispatch, activeCategoryId]);

  const foodList = useSelector(state => state.menu.menuList);
  // const activeCategory = useSelector(state => state.activePage.name);
  const filters = ["Акційні", "Популярні", "Спочатку дешевші", "Спочатку дорожчі"];
  
  return (
    <div className={css.container}>
      <div className={css.content}>
        {activeCategory1 ? <p className={css.food}>{activeCategory1.name}</p> : categoryList ? <p className={css.food}>{categoryList.children[0].name}</p> : <p className={css.food}></p>}
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