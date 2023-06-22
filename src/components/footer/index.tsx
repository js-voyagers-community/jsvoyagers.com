import Image from 'next/image';
import JsLogo from '../../assets/js-logo.png';
import style from './style.module.scss';
import { socalIcons } from './data';

const Footer = () => (
  <footer className={style.footerContainer}>
    <Image src={JsLogo} alt='logo' height={48} />
    <div className={style.content}>
      <div className={style.leftContent}>
        <p>Lorem ipsum dolor sit amet consectetur. Lacus purus commodo nibh mauris donec nisl. Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <ul className={style.centerContent}>
        <li>Become volunteer</li>
        <li>Sponsorship opportunities</li>
        <li>Term & conditions</li>
      </ul>
      <div className={style.rightContent}>
        <p className={style.updates}>Follow us for more updates</p>
        <div className={style.socialIcons}>
          {socalIcons?.map((i, id) =>
            <a href={i.url} key={id} className={style.iconsLinks}>
              <Image src={i.logo} alt="sponsors" height={48} width={48} />
            </a>
          )}
        </div>
      </div>
    </div>
    <p className={style.copyRights}>COPYRIGHT &#169; 2023 JS voyagers</p>
    <span />
  </footer>
);

export default Footer;
