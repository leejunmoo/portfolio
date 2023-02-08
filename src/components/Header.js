import React from 'react'
import headerStyle from './Header.module.css';

export default function Header() {
  return (
    <header>
        <a href="#"><h1>준수하다</h1></a>
        <nav>
            <a href="#" className={headerStyle.textSize}>홈</a>
            <a href="#" className={headerStyle.textSize}>소개</a>
            <a href="#" className={headerStyle.textSize}>작업물</a>
        </nav>
    </header>
  )
}
