import { ReactComponent as MenuIcon } from '../../images/menu.svg';
import { ReactComponent as CloseMenuIcon } from '../../images/close-menu-button.svg';
import { ReactComponent as ClosePhoneIcon } from '../../images/close-phone-button.svg';
import { ReactComponent as Phone } from '../../images/phone.svg';
import { ReactComponent as YellowPhone } from '../../images/yellow-phone.svg';
import { ReactComponent as Instagram } from '../../images/instagram.svg';
import { ReactComponent as Facebook } from '../../images/facebook.svg';
import css from './AppBar.module.css'
import { useState } from 'react';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';
import { useDispatch, useSelector } from 'react-redux';
import { setIsModal } from 'redux/isModalSlice';
import logoMobile from '../../images/logo-mobile.png';

export const AppBar = () => {
  const dispatch = useDispatch();
  const isModal = useSelector(state => state.isModal);
  const [isPhone, setIsPhone] = useState(false);
  return (
    <>
      <div className={css.AppBar}>
        {!isModal && <button style={{ marginRight: '25px'}} onClick={() => dispatch(setIsModal(true))}><MenuIcon/></button >}
        {isModal && <button style={{ marginRight: '25px'}} onClick={() => dispatch(setIsModal(false))}><CloseMenuIcon/></button >}
        <img src={logoMobile} alt='logo' className={css.logoMobile} />
        <div style={{ display: 'flex', marginLeft: 'auto', alignItems: 'center' }}>
          {isPhone && (
            <>
              <a href="tel:+380986077799" style={{ display: 'flex', alignItems: 'center'}}>
                <YellowPhone style={{ marginRight: '10px' }} />
                <span className={css.phoneNumber}>098-60-777-99</span>
              </a>
              <button onClick={() => setIsPhone(false)} ><ClosePhoneIcon/></button >
            </>
          )}
          {!isPhone && (
            <>
              <button style={{ marginRight: '20px' }} onClick={() => setIsPhone(true)} ><Phone /></button >
              <a href="https://www.instagram.com/restaurant.black.gold/" style={{ display: 'flex', alignItems: 'center' }}>
                <Instagram style={{ marginRight: '20px' }} />
              </a>
              <a href="https://www.facebook.com/restoran.black.gold/" style={{ display: 'flex', alignItems: 'center' }}>
                <Facebook />
              </a>
            </>
          )}
        </div>
        
      </div>
      {isModal && <MobileMenu/>}
    </>
  );
};