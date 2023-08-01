import React from 'react'

import {TopNav} from '../components/layout/nav'
import { Footer } from '../components/layout/footer'
import { MyPageTop, MyPageMid } from '../components/layout/mypage'

const MyPage = () => {
  return (
    <>
      <TopNav addInput={true} />

      <MyPageTop />
      <MyPageMid />

      <Footer />
    </>
  )
}

export default MyPage
