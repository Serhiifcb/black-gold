import css from './Button.module.css';

export const Button = ({text}) => {
  
  return (
    <>
      <button className={css.Btn}>{text}</button>
    </>
  );
};