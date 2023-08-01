import React from 'react'

import {TopNav} from '../components/layout/nav'
import { MyNftTop, MyNftMid } from '../components/layout/mynft'
import { Footer } from '../components/layout/footer'

const MyNft = () => {
  return (
    <>
      <TopNav addInput={true} />

      <MyNftTop />
      <MyNftMid />

      <Footer />
    </>
  )
}

export default MyNft
