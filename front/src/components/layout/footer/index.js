import React from 'react'

import { FooterBox } from './Footer.styled'

import logo from '../../img/logo2.png'
import github from '../../img/github.png'

const Footer = () => {
  return (
    <div>
      <FooterBox>
        <img src={logo} alt="logo" />
        <p>(C) Baesimjas Co., Ltd. ALL RIGHTS RESERVED.</p>
        <img className='git' src={github} alt="git" />
      </FooterBox>
    </div>
  )
}

export {Footer}
