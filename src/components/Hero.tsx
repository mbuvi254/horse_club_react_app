import style from '../css-modules/Hero.module.css'
const Hero = ()=>{
    return(
    <section className={style.hero_section} id="home">
      <div className={style.hero_textbox}>
        <p className={style.hero_textbox_paragraph}>Introducing horse club</p>
        <h1 className={style.hero_textbox_heading}>
          inter relation between horses and riders
        </h1>
        <a href="https://github.com/mbuvi254"target="_blank" className={style.hero_textbox_cta}>learn more</a>
      </div>
    </section>
    )
}

export default Hero;