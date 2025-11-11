import style from '../css-modules/About.module.css'
const About = ()=>{
    return(
    <section className={style.about_section} id="about">
      <div className={style.about_textbox}>
        <p className={style.about_text_subtitle}>
          We are here to take care of your horses
        </p>
        <h2 className={style.about_title}>
          we are your horses' best friend now and forever
        </h2>
        <p className={style.about_description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          et nemo odio laudantium modi nihil vel consectetur magnam excepturi
          quis quasi enim omnis incidunt veniam aut esse, error impedit dolores.
        </p>
        <a href="https://github.com/mbuvi254" target="_blank" className={style.about_cta}
          >get started now</a>
      </div>
      <div className={style.about_img_wrapper}>
        <img
          src="./src/assets/images/about-img.jpg"
          alt="horse running"
          className={style.about_img_image}
        />
      </div>
    </section>
    
    )
}

export default About;