import React from 'react'

import {TopNav} from '../componetsmobile/layout/nav'
import { Footer } from '../componetsmobile/layout/footer'
import { MyPageTop, MyPageMid } from '../componetsmobile/layout/mypage'

const MyPageMobile = () => {
  return (
    <>
      <TopNav addInput={true} />

      <MyPageTop />
      <MyPageMid />

      <Footer />
    </>
  )
}

export default MyPageMobile
