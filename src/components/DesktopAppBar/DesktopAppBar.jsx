import { ReactComponent as ClosePhoneIcon } from '../../images/close-phone-button.svg';
import { ReactComponent as Phone } from '../../images/phone.svg';
import { ReactComponent as YellowPhone } from '../../images/yellow-phone.svg';
import { ReactComponent as Instagram } from '../../images/instagram.svg';
import { ReactComponent as Facebook } from '../../images/facebook.svg';
import css from './DesktopAppBar.module.css'
import { useState } from 'react';
import { DesktopMenu } from 'components/Menu/DesktopMenu';
import logoDesktop from '../../images/logo-desktop.png';

export const DesktopAppBar = () => {
  const [isPhone, setIsPhone] = useState(false);
  return (
    <>
      <div className={css.desktopAppBar}>
        <img src={logoDesktop} alt='logo' className={css.logoDesktop} />
        <DesktopMenu/>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '150px'}}>
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
              <a href="https://www.instagram.com/restaurant.black.gold/" style={{ display: 'flex', alignItems: 'center'}}> 
                <Instagram style={{ marginRight: '20px' }} />
              </a>
              <a href="https://www.facebook.com/restoran.black.gold/" style={{ display: 'flex', alignItems: 'center'}}>
                <Facebook />
              </a>
            </>
          )}         
        </div>   
      </div>  
    </>
  );
};