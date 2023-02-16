import React from 'react'
import headerStyle from './Header.module.css';
import {useMediaQuery} from 'react-responsive';
import { useState } from 'react';

export default function Header() {

  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 768 })
    return isDesktop ? children : null
  }

  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  const [menu, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정
  
  const toggleMenu = () => {
    setMenu(menu => !menu); // on,off 개념 boolean
  }
  
  const click = () => {
    setMenu(false)
  }


  return (
    <>
    <Desktop>
      <header>
          <a href="#"><h1>준수하다</h1></a>
          <nav>
              <a href="#main" className={headerStyle.textSize}>홈</a>
              <a href="#about" className={headerStyle.textSize}>소개</a>
              <a href="#project" className={headerStyle.textSize}>작업물</a>
          </nav>
      </header>
    </Desktop>
    <Mobile>
      <header className={headerStyle.mobileHedaer}>
          <a href="#"><h1 className={headerStyle.mobileLogo}>준수하다</h1></a>
          <nav>
              <a href="#main" className={headerStyle.textSize}
              onClick={()=>toggleMenu()}>
                {menu ? <img src={process.env.PUBLIC_URL + '/images' + '/icons' + '/close.png'}  alt="메뉴"/> : <img src={process.env.PUBLIC_URL + '/images' + '/icons' + '/menu.png'}  alt="메뉴"/>}
                
              </a>
              <div className={menu ? `${headerStyle.siteMenu}` : `${headerStyle.active}`}>
                <ul>
                  <a href="#main" className={headerStyle.textSize} onClick={click}>
                    <li>홈</li>
                  </a>
                  <a href="#about" className={headerStyle.textSize} onClick={click}>
                    <li>소개</li>
                  </a>
                  <a href="#project" className={headerStyle.textSize} onClick={click}>
                    <li>작업물</li>
                  </a>
                </ul>
              </div>
             
          </nav>
      </header>
    </Mobile>
    
    
    </>
    
  )
}
