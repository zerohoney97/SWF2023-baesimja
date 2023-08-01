import React from 'react'
import { Top, MyNftBox, Collection } from './Mynft.styled'

import nft1 from '../../img/nft1.png'
import nft2 from '../../img/nft2.png'
import nft3 from '../../img/nft3.png'
import right from '../../img/right.png'

const MyNftTop = () => {
    let user_id = 'blah'
    let nft_num = 10;

    return (
        <>
        <Top>{user_id}'s Collections ({nft_num})</Top>
        </>
    )
}

const MyCollection = () => {
    return (
        <>
        <Collection>
            <img src={nft1}></img>
            <p className='nft-info'>nft이름 어쩌구asfsadasfasdfdsfasdfafsd</p>
            <p className='case-info'>판례 정보 어쩌구</p>
            <img className='goto' src={right}></img>
        </Collection>
        </>
    )
}

const MyNftMid = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <>
        <MyNftBox>
            {arr.map((value, index) => {
                return <MyCollection key={index} />
            })}
        </MyNftBox>
        </>
    )
}

export {MyNftTop, MyNftMid}