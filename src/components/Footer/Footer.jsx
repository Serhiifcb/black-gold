import { NavLink } from 'react-router-dom';
import css from './Footer.module.css';
import { ReactComponent as Mail } from '../../images/mail.svg';
import { animateScroll as scroll } from 'react-scroll'
import logoFunny from '../../images/logo-funny.png';
import logoPeonia from '../../images/logo-peonia.png';
import logoRoof from '../../images/logo-roof.png';
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  &.active {
    color:#EAB441;
  }
`;

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
              <li style={{ marginBottom: '18px' }}><StyledLink to='/about' className={css.footerLink} onClick={() => scroll.scrollToTop()}>Про нас</StyledLink></li>
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
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <a href="mailto:black_gold@gmail.com" style={{ display: 'flex', alignItems: 'center' }}>
                <Mail style={{ marginRight: '12px' }} />
                <span className={css.footerMail}>black_gold@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={css.bottomFooterBlock}>
        <p className={css.footerText} style={{ display: 'flex', alignItems: 'center' }} >Розроблено -
          <a href="https://devseonet.com/" style={{ display: 'flex', alignItems: 'center' }}>
            <span className={css.creatorCompany}>Devseonet</span>
          </a>
        </p>
      </div>
    </div>
  );
};