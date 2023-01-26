import { MenuCard } from "components/MenuCard/MenuCard";
import { useSelector } from "react-redux";
import css from './MenuList.module.css'


export const MenuList = () => {
  const food = useSelector(state => state.activePage);
  const foodList = [
    { name: "Баскайола", url: "./images/pizza.png", about: "Моцарела, томати чері, рукола, пармезан, вершки, сухий орегано", price: "165₴", size: "/ 30 см / 450 г" },
    { name: "Емма", url: "./images/pizza2.png", about: "Моцарела, томати чері, рукола, пармезан, вершки, сухий орегано", price: "125₴", size: "/ 30 см / 450 г"},
    { name: "Цезаре", url: "./images/pizza3.png", about: "Моцарела, томати чері, рукола, пармезан, вершки, сухий орегано", price: "175₴", size: "/ 30 см / 450 г" },
    { name: "Веган Чіз", url: "./images/pizza4.png", about: "Моцарела, томати чері, рукола, пармезан, вершки, сухий орегано", price: "165₴", size: "/ 30 см / 450 г" },
    { name: "Потрійний сир", url: "./images/pizza3.png", about: "Моцарела, томати чері, рукола, пармезан, вершки, сухий орегано", price: "135₴", size: "/ 30 см / 450 г" },
    { name: "Базилік", url: "./images/pizza4.png", about: "Моцарела, томати чері, рукола, пармезан, вершки, сухий орегано", price: "140₴", size: "/ 30 см / 450 г" },
    { name: "Папероні", url: "./images/pizza.png", about: "Моцарела, томати чері, рукола, пармезан, вершки, сухий орегано", price: "180₴", size: "/ 30 см / 450 г" },
    { name: "Капрезе", url: "./images/pizza2.png", about: "Моцарела, томати чері, рукола, пармезан, вершки, сухий орегано", price: "155₴", size: "/ 30 см / 450 г" },
    { name: "Мисливська", url: "./images/pizza.png", about: "Моцарела, томати чері, рукола, пармезан, вершки, сухий орегано", price: "150₴", size: "/ 30 см / 450 г" },
    { name: "Кватро формаджі", url: "./images/pizza2.png", about: "Моцарела, томати чері, рукола, пармезан, вершки, сухий орегано", price: "175₴", size: "/ 30 см / 450 г" },
    { name: "Тропікана", url: "./images/pizza4.png", about: "Моцарела, томати чері, рукола, пармезан, вершки, сухий орегано", price: "165₴", size: "/ 30 см / 450 г" },
    { name: "Б'янко кон карне", url: "./images/pizza3.png", about: "Моцарела, томати чері, рукола, пармезан, вершки, сухий орегано", price: "140₴", size: "/ 30 см / 450 г" },
  ];
  return (
    <div className={css.container}>
      <p className={css.food}>{food}</p>
      <ul className={css.list}>
        {foodList.map(item => <MenuCard key={item.name} name={item.name} url={item.url} about={item.about} price={item.price} size={item.size } />)}
        
      </ul>
    </div>
  );
};