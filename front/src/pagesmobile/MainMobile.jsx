import React, { useEffect } from 'react'

import {TopNav} from '../componetsmobile/layout/nav'
import {MainTop, MainMid} from '../componetsmobile/layout/main'
import {Footer} from '../componetsmobile/layout/footer'
import { useSelector } from 'react-redux'

const MainMobile = () => {


  return (
    <>
      <TopNav />

      <MainTop />
      <MainMid />

      <Footer />
    </>
  )
}

export default MainMobile
