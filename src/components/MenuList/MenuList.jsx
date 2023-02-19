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
  const filter = useSelector(state => state.activeFilter);
  const categoryList = rootMenu.find(element => element.slug === rootCategory);
  const activeCategory1 = categoryList ? categoryList.children.find(element => element.slug === category) : null;
 
  const dispatch = useDispatch();
  const activeCategoryId = (!activeCategory1 && categoryList) ? categoryList.children[0].id : activeCategory1 ? activeCategory1.id : 5;
    
  useEffect(() => {
    dispatch(fetchMenuList(activeCategoryId))
    
  }, [dispatch, activeCategoryId]);

  const foodList = useSelector(state => state.menu.menuList);
  let filteredList = [...foodList];
  if ((foodList.length > 0) && filter === 'Спочатку дешевші') { (filteredList = filteredList.sort((first, second) => first.price - second.price)) };
  if ((foodList.length > 0) && filter === 'Спочатку дорожчі') { (filteredList = filteredList.sort((first, second) => second.price - first.price)) };

  const filters = ["Акційні", "Популярні", "Спочатку дешевші", "Спочатку дорожчі"];
  
  return (
    <div className={css.container}>
      <div className={css.content}>
        {activeCategory1 ? <p className={css.food}>{activeCategory1.name}</p> : categoryList ? <p className={css.food}>{categoryList.children[0].name}</p> : <p className={css.food}></p>}
        <div className={css.filterBlock}>
          {filters.map(itemFilter =>
            <FilterButton
              key={itemFilter}
              filter={itemFilter}
            />)}
        </div>
        <ul className={css.list}>
          {(filteredList.length > 0) && (filteredList.map(item =>
            <MenuCard
              key={item.id}
              name={item.name}
              url={item.image}
              about={item.description}
              price={item.price}
              size={item.weight}
            />))}
        </ul>
      </div>
    </div>
  );
};