import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';

import { searchAction } from '../../../middleware';

import { SearchInputBox } from './Input.styled'

import searchImg from '../../img/search.png'
import { useNavigate } from 'react-router-dom';

const SearchInput = ({width, keyword, category}) => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const [search, setSearch] = useState();

  // 검색창 placeholder
  let holder;
  if(keyword == undefined) {
    holder = '키워드를 검색하세요'
  }else {
    holder = keyword;
  }

  // 엔터키 눌렀을 때
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      moveToSearch();
    }
  };

  // 카테고리 눌렀을 때
  useEffect(() => {
    if(category != null) {
      setSearch(category);
      dispatch(searchAction.searchChk(category));
    }
  }, [category])

  // Search 페이지로 이동
  const moveToSearch = async () => {
    dispatch(searchAction.searchChk(search));
  }

  const succeed = useSelector(state => state.search.succeed);
  useEffect(() => {
    if(succeed == true) {
      dispatch(searchAction.searchInit());

      // arr 다 들어오고 페이지 넘어가기
      nav(`/search/case?q=${search}&page=1`);
    }
  }, [succeed])


  return (
    <SearchInputBox width={width}>
        <div className='search-input-wrap'>
          <div onClick={moveToSearch} className='search-img'><img src={searchImg} alt="" /></div>
          <input
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={handleKeyPress}
            className='search-input' type="text" placeholder={holder} />
        </div>
    </SearchInputBox>
  )
}

export {SearchInput}