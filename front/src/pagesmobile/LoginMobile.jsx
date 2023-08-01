import React, { useEffect } from 'react'

import { TopNav } from '../componetsmobile/layout/nav'
import { Footer } from '../componetsmobile/layout/footer'
import { LoginMid } from '../componetsmobile/layout/signup' 
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const LoginMobile = () => {
  return (
    <>
      <TopNav />
      <LoginMid />
      <Footer />
    </>
  )
}

export default LoginMobile
