import style from '../css-modules/Team.module.css'
import {FaInstagram,FaTwitter,FaFacebook,FaGoogle   } from "react-icons/fa";
const Team = ()=>{
    return(
    <section className={style.team_section} id="team">
      <div className={style.title}>
        <p className={style.title_sub}>team</p>
        <h2 className={style.title_main}>our team</h2>
      </div>
      <div className={style.team_members_container}>
        <div className={style.team_member_card}>
          <div className={style.team_member_image_wrapper}>
            <img
              src="./src/assets/images/staff-irene.jpg"
              alt="A head-shot of irene"
              className={style.team_member_image}
            />
          </div>
          <div className={style.team_member_information}>
            <h3 className={style.team_member_name}>Irene Mutuku</h3>
            <p className={style.team_member_position}>CEO, Founder</p>
            <div className={style.team_member_socials}>
              <a
                href="https://github.com/mbuvi254"
                target="_blank"
                className={style.team_member_social_url}
              >
              <FaInstagram />
              </a>
              <a
                href="https://github.com/mbuvi254"
                target="_blank"
                className={style.team_member_social_url}
              >
                <FaTwitter />
              </a>
              <a
                href="https://github.com/mbuvi254"
                target="_blank"
                className={style.team_member_social_url}
              >
             <FaFacebook />
              </a>
              <a
                href="https://github.com/mbuvi254"
                target="_blank"
                className={style.team_member_social_url}
              >
              <FaGoogle />
              </a>
            </div>
          </div>
        </div>
    
        <div className={style.team_member_card}>
          <div className={style.team_member_image_wrapper}>
            <img
              src="./src/assets/images/staff-brian.jpg"
              alt="A head-shot of irene"
              className={style.team_member_image}
            />
          </div>
          <div className={style.team_member_information}>
            <h3 className={style.team_member_name}>Brian Nzioka</h3>
            <p className={style.team_member_position}>horse groomer</p>
            <div className={style.team_member_socials}>
              <a
                href="https://github.com/mbuvi254"
                target="_blank"
                className={style.team_member_social_url}
              >
              <FaInstagram />
              </a>
              <a
                href="https://github.com/mbuvi254"
                target="_blank"
                className={style.team_member_social_url}
              >
                       <FaTwitter />
              </a>
              <a
                href="https://github.com/mbuvi254"
                target="_blank"
                className={style.team_member_social_url}
              >
             <FaFacebook />
              </a>
              <a
                href="https://github.com/mbuvi254"
                target="_blank"
                className={style.team_member_social_url}
              >
              <FaGoogle />
              </a>
            </div>
          </div>
        </div>
        <div className={style.team_member_card}>
          <div className={style.team_member_image_wrapper}>
            <img
              src="./src/assets/images/staff-babra.jpg"
              alt="A head-shot of Babra"
              className={style.team_member_image}
            />
          </div>
          <div className={style.team_member_information}>
            <h3 className={style.team_member_name}>Babra obare</h3>
            <p className={style.team_member_position}>IT Support</p>
            <div className={style.team_member_socials}>
              <a
                href="https://github.com/mbuvi254"
                target="_blank"
                className={style.team_member_social_url}
              >
              <FaInstagram />
              </a>
              <a
                href="https://github.com/mbuvi254"
                target="_blank"
                className={style.team_member_social_url}
              >
                       <FaTwitter />
              </a>
              <a
                href="https://github.com/mbuvi254"
                target="_blank"
                className={style.team_member_social_url}
              >
             <FaFacebook />
              </a>
              <a
                href="https://github.com/mbuvi254"
                target="_blank"
                className={style.team_member_social_url}
              >
              <FaGoogle />
              </a>
            </div>
          </div>
        </div>
      
        <div className={style.team_member_card}>
          <div className={style.team_member_image_wrapper}>
            <img
              src="./src/assets/images/staff-george.jpg"
              alt="A head-shot of Fleeky"
              className={style.team_member_image}
            />
          </div>
          <div className={style.team_member_information}>
            <h3 className={style.team_member_name}>Fleeky George</h3>
            <p className={style.team_member_position}>horse trainer</p>
            <div className={style.team_member_socials}>
              <a
                href="https://github.com/mbuvi254"
                target="_blank"
                className={style.team_member_social_url}
              >
              <FaInstagram />
              </a>
              <a
                href="https://github.com/mbuvi254"
                target="_blank"
                className={style.team_member_social_url}
              >
                       <FaTwitter />
              </a>
              <a
                href="https://github.com/mbuvi254"
                target="_blank"
                className={style.team_member_social_url}
              >
             <FaFacebook />
              </a>
              <a
                href="https://github.com/mbuvi254"
                target="_blank"
                className={style.team_member_social_url}
              >
              <FaGoogle />
              </a>
            </div>
          </div>
        </div>
      
        <div className={style.team_member_card}>
          <div className={style.team_member_image_wrapper}>
            <img
              src="./src/assets/images/staff-linnet.jpg"
              alt="A head-shot of Linet"
              className={style.team_member_image}
            />
          </div>
          <div className={style.team_member_information}>
            <h3 className={style.team_member_name}>Linnet Wanjiku</h3>
            <p className={style.team_member_position}>Human Resource</p>
            <div className={style.team_member_socials}>
              <a
                href="https://github.com/mbuvi254"
                target="_blank"
                className={style.team_member_social_url}
              >
              <FaInstagram />
              </a>
              <a
                href="https://github.com/mbuvi254"
                target="_blank"
                className={style.team_member_social_url}
              >
                       <FaTwitter />
              </a>
              <a
                href="https://github.com/mbuvi254"
                target="_blank"
                className={style.team_member_social_url}
              >
             <FaFacebook />
              </a>
              <a
                href="https://github.com/mbuvi254"
                target="_blank"
                className={style.team_member_social_url}
              >
              <FaGoogle />
              </a>
            </div>
          </div>
        </div>
       
        <div className={style.team_member_card}>
          <div className={style.team_member_image_wrapper}>
            <img
              src="./src/assets/images/staff-joshua.jpg"
              alt="A head-shot of joshua"
              className={style.team_member_image}
            />
          </div>
          <div className={style.team_member_information}>
            <h3 className={style.team_member_name}>Joshua kimani</h3>
            <p className={style.team_member_position}>horse sanctuary</p>
            <div className={style.team_member_socials}>
              <a
                href="https://github.com/mbuvi254"
                target="_blank"
                className={style.team_member_social_url}
              >
              <FaInstagram />
              </a>
              <a
                href="https://github.com/mbuvi254"
                target="_blank"
                className={style.team_member_social_url}
              >
                       <FaTwitter />
              </a>
              <a
                href="https://github.com/mbuvi254"
                target="_blank"
                className={style.team_member_social_url}
              >
             <FaFacebook />
              </a>
              <a
                href="https://github.com/mbuvi254"
                target="_blank"
                className={style.team_member_social_url}
              >
              <FaGoogle />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    )
};
export default Team;