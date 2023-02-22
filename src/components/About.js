import React from 'react'
import aboutStyle from './About.module.css';
import {useMediaQuery} from 'react-responsive';
import { useState } from 'react';

export default function About(props) {
    const bgstyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/${props.bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
    }

    const Desktop = ({ children }) => {
        const isDesktop = useMediaQuery({ minWidth: 768 })
        return isDesktop ? children : null
      }
    
      const Mobile = ({ children }) => {
        const isMobile = useMediaQuery({ maxWidth: 767 })
        return isMobile ? children : null
      }


  return (
    <>
        <Desktop>
            <div className={aboutStyle.about} style={bgstyle} id='about'>
            <div className={aboutStyle.mainText}>
                <h2>{props.title}</h2>
            </div>
            <div className={aboutStyle.aboutBox}>
                <div className="about-me">
                    <h3>이준무 | Lee Jun Moo</h3>
                    <p>
                        배움에 적극적인 웹 퍼블리셔 이준무입니다.<br/>
                        디자인 & HTML, CSS, JavaScript 뿐 아니라 Node.js,React까지<br/>
                        다루는 퍼블리셔로 성장하고 있습니다. 배움을 통해 프론트엔드 개발자가되기<br/> 위해 더욱 열심히 성장하겠습니다.
                    </p>
                </div>
                <div>
                    <h3>프로필</h3>
                    <div>
                        <ul className="about-profile-list">
                            <li>생년월일: 1998.02.12</li>
                            <li>연락처: 010-8535-4560</li>
                            <li>E-Mail: dlquddnr122@naver.com</li>
                            <li>주소: 서울시 금천구 시흥동</li>
                            <li>GitHub: <a href="https://github.com/leejunmoo" target='blank'>https://github.com/leejunmoo</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={aboutStyle.aboutSkill}>
                <div className="skill">
                    <h3>업무능력</h3>
                    <div>
                        <ul className={aboutStyle.skillList}>
                            <li>
                                <img src={process.env.PUBLIC_URL + '/images' + '/icons' + '/html.png'}  alt="HTML5"/>
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL + '/images' + '/icons' + '/css.png'}  alt="CSS3"/>
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL + '/images' + '/icons' + '/JavaScript.png'}  alt="JavaScript"/>
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL + '/images' + '/icons' + '/jquery.png'}  alt="JQuery"/>
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL + '/images' + '/icons' + '/react.png'}  alt="React"/>
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL + '/images' + '/icons' + '/node-js.png'}  alt="Node.js"/>
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL + '/images' + '/icons' + '/Express.png'}  alt="Express"/>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div className="tools">
                    <h3>Tools</h3>
                    <ul className={aboutStyle.skillList}>
                            <li>
                                <img src={process.env.PUBLIC_URL + '/images' + '/icons' + '/vscode.png'}  alt="Vscode"/>
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL + '/images' + '/icons' + '/github.png'}  alt="GitHub"/>
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL + '/images' + '/icons' + '/figma.png'}  alt="Figma"/>
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL + '/images' + '/icons' + '/ps.png'}  alt="PhotoShop"/>
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL + '/images' + '/icons' + '/illustrator.png'}  alt="Illustrator"/>
                            </li>
                            
                    </ul>
                </div>
            </div>
            </div>
        </Desktop>
        <Mobile>
        <div className={aboutStyle.about} style={bgstyle} id='about'>
            <div className={aboutStyle.mainText}>
                <h2>{props.title}</h2>
            </div>
            <div className={aboutStyle.mobileaboutBox}>
                <div className={aboutStyle.aboutMe}>
                    <h3>이준무 | Lee Jun Moo</h3>
                    <p>
                        배움에 적극적인 웹 퍼블리셔 이준무입니다.<br/>
                        디자인 & HTML, CSS, JavaScript 뿐 아니라 Node.js,React까지
                        다루는 퍼블리셔로 성장하고 있습니다.<br/> 배움을 통해 프론트엔드 개발자가되기 위해<br/> 더욱 열심히 성장하겠습니다.
                    </p>
                </div>
                <div>
                    <h3 className={aboutStyle.mobileH3}>프로필</h3>
                    <div className={aboutStyle.mobileProfile}>
                        <ul className="about-profile-list">
                            <li>생년월일: 1998.02.12</li>
                            <li>연락처: 010-8535-4560</li>
                            <li>E-Mail: dlquddnr122@naver.com</li>
                            <li>주소: 서울시 금천구 시흥동</li>
                            <li>GitHub: <a href="https://github.com/leejunmoo" target='blank'>https://github.com/leejunmoo</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={aboutStyle.aboutSkill}>
                <div className="skill">
                    <h3>업무능력</h3>
                    <div>
                    <ul className={aboutStyle.skillList}>
                            <li>
                                <img src={process.env.PUBLIC_URL + '/images' + '/icons' + '/html.png'}  alt="HTML5"/>
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL + '/images' + '/icons' + '/css.png'}  alt="CSS3"/>
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL + '/images' + '/icons' + '/JavaScript.png'}  alt="JavaScript"/>
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL + '/images' + '/icons' + '/jquery.png'}  alt="JQuery"/>
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL + '/images' + '/icons' + '/react.png'}  alt="React"/>
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL + '/images' + '/icons' + '/node-js.png'}  alt="Node.js"/>
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL + '/images' + '/icons' + '/Express.png'}  alt="Express"/>
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div className="tools">
                    <h3 className={aboutStyle.mobileUl}>Tools</h3>
                    <ul className={aboutStyle.skillList}>
                            <li>
                                <img src={process.env.PUBLIC_URL + '/images' + '/icons' + '/vscode.png'}  alt="Vscode"/>
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL + '/images' + '/icons' + '/github.png'}  alt="GitHub"/>
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL + '/images' + '/icons' + '/figma.png'}  alt="Figma"/>
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL + '/images' + '/icons' + '/ps.png'}  alt="PhotoShop"/>
                            </li>
                            <li>
                                <img src={process.env.PUBLIC_URL + '/images' + '/icons' + '/illustrator.png'}  alt="Illustrator"/>
                            </li>
                            
                    </ul>
                </div>
            </div>
            </div>
        </Mobile>
    </>
    
   
  )
}
