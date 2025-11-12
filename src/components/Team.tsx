import style from '../css-modules/Team.module.css'
import {FaInstagram,FaTwitter,FaFacebook,FaGoogle   } from "react-icons/fa";
import staffIrene from '../assets/images/staff-irene.jpg'
import staffBrian from '../assets/images/staff-brian.jpg'
import staffBabra from '../assets/images/staff-babra.jpg'
import staffGeorge from '../assets/images/staff-george.jpg'
import staffLinnet from '../assets/images/staff-linnet.jpg'
import staffJoshua from '../assets/images/staff-joshua.jpg'
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
              src={staffIrene}
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
              src={staffBrian}
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
              src={staffBabra}
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
              src={staffGeorge}
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
              src={staffLinnet}
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
              src={staffJoshua}
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