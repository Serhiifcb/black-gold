import css from "./AboutBlock.module.css"
import { useSelector } from 'react-redux';
import { Button } from "components/Buttons/Button";
import { ReactComponent as Mail } from '../../images/mail.svg';
import { ReactComponent as YellowPhone } from '../../images/yellow-phone.svg';
import { ReactComponent as Instagram } from '../../images/instagram.svg';
import { ReactComponent as Facebook } from '../../images/facebook.svg';
import Gallery from "components/Slider/Slider";

export const AboutBlock = () => {
  const isModal = useSelector(state => state.isModal);
  return (
    <div className={css.layout}>
      {!isModal && <div className={css.content}>
        <div className={css.aboutBlock}>
          <div className={css.flexBlock}>
            <div>
              <Gallery />
            </div>
            <div>
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
              <div className={css.flexContactBlock}>
                <div>
                  <div>
                    <a href="mailto:black_gold@gmail.com" style={{ display: 'flex', alignItems: 'center' }}>
                      <Mail style={{ marginRight: '12px' }} />
                      <span className={css.aboutMail}>black_gold@gmail.com</span>
                    </a>
                  </div>
                  <div style={{ marginTop: '18px', display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
                    <a href="tel:+380986077799" style={{ display: 'flex', alignItems: 'center'}}>
                      <YellowPhone style={{ marginRight: '10px' }} />
                      <span className={css.phoneNumber}>098-60-777-99</span>
                    </a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <a href="https://www.instagram.com/restaurant.black.gold/" style={{ display: 'flex', alignItems: 'center' }}>
                      <Instagram style={{ marginRight: '20px' }} />
                    </a>
                    <a href="https://www.facebook.com/restoran.black.gold/" style={{ display: 'flex', alignItems: 'center' }}>
                      <Facebook />
                    </a>
                  </div>
                </div>
                <div>
                  <p className={css.contactText}>м. Луцьк, вул. Фабрична, 1</p>
                  <p className={css.contactText}>Пн–Пт: 8:00 – 22:00,</p>
                  <p className={css.contactText}>Сб–Нд: 8:00 – 23:00</p>
                </div>
              </div>
              <Button text='Написати нам'></Button>
            </div>
          </div>
          <iframe
            title="myFrame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1262.3375789945767!2d25.29857940995509!3d50.744513542370555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472599c777898531%3A0xf83d6797163eabc4!2sBlack%20Gold!5e0!3m2!1suk!2sua!4v1674989236858!5m2!1suk!2sua"
            className={css.map}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>}
    </div>
  );
};