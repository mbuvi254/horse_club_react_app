import style from '../css-modules/Header.module.css'
import { FaPhone, FaPaperPlane } from "react-icons/fa";
import horseLogo from '../assets/images/horse.png'

const Header = ()=>{
    return(
    <header className={style.header}>
      <div className={style.header_top}>
       
        <div className={style.header_contact}>
          <span className={style.header_contact_icon}>
            <FaPaperPlane />
          </span>
          <p className={style.header_contact_text}>info@horseclub.com</p>
        </div>
 

        <div className={style.logo}>
          <img src={horseLogo} alt="logo" width="40px" />
          <p className={style.logo_text}>horse club</p>
        </div>
     
        <div className={style.header_contact}>
          <p className={style.header_contact_text}>+254 546 879 12</p>
          <span className={style.header_contact_icon}>
            <FaPhone />
          </span>
        </div>

      </div>
      <div className={style.header_bottom}>
        <nav>
          <ul className={style.nav_list}>
            <li className={style.nav_list_item}>
              <a href="#home" className={style.nav_list_item_link}>home</a>
            </li>
            <li className={style.nav_list_item}>
              <a href="#about" className={style.nav_list_item_link}>about us</a>
            </li>
            <li className={style.nav_list_item}>
              <a href="#services" className={style.nav_list_item_link}>services</a>
            </li>
            <li className={style.nav_list_item}>
              <a href="#reasons" className={style.nav_list_item_link}>why us</a>
            </li>
            <li className={style.nav_list_item}>
              <a href="#team" className={style.nav_list_item_link}>team</a>
            </li>
            <li className={style.nav_list_item}>
              <a href="#blog" className={style.nav_list_item_link}>blog</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    )
}

export default Header;
