import style from '../css-modules/Footer.module.css'
const Footer = ()=>{
    return (
    <footer className={style.footer}>
      <p className={style.footer_text}>
        Built with lots of &hearts; by
        <a href="https://github.com/mbuvi254" target="_blank"> Daniel Mulatya</a>
      </p>
    </footer>
    )
};

export default Footer;
    