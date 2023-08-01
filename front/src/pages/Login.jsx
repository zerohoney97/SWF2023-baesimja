import React, { useEffect } from 'react'

import { TopNav } from '../components/layout/nav'
import { Footer } from '../components/layout/footer'
import { LoginMid } from '../components/layout/signup' 
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <TopNav />
      <LoginMid />
      <Footer />
    </>
  )
}

export default Login
