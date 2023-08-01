import React, { useEffect } from 'react'

import {TopNav} from '../components/layout/nav'
import {MainTop, MainMid} from '../components/layout/main'
import {Footer} from '../components/layout/footer'
import { useSelector } from 'react-redux'

const Main = () => {


  return (
    <>
      <TopNav />

      <MainTop />
      <MainMid />

      <Footer />
    </>
  )
}

export default Main
