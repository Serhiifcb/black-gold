import css from './MenuCard.module.css';

export const MenuCard = ({ name, url, about, price, size }) => {
  
  return (
      <li className={css.card}>
        <img src={url} alt="food" className={css.image } />
        <div style={{padding: '24px', backgroundColor: '#1A2514'}}>
          <p className={css.name}>{name}</p>
          <p className={css.about}>{about}</p>
          <span className={css.price}>{price}</span>
          <span className={css.size}>{size}</span>
        </div>
      </li>    
  );
};