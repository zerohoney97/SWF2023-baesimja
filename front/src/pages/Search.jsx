import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import {TopNav} from '../components/layout/nav'
import {SearchTop, SearchLeft, SearchRight} from '../components/layout/search'
import { useDispatch } from 'react-redux'

import { searchAction } from '../middleware'

import graph from '../components/img/graph.png'
import reason from '../components/img/reason.png'

const Search = () => {
  const dispatch = useDispatch();

  const [shows, setShow] = useState(reason);
  const [clicked, setClick] = useState(false);

  // 키워드 입력값 받아오기
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const q = queryParams.get('q');
  const page = queryParams.get('page');

  // useEffect(() => {
  //   console.log(q);
  //   console.log(page);
  // })

  // title 누르면 오른쪽 열리게 & case.id로 특정 판례 받아오기
  const openSearchRight = (id) => {
    if(id == 0) {
      setClick(false);
    }else {
      setClick(true);
      dispatch(searchAction.selectCase(id))
    }
  }

  // graph 보기
  const showGraph = () => {
    console.log("graph 보기 눌림")
    // 사용자가 설문 완료했을 시만 볼 수 있게 처리하기

    if(shows == reason) {
      setShow(graph);
    }else {
      setShow(reason);
    }
  }

  return (
    <>
      <TopNav addInput={true} keyword={q} />

      <SearchTop  />
      <SearchLeft openSearchRight={openSearchRight} />
      <SearchRight shows={shows} clicked={clicked} showGraph={showGraph} closeSearchRight={openSearchRight} />
    </>
  )
}

export default Search
