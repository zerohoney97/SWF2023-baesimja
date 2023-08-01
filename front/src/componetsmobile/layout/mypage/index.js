import React, {useEffect, useState} from 'react'
import { Nav, Top, Content } from './Mypage.styled'

import starF from '../../img/starF.png';
import reason from '../../img/reason.png';
import profile from '../../img/profile.png';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { searchAction } from '../../../middleware'


const MyPageTop = () => {
    return (
        <>
        <Top>마이페이지</Top>
        </>
    )
}

const MyPageNav = ({showPage}) => {
    const user_id = useSelector(state => state.login.user_id);

    return (
        <>
        <Nav>
            <div onClick={() => {showPage(0)}} className='nav-item'>
                <img className='nav-icon' src={profile}></img>
                <p>ID : {user_id}</p>
            </div>
            <div onClick={() => {showPage(1)}} className='nav-item'>
                <img className='nav-icon' src={starF}></img>
                <p>관심있는 판례</p>
            </div>
            <div onClick={() => {showPage(2)}} className='nav-item'>
                <img className='nav-icon' src={reason}></img>
                <p>설문 완료한 판례</p>
            </div>
        </Nav>
        </>
    )
}

const MyPageMid = () => {
    const dispatch = useDispatch();

    const [page, setPage] = useState([]);
    const myCaseArr = useSelector(state => state.search.myCaseArr);

    useEffect(() => {
        dispatch(searchAction.getMyCases());
    }, [page])

    const showPage = (id) => {

        if(myCaseArr.length != 0) {
            if(id == 0) {
                setPage([])
            }
            // 괌심있는 판례 목록 가져오기
            else if(id == 1 && myCaseArr.interestedList) {
                setPage(myCaseArr.interestedList)
            }
            // 설문 완료한 판례 목록 가져오기
            else if(id == 2 && myCaseArr.finishedList) {
                setPage(myCaseArr.finishedList)
            }
        }else {
            setPage([]);
        }
    }

    const moveToSearch = (title) => {
        console.log(title);
        dispatch(searchAction.searchChk(title));
    }

    return (
        <Content>
            <MyPageNav showPage={showPage} />
            <div className='content'>
                {page.map((value, index) => {
                    return (
                    <div key={index} onClick={() => {moveToSearch(value.Case.title)}} className='case'>
                        <div className='title'>{value.Case.title}</div>
                        <div className='detail'>{value.Case.detail}</div>
                    </div>
                    )
                })}
            </div>
        </Content>
    )
}

export {MyPageTop, MyPageMid}