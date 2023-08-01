import React from 'react'

import {TopNav} from '../componetsmobile/layout/nav'
import { MyNftTop, MyNftMid } from '../componetsmobile/layout/mynft'
import { Footer } from '../componetsmobile/layout/footer'

const MyNftMobile = () => {
  return (
    <>
      <TopNav addInput={true} />

      <MyNftTop />
      <MyNftMid />

      <Footer />
    </>
  )
}

export default MyNftMobile
