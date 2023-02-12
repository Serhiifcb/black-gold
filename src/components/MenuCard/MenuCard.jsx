import cardDefault from '../../svg/card-default.jpg';
import css from './MenuCard.module.css';

export const MenuCard = ({ name, url, about, price, size }) => {

  return (
    <li className={css.cardBlock}>
      <div className={css.image}>
        {url && (<img src={url} alt={`${name}`} className={css.image} />)}
        {!url && (<img src={cardDefault} alt={`${name}`} className={css.defaultImage} />)}
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