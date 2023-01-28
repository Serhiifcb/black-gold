import { ReactComponent as ClosePhoneIcon } from '../../svg/close-phone-button.svg';
import { ReactComponent as Phone } from '../../svg/phone.svg';
import { ReactComponent as YellowPhone } from '../../svg/yellow-phone.svg';
import { ReactComponent as Instagram } from '../../svg/instagram.svg';
import { ReactComponent as Facebook } from '../../svg/facebook.svg';
import css from './DesktopAppBar.module.css'
import { useState } from 'react';
import { DesktopMenu } from 'components/Menu/DesktopMenu';

export const DesktopAppBar = () => {
  const [isPhone, setIsPhone] = useState(false);
  return (
    <>
      <div className={css.desktopAppBar}>
        <img src='./images/logo-desktop.png' alt='logo' className={css.logoDesktop} />
        <DesktopMenu/>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '150px' }}>
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
        
      </div>  
    </>
  );
};