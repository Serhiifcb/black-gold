import { NavLink } from 'react-router-dom';
import css from './Footer.module.css';
import { ReactComponent as Mail } from '../../svg/mail.svg';
import { animateScroll as scroll } from 'react-scroll'
import logoFunny from '../../svg/logo-funny.png';
import logoPeonia from '../../svg/logo-peonia.png';
import logoRoof from '../../svg/logo-roof.png';

export const Footer = () => {
  
  return (
    <div className={css.footer}>
      <div className={css.mainFooterBlock}>
        <div className={css.topFooterBlock}>
          <p className={css.footerHeader}>Мережа закладів</p>
          <div className={css.footerCompanyBlock}>
            <div><img src={logoPeonia} alt="logo-peonia" /></div>
            <div><img src={logoFunny} alt="logo-funny" /></div>
            <div><img src={logoRoof} alt="logo-roof" /></div>
          </div>
        </div>
        <div className={css.mediumFooterBlock}>
          <div className={css.footerLinkBlock}>
            <p className={css.footerHeader}>Клієнтам</p>
            <ul className={css.footerLinkList}>
              <li style={{ marginBottom: '18px' }}><NavLink to='/about' className={css.footerLink} onClick={() => scroll.scrollToTop()}>Про нас</NavLink></li>
              <li style={{marginBottom: '18px'}}><NavLink className={css.footerLink}>Завантажити меню</NavLink></li>
              <li style={{marginBottom: '18px'}}><NavLink className={css.footerLink}>Партнерська програма</NavLink></li>
              <li><NavLink className={css.footerLink}>Договір публічної оферти</NavLink></li>
            </ul>
          </div>
          <div>
            <p className={css.footerHeader}>Контакти</p>
            <div style={{marginBottom: '24px'}}>
              <p className={css.footerText}>м. Луцьк, вул. Фабрична, 1</p>
              <p className={css.footerText}>Пн–Пт: 8:00 – 22:00,</p>
              <p className={css.footerText}>Сб–Нд: 8:00 – 23:00</p>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <Mail style={{marginRight: '12px'}}/>
              <span className={css.footerMail}>black_gold@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className={css.bottomFooterBlock}>
        <p className={css.footerText}>Розроблено - <span className={css.creatorCompany}>Devseonet</span></p>
      </div>
    </div>
  );
};