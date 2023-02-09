import css from './MenuCard.module.css';

export const MenuCard = ({ name, url, about, price, size }) => {
  
  (!url) && (url = './images/card-default.jpg');
  return (
    <li className={css.cardBlock}>
      <div className={css.image}>
        <img src={url} alt={`${name}`} className={css.image} />
      </div>
      <div className={css.cardInfo}>
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