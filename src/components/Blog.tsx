import style from '../css-modules/Blog.module.css'
import blogImg1 from '../assets/images/blog-img-1.jpg'
import blogImg2 from '../assets/images/blog-img-2.jpg'
import blogImg3 from '../assets/images/blog-img-3.jpg'
import blogImg4 from '../assets/images/blog-img-4.jpg'
import blogImg5 from '../assets/images/blog-img-5.jpg'
import blogImg6 from '../assets/images/blog-img-6.jpg'

const Blog = ()=>{
    return (
    <section className={style.blog_section} id="blog">
      <div className={style.title}>
        <p className={style.title_sub}>latest from our blog</p>
        <h2 className={style.title_main}>our blog</h2>
      </div>
      <div className={style.blog_cards_container}>
        <div className={style.blog_card}>
          <div className={style.blog_card_img_wrapper}>
            <img
              src={blogImg1}
              alt="featured image"
              className={style.blog_card_featured_image}
            />
          </div>
          <div className={style.blog_card_chips_container}>
            <a href="#" className={style.blog_card_chip}>travel</a>
            <a href="#" className={style.blog_card_chip}>lifestyle</a>
          </div>
          <a href="#" className={style.blog_card_title}>
            <h3 className={style.blog_card_title_title}>Lorem ipsum dolor sit amet.</h3>
          </a>
          <p className={style.blog_synopsis}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            aspernatur voluptas repellat similique odio eveniet aliquam quam
            animi beatae eligendi.
          </p>
          <div className={style.blog_card_meta_information}>
            <div className={style.blog_card_meta}>
              <i className="fa-solid fa-calendar-days"></i>
              <p>31<sup>st</sup> September 2025</p>
            </div>
            <div className={style.blog_card_meta}>
              <i className="fa-solid fa-user"></i>
              <a href="#">john doe</a>
            </div>
          </div>
        </div>
   
        <div className={style.blog_card}>
          <div className={style.blog_card_img_wrapper}>
            <img
              src={blogImg2}
              alt="featured image"
              className={style.blog_card_featured_image}
            />
          </div>
          <div className={style.blog_card_chips_container}>
            <a href="#" className={style.blog_card_chip}>travel</a>
            <a href="#" className={style.blog_card_chip}>lifestyle</a>
            <a href="#" className={style.blog_card_chip}>animals</a>
            <a href="#" className={style.blog_card_chip}>accomodation</a>
          </div>
          <a href="#" className={style.blog_card_title}>
            <h3 className={style.blog_card_title_title}>
              amet consectetur adipisicing elit
            </h3>
          </a>
          <p className={style.blog_synopsis}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            aspernatur voluptas repellat similique odio eveniet aliquam quam
            animi beatae eligendi.
          </p>
          <div className={style.blog_card_meta_information}>
            <div className={style.blog_card_meta}>
              <i className="fa-solid fa-calendar-days"></i>
              <p>30<sup>th</sup> September 2025</p>
            </div>
            <div className={style.blog_card_meta}>
              <i className="fa-solid fa-user"></i>
              <a href="#">emma clerk</a>
            </div>
          </div>
        </div>
        <div className={style.blog_card}>
          <div className={style.blog_card_img_wrapper}>
            <img
              src={blogImg3}
              alt="featured image"
              className={style.blog_card_featured_image}
            />
          </div>
          <div className={style.blog_card_chips_container}>
            <a href="#" className={style.blog_card_chip}>travel</a>
            <a href="#" className={style.blog_card_chip}>lifestyle</a>
            <a href="#" className={style.blog_card_chip}>accommodation</a>
          </div>
          <a href="#" className={style.blog_card_title}>
            <h3 className={style.blog_card_title_title}>eveniet aliquam quam animi</h3>
          </a>
          <p className={style.blog_synopsis}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            aspernatur voluptas repellat similique odio eveniet aliquam quam
            animi beatae eligendi.
          </p>
          <div className={style.blog_card_meta_information}>
            <div className={style.blog_card_meta}>
              <i className="fa-solid fa-calendar-days"></i>
              <p>28<sup>th</sup> September 2025</p>
            </div>
            <div className={style.blog_card_meta}>
              <i className="fa-solid fa-user"></i>
              <a href="#">brad paisley</a>
            </div>
          </div>
        </div>
  
        <div className={style.blog_card}>
          <div className={style.blog_card_img_wrapper}>
            <img
              src={blogImg4}
              alt="featured image"
              className={style.blog_card_featured_image}
            />
          </div>
          <div className={style.blog_card_chips_container}>
            <a href="#" className={style.blog_card_chip}>accommodation</a>
          </div>
          <a href="#" className={style.blog_card_title}>
            <h3 className={style.blog_card_title_title}>
              similique odio eveniet aliquam quam
            </h3>
          </a>
          <p className={style.blog_synopsis}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            aspernatur voluptas repellat similique odio eveniet aliquam quam
            animi beatae eligendi.
          </p>
          <div className={style.blog_card_meta_information}>
            <div className={style.blog_card_meta}>
              <i className="fa-solid fa-calendar-days"></i>
              <p>27<sup>st</sup> September 2025</p>
            </div>
            <div className={style.blog_card_meta}>
              <i className="fa-solid fa-user"></i>
              <a href="#">charlie pride</a>
            </div>
          </div>
        </div>

        <div className={style.blog_card}>
          <div className={style.blog_card_img_wrapper}>
            <img
              src={blogImg5}
              alt="featured image"
              className={style.blog_card_featured_image}
            />
          </div>
          <div className={style.blog_card_chips_container}>
            <a href="#" className={style.blog_card_chip}>lifestyle</a>
            <a href="#" className={style.blog_card_chip}>animals</a>
          </div>
          <a href="#" className={style.blog_card_title}>
            <h3 className={style.blog_card_title_title}>
              similique odio eveniet aliquam quam
            </h3>
          </a>
          <p className={style.blog_synopsis}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            aspernatur voluptas repellat similique odio eveniet aliquam quam
            animi beatae eligendi.
          </p>
          <div className={style.blog_card_meta_information}>
            <div className={style.blog_card_meta}>
              <i className="fa-solid fa-calendar-days"></i>
              <p>26<sup>th</sup> September 2025</p>
            </div>
            <div className={style.blog_card_meta}>
              <i className="fa-solid fa-user"></i>
              <a href="#">george washington</a>
            </div>
          </div>
        </div>
   
        <div className={style.blog_card}>
          <div className={style.blog_card_img_wrapper}>
            <img
              src={blogImg6}
              alt="featured image"
              className={style.blog_card_featured_image}
            />
          </div>
          <div className={style.blog_card_chips_container}>
            <a href="#" className={style.blog_card_chip}>lifestyle</a>
            <a href="#" className={style.blog_card_chip}>animals</a>
            <a href="#" className={style.blog_card_chip}>accommodation</a>
          </div>
          <a href="#" className={style.blog_card_title}>
            <h3 className={style.blog_card_title_title}>quam animi beatae eligendi.</h3>
          </a>
          <p className={style.blog_synopsis}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            aspernatur voluptas repellat similique odio eveniet aliquam quam
            animi beatae eligendi.
          </p>
          <div className={style.blog_card_meta_information}>
            <div className={style.blog_card_meta}>
              <i className="fa-solid fa-calendar-days"></i>
              <p>25<sup>th</sup> September 2025</p>
            </div>
            <div className={style.blog_card_meta}>
              <i className="fa-solid fa-user"></i>
              <a href="#">martin luther</a>
            </div>
          </div>
        </div>
      
      </div>
    </section>

    )
};
export default Blog;