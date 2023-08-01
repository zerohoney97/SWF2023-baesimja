import React from 'react'

import up from '../img/up.png'
import down from '../img/down.png'

const Option = ({text}) => {
    return (
        <div className='option'>
            {text}
        </div>
    )
}

const OptionsBox = ({select}) => {
    let arr = [];
    if(select == '기간') {
        arr = ['최근 1년', '최근 3년', '최근 5년']
    }else if(select == '조회수' || select == '설문 완료수') {
        arr = ['오름차순', '내림차순']
    }

    return (
        <div className='option-box'>
            {arr.map((value) => {
                return <Option text={value}  />
            })}
        </div>
    )
}

const Select = ({select, isClick, setClick}) => {
    let border, arrow;
    if(isClick) {
        border = '1px solid black';
        arrow = up;
    }else {
        border = '1px solid silver';
        arrow = down;
    }

  return (
    <div className='select' style={{border:border}} onClick={() => {setClick(!isClick)}}>
        {select}

        <img src={arrow} />

        {isClick &&                
        <OptionsBox select={select} />
        }
    </div>
  )
}

export default Select
