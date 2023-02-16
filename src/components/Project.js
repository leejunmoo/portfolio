import React from 'react'
import { useState } from 'react';
import projectStyle from './Project.module.css';

export default function Project(props) {
    const bgstyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/${props.bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
    }

    const [hovering, setHovering] = useState(false);

    const handleMouseOver = () => {
        setHovering(true);
      };

      const handleMouseOut = () => {
        setHovering(false);
      };

  return (
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
                    <button><a href="https://www.figma.com/file/7EFSEzO8AmWHjIdvIuELcY/%EC%88%98%EC%9B%90%EC%97%AC%EB%8C%80-%EC%8B%A4%EC%9D%8C%EA%B3%BC-%EB%A6%AC%EB%94%94%EC%9E%90%EC%9D%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8---%EC%8B%9C%EC%95%88?node-id=0%3A1&t=LCwFn69vvoKeaszq-1" target='blank'>Figma</a></button>
                </div>
            </div>
            {/* 길마로 */}
            <div className="gilmaro">
                <a href="https://port-0-node-ejs-gilmaro-team-fyyf25lboho2ya.gksl2.cloudtype.app/" target='blank' className={projectStyle.re}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                >
                    <img src={process.env.PUBLIC_URL + '/images' + '/project' + '/길마로.png'}  alt="브랜드샵길마로" className={projectStyle.gilmaroImg}/>
                    <div 
                    className={hovering ? `${projectStyle.hovertext2}` : `${projectStyle.nohover}`}>
                        <p>브랜드샵 길마로</p>
                    </div>                    
                </a>
                <p>&#035;모바일웹앱 &#035;SQlite &#035;Cookie</p>
                <div className={projectStyle.btnbox}>
                    <button><a href="https://github.com/leejunmoo/node-ejs-gilmaro-team" target='blank'>GitHub</a></button>
                    <button><a href="https://www.figma.com/file/R6QVlnWuo8IIaax6AdZIKF/%EB%B8%8C%EB%9E%9C%EB%93%9C%EC%83%B5-%EA%B8%B8%EB%A7%88%EB%A1%9C-%EC%8B%9C%EC%95%88?node-id=0%3A1&t=F4Ml5NSeYXDzbCVV-1" target='blank'>Figma</a></button>
                </div>
            </div>
            {/* 날씨앱 */}
            <div className="weather-app">
                <a href="https://leejunmoo.github.io/weather-app/" target='blank' className={projectStyle.re}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                >
                    <img src={process.env.PUBLIC_URL + '/images' + '/project' + '/weatherapp.png'}  alt="날씨앱" className={projectStyle.hoverbox}/>
                    <div 
                    className={hovering ? `${projectStyle.hovertext}` : `${projectStyle.nohover}`}>
                        <p>날씨앱</p>
                    </div>
                </a>
                <p className={projectStyle.webP}>&#035;API &#035;JQuery &#035;JavaScript</p>
                <div className={projectStyle.btnbox}>
                    <button><a href="https://github.com/leejunmoo/weather-app" target='blank'>GitHub</a></button>
                </div>
            </div>
            {/* 문학수첩 */}
            <div className="library-note">
                <a href="https://leejunmoo.github.io/literary-notebook/" target='blank' className={projectStyle.re}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                >
                    <img src={process.env.PUBLIC_URL + '/images' + '/project' + '/문학수첩.png'}  alt="문학수첩" className={projectStyle.hoverbox}/>
                    <div 
                    className={hovering ? `${projectStyle.hovertext}` : `${projectStyle.nohover}`}>
                        <p>문학수첩</p>
                    </div>
                </a>
                <p className={projectStyle.webP}>&#035;반응형 &#035;JQuery &#035;포토샵디자인</p>
                <div className={projectStyle.btnbox}>
                    <button><a href="https://github.com/leejunmoo/literary-notebook" target='blank'>GitHub</a></button>
                    <button><a href="https://www.figma.com/file/wYFN10PHBga9ddQ0ju3gyP/%EB%AC%B8%ED%95%99%EC%88%98%EC%B2%A9-%EC%8B%9C%EC%95%88_22-12-05?node-id=0%3A1&t=cdHbffSB5fMcNrAs-1" target='blank'>Figma</a></button>
                </div>
            </div>
            {/* 연하장 */}
            <div className="newyear">
                <a href="https://port-0-node-ejs-post-newyears-fyyf25lboho2ya.gksl2.cloudtype.app/" target='blank' className={projectStyle.re}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                >
                    <img src={process.env.PUBLIC_URL + '/images' + '/project' + '/연하장.png'}  alt="연하장" className={projectStyle.gilmaroImg}/>
                    <div 
                    className={hovering ? `${projectStyle.hovertext2}` : `${projectStyle.nohover}`}>
                        <p>모바일 연하장</p>
                    </div>
                </a>
                
                <p>&#035;모바일웹앱 &#035;json &#035;node.js</p>
                <div className={projectStyle.btnbox}>
                    <button><a href="https://github.com/leejunmoo/node-ejs-post-newyears" target='blank'>GitHub</a></button>
                    <button><a href="https://www.figma.com/file/Hw7GUPwAsUj4oNFmdo77Hj/%EC%97%B0%ED%95%98%EC%9E%A5%EC%A0%9C%EC%9E%91?node-id=0%3A1&t=PbOagcEf4l0optJ0-1" target='blank'>Figma</a></button>
                </div>
            </div>
        </div>
    </div>

    
  )
}
