import css from './MobileMenu.module.css';

export const MobileMenu = () => {
  const menuItems = ["Піца", "Напої", "Перші страви", "Другі страви", "Десерти", "Закуски", "Гаряче", "Комплексні обіди"];
  return (
    <ul className={css.menuBackdrop}>
      {menuItems.map(item => <li key={item} className={css.menuItem}>{item}</li>)}
    </ul>
  );
};