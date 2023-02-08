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
    <div className={projectStyle.project} style={bgstyle}>
        <div className={projectStyle.mainText}>
            <h2>{props.title}</h2>
        </div>
        <div className={projectStyle.projectList}>
            {/* 수원여대 */}
            <div className={projectStyle.sww}>
                <img src={process.env.PUBLIC_URL + '/images' + '/project' + '/수원여대실음과.png'}  alt="project1"/>
                <p className={projectStyle.webP}>#팀프로젝트 #반응형 #CSS</p>
                <div className={projectStyle.btnbox}>
                    <button><a href="#">GitHub</a></button>
                    <button><a href="#">Figma</a></button>
                </div>
            </div>
            {/* 길마로 */}
            <div className="gilmaro">
                <img src={process.env.PUBLIC_URL + '/images' + '/project' + '/길마로.png'}  alt="project1" className={projectStyle.gilmaroImg}/>
                <p>#모바일웹앱 #SQlite #Cookie</p>
                <div className={projectStyle.btnbox}>
                    <button><a href="#">GitHub</a></button>
                    <button><a href="#">Figma</a></button>
                </div>
            </div>
            {/* 날씨앱 */}
            <div className="weather-app">
                <img src={process.env.PUBLIC_URL + '/images' + '/project' + '/weatherapp.png'}  alt="project1"/>
                <p className={projectStyle.webP}>#API #JQuery #JavaScript</p>
                <div className={projectStyle.btnbox}>
                    <button><a href="#">GitHub</a></button>
                </div>
            </div>
            {/* 문학수첩 */}
            <div className="library-note">
                <img src={process.env.PUBLIC_URL + '/images' + '/project' + '/문학수첩.png'}  alt="project1"/>
                <p className={projectStyle.webP}>#반응형 #JQuery #포토샵디자인</p>
                <div className={projectStyle.btnbox}>
                    <button><a href="#">GitHub</a></button>
                    <button><a href="#">Figma</a></button>
                </div>
            </div>
            {/* 연하장 */}
            <div className="newyear">
                <img src={process.env.PUBLIC_URL + '/images' + '/project' + '/연하장.png'}  alt="project1" className={projectStyle.gilmaroImg}/>
                <p>#모바일웹앱 #json #node.js</p>
                <div className={projectStyle.btnbox}>
                    <button><a href="#">GitHub</a></button>
                    <button><a href="#">Figma</a></button>
                </div>
            </div>
        </div>
    </div>
  )
}
