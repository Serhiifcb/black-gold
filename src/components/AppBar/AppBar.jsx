import { ReactComponent as MenuIcon } from '../../svg/menu.svg';
import { ReactComponent as CloseMenuIcon } from '../../svg/close-menu-button.svg';
import { ReactComponent as ClosePhoneIcon } from '../../svg/close-phone-button.svg';
import { ReactComponent as Phone } from '../../svg/phone.svg';
import { ReactComponent as YellowPhone } from '../../svg/yellow-phone.svg';
import { ReactComponent as Instagram } from '../../svg/instagram.svg';
import { ReactComponent as Facebook } from '../../svg/facebook.svg';
import css from './AppBar.module.css'
import { useState } from 'react';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';
import { useDispatch, useSelector } from 'react-redux';
import { setIsModal } from 'redux/isModalSlice';

export const AppBar = () => {
  const dispatch = useDispatch();
  const isModal = useSelector(state => state.isModal);
  const [isPhone, setIsPhone] = useState(false);
  return (
    <>
      <div className={css.AppBar}>
        {!isModal && <button style={{ marginRight: '25px'}} onClick={() => dispatch(setIsModal(true))}><MenuIcon/></button >}
        {isModal && <button style={{ marginRight: '25px'}} onClick={() => dispatch(setIsModal(false))}><CloseMenuIcon/></button >}
        <img src='./images/logo-mobile.png' alt='logo' className={css.logoMobile} />
        <div style={{ display: 'flex', marginLeft: 'auto', alignItems: 'center' }}>
          {isPhone && (
            <>
              <YellowPhone style={{ marginRight: '10px' }} />
              <span className={css.phoneNumber}>098-60-777-99</span>
              <button onClick={() => setIsPhone(false)} ><ClosePhoneIcon/></button >
            </>
          )}
          {!isPhone && (
            <>
              <button style={{ marginRight: '20px' }} onClick={() => setIsPhone(true)} ><Phone /></button >
              <Instagram style={{marginRight: '20px' }} />
              <Facebook />
            </>
          )}
        </div>
        {isModal && <MobileMenu/>}
      </div>
      
      
      
    </>
  );
};