import { FilterButton } from "components/FilterButtons/FilterButton";
import { MenuCard } from "components/MenuCard/MenuCard";
import { useSelector } from "react-redux";
import css from './MenuList.module.css';

export const MenuList = () => {
  
  const food = useSelector(state => state.activePage);
  const foodList = [
    { name: "Баскайола", url: "./black-gold/images/pizza.png", about: "Моцарела, томати чері, рукола, пармезан, вершки, сухий орегано", price: "165₴", size: "/ 30 см / 450 г" },
    { name: "Емма", url: "./black-gold/images/pizza2.png", about: "Моцарела, томати чері, рукола, пармезан, вершки, сухий орегано", price: "125₴", size: "/ 30 см / 450 г"},
    { name: "Цезаре", url: "./black-gold/images/pizza3.png", about: "Моцарела, томати чері, рукола, пармезан, вершки, сухий орегано", price: "175₴", size: "/ 30 см / 450 г" },
    { name: "Веган Чіз", url: "./black-gold/images/pizza4.png", about: "Моцарела, томати чері, рукола, пармезан, вершки, сухий орегано", price: "165₴", size: "/ 30 см / 450 г" },
    { name: "Потрійний сир", url: "./black-gold/images/pizza3.png", about: "Моцарела, томати чері, рукола, пармезан, вершки, сухий орегано", price: "135₴", size: "/ 30 см / 450 г" },
    { name: "Базилік", url: "./black-gold/images/pizza4.png", about: "Моцарела, томати чері, рукола, пармезан, вершки, сухий орегано", price: "140₴", size: "/ 30 см / 450 г" },
    { name: "Папероні", url: "./black-gold/images/pizza.png", about: "Моцарела, томати чері, рукола, пармезан, вершки, сухий орегано", price: "180₴", size: "/ 30 см / 450 г" },
    { name: "Капрезе", url: "./black-gold/images/pizza2.png", about: "Моцарела, томати чері, рукола, пармезан, вершки, сухий орегано", price: "155₴", size: "/ 30 см / 450 г" },
    { name: "Мисливська", url: "./black-gold/images/pizza.png", about: "Моцарела, томати чері, рукола, пармезан, вершки, сухий орегано", price: "150₴", size: "/ 30 см / 450 г" },
    { name: "Кватро формаджі", url: "./black-gold/images/pizza2.png", about: "Моцарела, томати чері, рукола, пармезан, вершки, сухий орегано", price: "175₴", size: "/ 30 см / 450 г" },
    { name: "Тропікана", url: "./black-gold/images/pizza4.png", about: "Моцарела, томати чері, рукола, пармезан, вершки, сухий орегано", price: "165₴", size: "/ 30 см / 450 г" },
    { name: "Б'янко кон карне", url: "./black-gold/images/pizza3.png", about: "Моцарела, томати чері, рукола, пармезан, вершки, сухий орегано", price: "140₴", size: "/ 30 см / 450 г" },
  ];
  const filters = ["Акційні", "Популярні", "Спочатку дешевші", "Спочатку дорожчі"];
  
  return (
    <div className={css.container}>
      <p className={css.food}>{food}</p>
      <div className={css.filterBlock}>
        {filters.map(itemFilter => <FilterButton key={itemFilter } filter={itemFilter}/>)}
      </div>
      <ul className={css.list}>
        {foodList.map(item => <MenuCard key={item.name} name={item.name} url={item.url} about={item.about} price={item.price} size={item.size } />)}
      </ul>
    </div>
  );
};