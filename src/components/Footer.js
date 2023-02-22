import React from 'react'
import footerStyle from './Footer.module.css';
import {useMediaQuery} from 'react-responsive';

export default function Footer() {

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
      <footer>
          <div className={footerStyle.textBox}>
              <p>Thanks For Visiting My PortFolio!</p>
              <p>해당 사이트는 상업적 목적이  아닌 개인 포트폴리오를 위해 제작한 사이트로, 홈페이지 일부 내용  이미지에 대한 저작권이 따로 있음을 밝힙니다.</p>
          </div>
      </footer>
    </Desktop>
    <Mobile>
      <footer>
          <div className={footerStyle.mobiletextBox}>
              <p className={footerStyle.mobileTop}>Thanks For Visiting My PortFolio!</p>
              <p className={footerStyle.mobileBottom}>해당 사이트는 상업적 목적이  아닌 개인 포트폴리오를 위해<br/> 제작한 사이트로, 홈페이지 일부 내용  이미지에 대한 저작권이 <br/>따로 있음을 밝힙니다.</p>
          </div>
      </footer>
    </Mobile>
    </>
    
  )
}
