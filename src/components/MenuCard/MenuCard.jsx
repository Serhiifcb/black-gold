import css from './MenuCard.module.css';

export const MenuCard = ({ name, url, about, price, size }) => {
  
  return (
    <li className={css.card}>
      <div className={css.image}>
        <img src={url} alt="food" className={css.image} />
      </div>
      <div className={css.info}>
        <p className={css.name}>{name}</p>
        <p className={css.about}>{about}</p>
        <div className={css.downblock}>
          <span className={css.price}>{price}₴</span>
          <span className={css.size}>/ {size}</span>
        </div>
      </div>
    </li>    
  );
};