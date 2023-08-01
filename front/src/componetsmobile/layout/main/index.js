import React, { useEffect, useState } from 'react'
import { MainSearchBox, Suggest, MainExamBox, MainExam } from './Main.styled'
import {SearchInput} from '../searchInput'
import { useSelector } from 'react-redux';

import mainExam from '../../img/mainExam.png'
import mainExam2 from '../../img/mainExam2.png'

const MainTop = () => {
    // 정적 데이터로? db에서 Length 끌고오기?
    let caseNum = '1,234';
    let finNum = 567;

    let categoryArr = ['살인', '절도', '사기'];

    const [category, setCategory] = useState();

    return (
        <div>
            <MainSearchBox>
                <p className='big-text'>국내 최초 판례 설문 NFT 발행,</p>
                <p className='big-text'>배심자들.</p>
                <p className='small-text'>전체 판례 <span>{caseNum} 건</span> | 전체 설문 완료 수 <span>{finNum} 건</span></p>

                <SearchInput width={'94%'} category={category} />

                <div className='suggest-wrap'>
                    {categoryArr.map((value, index) => {
                        return <Suggest onClick={() => {setCategory(value)}} className='suggest'># {value}</Suggest>
                    })}
                </div>
            </MainSearchBox>
        </div>
    )
}

const MainMid = () => {
    return (
        <div>
            <MainExamBox>
                <MainExam width={'100%'}>
                    <img src={mainExam} style={{width : "100%"}}></img>
                </MainExam>
                <MainExam width={'100%'}>
                    <img src={mainExam2} style={{width : "100%"}}></img>
                </MainExam>
            </MainExamBox>
        </div>
    )
}


export {MainTop, MainMid}