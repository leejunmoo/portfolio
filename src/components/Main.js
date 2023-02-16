import React from 'react'
import Header from './Header';
import mainStyle from './Main.module.css';
import {useMediaQuery} from 'react-responsive';

export default function Main(props, {children}) {
    // console.log(props.bg)
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
      <div className={mainStyle.main} id='main' style={bgstyle}>
        <Header />
        <div className={mainStyle.mainText}>
            <h2>{props.title}</h2>
            <p className={mainStyle.pSize}>{props.subTitle}</p>
        </div>
      </div>
    </Desktop>
    <Mobile>
      <div className={mainStyle.main} id='main' style={bgstyle}>
        <Header />
        <div className={mainStyle.mainText}>
            <h2 className={mainStyle.mobileMain}>{props.title}</h2>
            <p className={mainStyle.mobileP}>{props.subTitle}</p>
        </div>
      </div>
    </Mobile>    
    </>

    
  )
}
