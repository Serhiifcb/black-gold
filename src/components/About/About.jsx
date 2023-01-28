// import { Outlet } from "react-router-dom";
import { AppBar } from "components/AppBar/AppBar";
import { Footer } from "components/Footer/Footer";
import css from "./About.module.css"
import { DesktopAppBar } from "components/DesktopAppBar/DesktopAppBar";
import { useSelector } from 'react-redux';
import clsx from "clsx";
import { Button } from "components/Buttons/Button";
import { ReactComponent as Mail } from '../../svg/mail.svg';
import { ReactComponent as YellowPhone } from '../../svg/yellow-phone.svg';
import { ReactComponent as Instagram } from '../../svg/instagram.svg';
import { ReactComponent as Facebook } from '../../svg/facebook.svg';


export const About = () => {
  const isModal = useSelector(state => state.isModal);
  return (
    <div className={clsx(css.layout, { [css.noScroll]: isModal })}>
      <AppBar />
      <DesktopAppBar/>
      <div className={css.content}>
        <div className={css.aboutBlock}>
          <h1 className={css.aboutTitle}>Grand Garden Restaurant</h1>
          <p className={css.aboutText}>Ресторан «Grand Garden» гостинно запрошує відвідати нашу оглядову терасу. Ми знаходимося в самому центрі
            Львова поруч з Площею Ринок та Оперним театром. З сьомого поверху, на якому розташований ресторан,
            відвідувачі зможуть побачити не тільки архітектурні пам'ятники, але й відчути дух старовинного «міста-музею».
            <br />
            Шеф кухар нашого ресторану зможе запропонувати Вам вишукані страви середземноморської кухні. 
            Традиційні страви європейської кухні, переплітаючись з фантазією майстра, створять незабутній смаковий ансамбль, 
            а атмосфера затишку завершить його.
          </p>
          <p className={css.aboutHeader}>Контакти</p>
          <div style={{display: 'flex', alignItems: 'center', marginTop: '24px'}}>
            <Mail style={{marginRight: '12px'}}/>
            <span className={css.aboutMail}>black_gold@gmail.com</span>
          </div>
          <div style={{marginTop: '18px', display: 'flex', alignItems: 'center', marginBottom: '30px'}}>
            <YellowPhone style={{ marginRight: '10px' }} />
            <span className={css.phoneNumber}>098-60-777-99</span>
          </div>
          <Instagram style={{marginRight: '20px' }} />
          <Facebook />
          <div style={{marginTop: '24px'}}>
            <p className={css.contactText}>м. Луцьк, вул. Фабрична, 1</p>
            <p className={css.contactText}>Пн–Пт: 8:00 – 22:00,</p>
            <p className={css.contactText}>Сб–Нд: 8:00 – 23:00</p>
          </div>
          <Button text='Написати нам'></Button>
        </div>
        <Footer />
      </div>
    </div>
  );
};