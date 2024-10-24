// import React, { useEffect } from 'react'
import './Main.css'
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { FaAt } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { RiFileDownloadLine } from "react-icons/ri";
import html from '../../Assets/Images/pngwing.com.png'
import css from '../../Assets/Images/logo-2582747_1280.png'
import js from '../../Assets/Images/js-javascript-round-logo-icon-png-7017516947717339mnyf7eumy.png'
import reactjs from '../../Assets/Images/reactjs-inner.svg'
import htmlpic from '../../Assets/Images/htmlpic.png'
// import htmlcss from '../../Assets/Images/html5-css3-logos-icons-free-png-70175169477179641iwgig0db-removebg-preview.png'
import { FaArrowRight } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import resume from '../../Assets/Images/NAVEEN BALA I.jpg'
import jstask from '../../Assets/Images/jstaskk.png'
import logo from '../../Assets/Images/fixed.png'
import { useRef } from 'react';
// import bgimg from '../../../src/Assets/Images/noice-img.5b3dfa4894f329855a2f.png'
// import axios from 'axios';
// import { useState } from 'react';
// const api="https://jsonplaceholder.typicode.com/posts";

const Main = () => {
  const firstref=useRef(null)
  const secondref=useRef(null)
  const thirdref=useRef(null)
  const fourthref=useRef(null)
  const fifthref=useRef(null)
  // const sixthref=useRef(null)
  // const seventhref=useRef(null)
  // const [data,setData]=useState([]);
  //  useEffect(()=>{
  //   async function getapi() {
  //     const response=await axios.get(api);
  //     // console.log(getapi)
  //     setData(response.data)
  //   }
  //   getapi();
  //  },[]);

  function changeref(ref) {
    console.log(ref);
    ref.current.scrollIntoView({
      behavior:"smooth",
      block:"start"

    })
    
  }
  return (
    <div className='main'>
      <div className='background'>
        <div className='ellipse1'>
        </div>
        <div className='ellipse2'></div>
      </div>
      <div className='container'>
          {/* {data.map((post, index) => (

              <h2 key={index}>{post.title}</h2>
            ))} */}
           <div className='sidebar'>
            <div className='sideprofile'>
              <div className='prof_img'>
               {/* <img src={logo} alt="" srcset="" /> */}
              </div>
              <div className='side_prof_designation' >
                <h2>Naveen bala</h2>
                <h5>Front-End Developer</h5>
              </div>
              <div className='side_socicons'>
               <button  className='linkedin'><CiLinkedin className='linkedin_logo' /></button>
               <button className='mail'><MdOutlineEmail className='mail_logo' /></button>
               <button className='whatsapp'><FaWhatsapp className='whatsapp_logo'/></button>
              </div>
            </div>
            <div className='side_menu'>
            <div className='home_btn' onClick={()=>changeref(firstref)}>
                <IoHome className='home_logo' /><h2>Home</h2>
              </div>
              <div className='about_btn' onClick={()=>changeref(secondref)}>
               <FaUser className='user_logo'/><h2>About</h2>
              </div>
              <div className='resume_btn' onClick={()=>changeref(thirdref)}>
               <FaIdCard className='resume_logo'/><h2>Resume</h2>
              </div>
              <div className='portfolio_btn' onClick={()=>changeref(fourthref)}>
               <MdBusinessCenter className='portfolio_logo'/><h2>Portfolio</h2>
              </div>
              <div className='contact_btn' onClick={()=>changeref(fifthref)}>
               <FaAt className='contact_logo'/><h2>Contact</h2>
              </div>
              <div className='cv_download'>
                <button className='btn'>
                  <div className='ic-bg'>
                    <RiFileDownloadLine className='download_icon'/>
                  </div>
                  <p className='click'>Click</p>
                  <p className='dwld'>Download CV</p>
                </button>
              </div>
            </div>
           </div>
           <div className='mainbar'>
            <div className='top_front' ref={firstref}>
              <div className='main_designation'>
                <div className='main_name'>
                  <h2>Naveen</h2>
                  <h4>Bala</h4>
                  <h6>Front-End Developer</h6>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus amet explicabo illum provident.</p>
                </div>
                <div className='front_buttons'>
                  <button type="button" className='work_button'>View Work</button>
                  <button type="button" className='contact_button'>Contact Me</button>
                </div>
              </div>
              <div className='main_image'></div>
            </div>
            <div className='about_me' ref={secondref}>
              <div className='about_header'>
                <div className='about_head'><h2>About Me.</h2></div>
                <div className='line'></div>
              </div>
              <div className='about_content'>
                <p>Hi, I'm Naveen Bala, a passionate <b>front-end developer</b> with expertise in HTML, CSS, JavaScript, and React.js. I adore designing user-friendly web browsing experiences and dynamic, responsive interfaces that elevate user interaction. Willing to bring ideas to life while embracing new technologies in the ever-changing web development industry.</p>
              </div>
              <div className='bio_form'>
                <div className='bio_data'>
                  <div className='bio_q'>
                    <p>Name</p>
                  </div>
                  <div className='bio_a'>
                    <p>:</p>
                    <h6>Naveen Bala</h6>
                  </div>
                </div>
                <div className='bio_data'>
                  <div className='bio_q'>
                    <p>Nationality</p>
                  </div>
                  <div className='bio_a'>
                    <p>:</p>
                    <h6>India</h6>
                  </div>
                </div>
                <div className='bio_data'>
                  <div className='bio_q'>
                    <p>Phone</p>
                  </div>
                  <div className='bio_a'>
                    <p>:</p>
                    <h6>+(91) 9080839803</h6>
                  </div>
                </div>
                <div className='bio_data'>
                  <div className='bio_q'>
                    <p>Email</p>
                  </div>
                  <div className='bio_a'>
                    <p>:</p>
                    <h6>naveenbala2277@gmail.com</h6>
                  </div>
                </div>
                <div className='bio_data'>
                  <div className='bio_q'>
                    <p>Experience</p>
                  </div>
                  <div className='bio_a'>
                    <p>:</p>
                    <h6>Fresher</h6>
                  </div>
                </div>
                <div className='bio_data'>
                  <div className='bio_q'>
                    <p>Language(s)</p>
                  </div>
                  <div className='bio_a'>
                    <p>:</p>
                    <h6>Tamil, English, Hindi</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className='education'>
            <div className='education_header'>
                <div className='education_head'><h2>Education.</h2></div>
                <div className='line'></div>
            </div>
            <div className='education_box'>
             <div className='sslc'>
               <h2>SSLC</h2>
               <p>Saraswathi Vidyalaya Matric Hr. Sec School, Muthupet</p>
               <span><h1></h1></span>
             </div>
             <div className='sslc'>
             <span><h1></h1></span>

               <h2>HSC</h2>
               <p>Brindhavan Matric. Hr. Sec School, Pattukkottai</p>
             </div>
             <div className='sslc'>
             <span><h1></h1></span>

               <h2>UG</h2>
               <p>Sri Ramakrishna Institute of Technology, Coimbatore</p>
             </div>
             <div className='sslc'>
             <span><h1></h1></span>

               <h2>Full-Stack Development Course</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo mollitia magni aliquam blanditiis? Nobis, illo in quod iusto tempore minus!</p>
             </div>
            </div>
            </div>
            <div className='skills'>
              <div className='skills_header'>
                  <div className='skills_head'><h2>Coding Skills.</h2></div>
                  <div className='line'></div>
              </div>
              <div className='skills_box'>
                <div className='html_bar'>
                   <div className='html_circle' data-prog='75'>
                     <div className='skill_logo_percentage'>
                      <img src={html} alt="" srcset="" />
                      <p>77%</p>
                     </div>
                   </div>
                  <div className='html_skill_title'></div>
                </div>
                <div className='html_bar'>
                   <div className='css_circle' data-prog='75'>
                   <div className='skill_logo_percentage'>
                      <img src={css} alt="" srcset="" />
                      <p>72%</p>
                     </div>
                   </div>
                  <div className='html_skill_title'></div>
                </div>
                <div className='html_bar'>
                   <div className='js_circle' data-prog='65'>
                   <div className='skill_logo_percentage'>
                      <img className='js_logo' src={js} alt="" srcset="" />
                      <p>62%</p>
                     </div>
                   </div>
                  <div className='html_skill_title'></div>
                </div>
                <div className='html_bar'>
                   <div className='react_circle' data-prog='75'>
                   <div className='skill_logo_percentage'>
                      <img src={reactjs} alt="" srcset="" />
                      <p>75%</p>
                     </div>
                   </div>
                  <div className='html_skill_title'></div>
                </div>
              </div>
            </div>
            <div className='resume' ref={thirdref}>
              <div className='resume_header'>
                <div className='resume_head'><h2>Resume.</h2></div>
                <div className='resume_line'></div>
              </div>
              <div className='res_image'>
                <img src={resume} alt="" />
              </div>
            </div>
          <div className='portfolio' ref={fourthref}>
            <div className='portfolio_header'>
                <div className='portfolio_head'><h2>Portfolio.</h2></div>
                <div className='portfolio_line'></div>
            </div>
            <div className='portfolio_box'>
              <div className='proj_card'>
              <div className='proj_img1'><img src={htmlpic} alt="" /></div>
                <h3>E - Commerce Website Clone</h3>
                <div className='toolspic'>
                  <img src={html} alt="" />
                  <img src={css} alt="" />
                </div>
                <a href="https://minimalin-two.vercel.app/">View Project <span><FaArrowRight /></span></a>
              </div>
              <div className='proj_card'>
              <div className='proj_img1'><img src={jstask} alt="" /></div>
                <h3>Bank App Clone</h3>
                <div className='toolspic'>
                  <img src={js} alt="" />
                </div>
                <a href="https://bankist-lilac.vercel.app/">View Project <span><FaArrowRight /></span></a>
              </div>
              <div className='proj_card'>
                <div className='proj_img1'><img src={htmlpic} alt="" /></div>
                
                <h3>Swiggy Website Clone</h3>
                <div className='toolspic'>
                  <img src={reactjs} alt="" />
                </div>
                <a href="">View Project <span><FaArrowRight /></span></a>
              </div>
            </div>
          </div>
          <div className='contact' ref={fifthref}>
           <div className='contact_header'>
                <div className='contact_head'><h2>Get in Touch.</h2></div>
                <div className='contact_line'></div>
            </div>
            <div className='coffee'>
              <h2>TAKE A COFFEE & CHAT WITH ME</h2>
            </div>
            <div className='contact_details'>
              <div className='contact_box'>
               <div className='contact_icon'>
                <IoMdMail className='mail_icon' />
               </div>
               <div className='contact_text'>
                <h3>EMAIL</h3>
                <h2>naveenbala2277@gmail.com</h2>
               </div>
              </div>
              <div className='contact_box'>
               <div className='contact_icon'>
                <FaPhoneVolume className='mail_icon' />
               </div>
               <div className='contact_text'>
                <h3>PHONE</h3>
                <h2>+91 90808 39803</h2>
               </div>
              </div>
            </div>
            <div className='contact_form'>
              <div className='contact_input'>
                <h3>NAME</h3>
                <input type="text" placeholder='Your Name' />
              </div>
              <div className='contact_input'>
                <h3>EMAIL</h3>
                <input type="text" placeholder='Your Email' />
              </div>
              <div className='contact_input'>
                <h3>SUBJECT</h3>
                <input type="text" placeholder='Enter Subject' />
              </div>
              <div className='contact_input'>
                <h3>MESSAGE</h3>
                <input type="text" placeholder='Enter Your Message' />
              </div>
            </div>
            <div className='form_btn'>
              <button type='submit'>Submit Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main