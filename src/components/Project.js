import React from 'react'
import { useState } from 'react';
import projectStyle from './Project.module.css';
import {useMediaQuery} from 'react-responsive';

export default function Project(props) {
    const bgstyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/${props.bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
    }
    /* 수원여대 */
    const [hovering, setHovering] = useState(false);
    
    const handleMouseOver = () => {
        setHovering(true);
      };

    const handleMouseOut = () => {
    setHovering(false);
    };
    /* 길마로 */
    const [hovering2, setHovering2] = useState(false);

    const handleMouseOver2 = () => {
        setHovering2(true);
      };

    const handleMouseOut2 = () => {
    setHovering2(false);
    };
    /* 날씨앱 */
    const [hovering3, setHovering3] = useState(false);

    const handleMouseOver3 = () => {
        setHovering3(true);
      };

    const handleMouseOut3 = () => {
    setHovering3(false);
    };
    /* 문학수첩 */
    const [hovering4, setHovering4] = useState(false);

    const handleMouseOver4 = () => {
        setHovering4(true);
      };

    const handleMouseOut4 = () => {
    setHovering4(false);
    };
    /* 연하장 */
    const [hovering5, setHovering5] = useState(false);

    const handleMouseOver5 = () => {
        setHovering5(true);
      };

    const handleMouseOut5 = () => {
    setHovering5(false);
    };


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
        <div className={projectStyle.project} id='project' style={bgstyle}>
        <div className={projectStyle.mainText}>
            <h2>{props.title}</h2>
        </div>
        <div className={projectStyle.projectList}>
            {/* 수원여대 */}
            <div className={projectStyle.sww}>
                <a href="https://leejunmoo.github.io/leejunmoo.swwUniversity/" target='blank' className={projectStyle.re}
                 onMouseOver={handleMouseOver}
                 onMouseOut={handleMouseOut}
                >
                    <img src={process.env.PUBLIC_URL + '/images' + '/project' + '/수원여대실음과.png'}  alt="수원여자대학교실용음과프로젝트" className={projectStyle.hoverbox} />
                    <div 
                    className={hovering ? `${projectStyle.hovertext}` : `${projectStyle.nohover}`}>
                        <p>수원여자대학교</p>
                    </div>
                </a>
                <p className={projectStyle.webP}>&#035;팀프로젝트 &#035;반응형 &#035;CSS</p>
                <div className={projectStyle.btnbox}>
                    <button><a href="https://github.com/leejunmoo/leejunmoo.swwUniversity" target='blank'>GitHub</a></button>
                    <button><a href="https://leejunmoo.github.io/leejunmoo.swwUniversity/" target='blank'>바로가기</a></button>
                </div>
            </div>
            {/* 길마로 */}
            <div className="gilmaro">
                <a href="https://port-0-node-ejs-gilmaro-team-fyyf25lboho2ya.gksl2.cloudtype.app/" target='blank' className={projectStyle.re}
                onMouseOver={handleMouseOver2}
                onMouseOut={handleMouseOut2}
                >
                    <img src={process.env.PUBLIC_URL + '/images' + '/project' + '/길마로.png'}  alt="브랜드샵길마로" className={projectStyle.gilmaroImg}/>
                    <div 
                    className={hovering2 ? `${projectStyle.hovertext2}` : `${projectStyle.nohover}`}>
                        <p>브랜드샵 길마로</p>
                    </div>                    
                </a>
                <p>&#035;모바일웹앱 &#035;SQlite &#035;Cookie</p>
                <div className={projectStyle.btnbox}>
                    <button><a href="https://github.com/leejunmoo/node-ejs-gilmaro-team" target='blank'>GitHub</a></button>
                    <button><a href="https://port-0-node-ejs-gilmaro-team-fyyf25lboho2ya.gksl2.cloudtype.app/" target='blank'>바로가기</a></button>
                </div>
            </div>
            {/* 날씨앱 */}
            <div className="weather-app">
                <a href="https://leejunmoo.github.io/weather-app/" target='blank' className={projectStyle.re}
                onMouseOver={handleMouseOver3}
                onMouseOut={handleMouseOut3}
                >
                    <img src={process.env.PUBLIC_URL + '/images' + '/project' + '/weatherapp.png'}  alt="날씨앱" className={projectStyle.hoverbox}/>
                    <div 
                    className={hovering3 ? `${projectStyle.hovertext}` : `${projectStyle.nohover}`}>
                        <p>날씨앱</p>
                    </div>
                </a>
                <p className={projectStyle.webP}>&#035;API &#035;JQuery &#035;JavaScript</p>
                <div className={projectStyle.btnbox}>
                    <button><a href="https://github.com/leejunmoo/weather-app" target='blank'>GitHub</a></button>
                    <button><a href="https://leejunmoo.github.io/weather-app/" target='blank'>바로가기</a></button>
                </div>
            </div>
            {/* 문학수첩 */}
            <div className="library-note">
                <a href="https://leejunmoo.github.io/literary-notebook/" target='blank' className={projectStyle.re}
                onMouseOver={handleMouseOver4}
                onMouseOut={handleMouseOut4}
                >
                    <img src={process.env.PUBLIC_URL + '/images' + '/project' + '/문학수첩.png'}  alt="문학수첩" className={projectStyle.hoverbox}/>
                    <div 
                    className={hovering4 ? `${projectStyle.hovertext}` : `${projectStyle.nohover}`}>
                        <p>문학수첩</p>
                    </div>
                </a>
                <p className={projectStyle.webP}>&#035;반응형 &#035;JQuery &#035;포토샵디자인</p>
                <div className={projectStyle.btnbox}>
                    <button><a href="https://github.com/leejunmoo/literary-notebook" target='blank'>GitHub</a></button>
                    <button><a href="https://leejunmoo.github.io/literary-notebook/" target='blank'>바로가기</a></button>
                </div>
            </div>
            {/* 연하장 */}
            <div className="newyear">
                <a href="https://port-0-node-ejs-post-newyears-fyyf25lboho2ya.gksl2.cloudtype.app/" target='blank' className={projectStyle.re}
                onMouseOver={handleMouseOver5}
                onMouseOut={handleMouseOut5}
                >
                    <img src={process.env.PUBLIC_URL + '/images' + '/project' + '/연하장.png'}  alt="연하장" className={projectStyle.gilmaroImg}/>
                    <div 
                    className={hovering5 ? `${projectStyle.hovertext2}` : `${projectStyle.nohover}`}>
                        <p>모바일 연하장</p>
                    </div>
                </a>
                
                <p>&#035;모바일웹앱 &#035;json &#035;node.js</p>
                <div className={projectStyle.btnbox}>
                    <button><a href="https://github.com/leejunmoo/node-ejs-post-newyears" target='blank'>GitHub</a></button>
                    <button><a href="https://port-0-node-ejs-post-newyears-fyyf25lboho2ya.gksl2.cloudtype.app/" target='blank'>바로가기</a></button>
                </div>
            </div>
        </div>
        </div>
    </Desktop>
    <Mobile>
        <div className={projectStyle.project} id='project' style={bgstyle}>
            <div className={projectStyle.mainText}>
                <h2>{props.title}</h2>
            </div>
            <div className={projectStyle.projectList}>
                {/* 수원여대 */}
                <div className={projectStyle.sww}>
                    <a href="https://leejunmoo.github.io/leejunmoo.swwUniversity/" target='blank' className={projectStyle.re}>
                        <img src={process.env.PUBLIC_URL + '/images' + '/project' + '/수원여대실음과.png'}  alt="수원여자대학교실용음과프로젝트"/>
                        <div 
                        className={hovering ? `${projectStyle.hovertext}` : `${projectStyle.nohover}`}>
                            <p>수원여자대학교</p>
                        </div>
                    </a>
                    <p className={projectStyle.webP}>&#035;팀프로젝트 &#035;반응형 &#035;CSS</p>
                    <div className={projectStyle.btnbox}>
                        <button><a href="https://github.com/leejunmoo/leejunmoo.swwUniversity" target='blank'>GitHub</a></button>
                        <button><a href="https://leejunmoo.github.io/leejunmoo.swwUniversity/" target='blank'>바로가기</a></button>
                    </div>
                </div>
                {/* 길마로 */}
                <div className="gilmaro">
                    <a href="https://port-0-node-ejs-gilmaro-team-fyyf25lboho2ya.gksl2.cloudtype.app/" target='blank' className={projectStyle.re}>
                        <img src={process.env.PUBLIC_URL + '/images' + '/project' + '/길마로.png'}  alt="브랜드샵길마로" className={projectStyle.mobilegilmaroImg}/>
                        <div 
                        className={hovering ? `${projectStyle.hovertext2}` : `${projectStyle.nohover}`}>
                            <p>브랜드샵 길마로</p>
                        </div>                    
                    </a>
                    <p>&#035;모바일웹앱 &#035;SQlite &#035;Cookie</p>
                    <div className={projectStyle.btnbox}>
                        <button><a href="https://github.com/leejunmoo/node-ejs-gilmaro-team" target='blank'>GitHub</a></button>
                        <button><a href="https://port-0-node-ejs-gilmaro-team-fyyf25lboho2ya.gksl2.cloudtype.app/" target='blank'>바로가기</a></button>
                    </div>
                </div>
                {/* 날씨앱 */}
                <div className="weather-app">
                    <a href="https://leejunmoo.github.io/weather-app/" target='blank' className={projectStyle.re}>
                        <img src={process.env.PUBLIC_URL + '/images' + '/project' + '/weatherapp.png'}  alt="날씨앱"/>
                        <div 
                        className={hovering ? `${projectStyle.hovertext}` : `${projectStyle.nohover}`}>
                            <p>날씨앱</p>
                        </div>
                    </a>
                    <p className={projectStyle.webP}>&#035;API &#035;JQuery &#035;JavaScript</p>
                    <div className={projectStyle.btnbox}>
                        <button><a href="https://github.com/leejunmoo/weather-app" target='blank'>GitHub</a></button>
                        <button><a href="https://leejunmoo.github.io/weather-app/" target='blank'>바로가기</a></button>
                    </div>
                </div>
                {/* 문학수첩 */}
                <div className="library-note">
                    <a href="https://leejunmoo.github.io/literary-notebook/" target='blank' className={projectStyle.re}>
                        <img src={process.env.PUBLIC_URL + '/images' + '/project' + '/문학수첩.png'}  alt="문학수첩"/>
                        <div 
                        className={hovering ? `${projectStyle.hovertext}` : `${projectStyle.nohover}`}>
                            <p>문학수첩</p>
                        </div>
                    </a>
                    <p className={projectStyle.webP}>&#035;반응형 &#035;JQuery &#035;포토샵디자인</p>
                    <div className={projectStyle.btnbox}>
                        <button><a href="https://github.com/leejunmoo/literary-notebook" target='blank'>GitHub</a></button>
                        <button><a href="https://leejunmoo.github.io/literary-notebook/" target='blank'>바로가기</a></button>
                    </div>
                </div>
                {/* 연하장 */}
                <div className="newyear">
                    <a href="https://port-0-node-ejs-post-newyears-fyyf25lboho2ya.gksl2.cloudtype.app/" target='blank' className={projectStyle.re}>
                        <img src={process.env.PUBLIC_URL + '/images' + '/project' + '/연하장.png'}  alt="연하장" className={projectStyle.mobilegilmaroImg}/>
                        <div 
                        className={hovering ? `${projectStyle.hovertext2}` : `${projectStyle.nohover}`}>
                            <p>모바일 연하장</p>
                        </div>
                    </a>
                    
                    <p>&#035;모바일웹앱 &#035;json &#035;node.js</p>
                    <div className={projectStyle.btnbox}>
                        <button><a href="https://github.com/leejunmoo/node-ejs-post-newyears" target='blank'>GitHub</a></button>
                        <button><a href="https://port-0-node-ejs-post-newyears-fyyf25lboho2ya.gksl2.cloudtype.app/" target='blank'>바로가기</a></button>
                    </div>
                </div>
            </div>
        </div>
    </Mobile>
    </>
   

    
  )
}
