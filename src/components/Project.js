import React from 'react'
import projectStyle from './Project.module.css';

export default function Project(props) {
    const bgstyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/${props.bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
    }
  return (
    <div className={projectStyle.project} id='project' style={bgstyle}>
        <div className={projectStyle.mainText}>
            <h2>{props.title}</h2>
        </div>
        <div className={projectStyle.projectList}>
            {/* 수원여대 */}
            <div className={projectStyle.sww}>
                <a href="#">
                    <img src={process.env.PUBLIC_URL + '/images' + '/project' + '/수원여대실음과.png'}  alt="project1"/>
                </a>
                <p className={projectStyle.webP}>&#035;팀프로젝트 &#035;반응형 &#035&#035;CSS</p>
                <div className={projectStyle.btnbox}>
                    <button><a href="#">GitHub</a></button>
                    <button><a href="#">Figma</a></button>
                </div>
            </div>
            {/* 길마로 */}
            <div className="gilmaro">
                <a href="#">
                    <img src={process.env.PUBLIC_URL + '/images' + '/project' + '/길마로.png'}  alt="project1" className={projectStyle.gilmaroImg}/>                    
                </a>
                <p>&#035;모바일웹앱 &#035;SQlite &#035;Cookie</p>
                <div className={projectStyle.btnbox}>
                    <button><a href="#">GitHub</a></button>
                    <button><a href="#">Figma</a></button>
                </div>
            </div>
            {/* 날씨앱 */}
            <div className="weather-app">
                <a href="#">
                    <img src={process.env.PUBLIC_URL + '/images' + '/project' + '/weatherapp.png'}  alt="project1"/>
                </a>
                <p className={projectStyle.webP}>&#035;API &#035;JQuery &#035;JavaScript</p>
                <div className={projectStyle.btnbox}>
                    <button><a href="#">GitHub</a></button>
                </div>
            </div>
            {/* 문학수첩 */}
            <div className="library-note">
                <a href="#">
                    <img src={process.env.PUBLIC_URL + '/images' + '/project' + '/문학수첩.png'}  alt="project1"/>
                </a>
                <p className={projectStyle.webP}>&#035;반응형 &#035;JQuery &#035;포토샵디자인</p>
                <div className={projectStyle.btnbox}>
                    <button><a href="#">GitHub</a></button>
                    <button><a href="#">Figma</a></button>
                </div>
            </div>
            {/* 연하장 */}
            <div className="newyear">
                <a href="#">
                    <img src={process.env.PUBLIC_URL + '/images' + '/project' + '/연하장.png'}  alt="project1" className={projectStyle.gilmaroImg}/>
                </a>
                <p>&#035;모바일웹앱 &#035;json &#035;node.js</p>
                <div className={projectStyle.btnbox}>
                    <button><a href="#">GitHub</a></button>
                    <button><a href="#">Figma</a></button>
                </div>
            </div>
        </div>
    </div>
  )
}
