import React from 'react'
import Header from './Header';
import mainStyle from './Main.module.css';

export default function Main(props) {
    // console.log(props.bg)
    const bgstyle = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/${props.bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
    }
  return (
    <div className={mainStyle.main} id='main' style={bgstyle}>
        <Header />
        <div className={mainStyle.mainText}>
            <h2>{props.title}</h2>
            <p className={mainStyle.pSize}>{props.subTitle}</p>
        </div>
        
    </div>
  )
}
