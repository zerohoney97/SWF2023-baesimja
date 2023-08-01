import React, {useState} from 'react'

const Title = ({value, openSearchRight}) => {
    let viewCnt = value.view_count;

    const [view, setView] = useState(viewCnt);

    return (
        <div className='title-box'>
            <div onClick={() => {
                openSearchRight(value.id)
                setView(viewCnt + 1);
                }}
                className='title'>
                {value.title}
            </div>
            <span>조회수<br />{view}</span>
            <span>설문 완료수<br />{value.result_count}</span>
        </div>
    )
}

const Detail = ({text}) => {
    // let test = '피고인 3에 대하여 (1) 살인에 관하여 원심에서 적법하게 채택하여 조사한 증거들에 의하여 인정되는 다음과 같은 사정, 즉 공동피고인 1과 공동피고인 2는 2006. 4.경 및 같은 해 5.경 피고인에게 피해자에 대한 살인가담을 제의하거나 살인청부업자를 시켜 피해자를 살해하려고 한다는 말을 하여 피고인도 공동피고인 1과 공동피고인 2가 피해자를 살해하려 한다는 사실을 알고 있었던 점(수사기록 제834쪽, 제868쪽, 제890쪽), 피고인은 이 사건 살인범행 전일 저녁 공동피고인 1로부터 살인가담 제의를 받고 거절하기도 하였던 점(공판기록 제117쪽, 수사기록 제862, 889쪽), 피고인이 원심에서, 거의 전 재산이라고 할 수 있는 2,700만 원을 공동피고인 1에게 빌려주었다가 변제받지 못하고 있었던 중, 이 사건 살인범행 당일 아침 공동피고인 1이 집에 찾아와 “피해자가 죽지 않으면 빌린 돈을 갚을 수 없다”고 하자 공동피고인 1의 집에 가게 되었고, 당시 공동피고인 1이 “ 피고인 2가 내게 전화하여 피고인 3과 함께 남편을 죽이라”고 해서 데리러 왔다는 말을 하였다고 진술하였던 점(공판기록 제118, 119쪽), 공동피고인 1도 원심법정에서, 그와 같은 취지의 말을 하였다고 진술하였던 점(공판기록 제125쪽) 등을 종합하여 보면, 피고인이 공동피고인 1이 피해자를 살해하려고 한다는 정을 알면서도 공동피고인 1과 함께 잠을 자고 있던 피해자의 목을 넥타이로 졸라 피해자를 살해한 사실을 인정할 수 있으므로, 이에 관한 피고인의 주장은 이유 없다.';
    return (
        <div className='detail'>
            {text}
        </div>
    )
}

const Case = ({value, openSearchRight}) => {
  return (
    <div className='case'>
      <Title value={value} openSearchRight={openSearchRight} />
      <Detail text={value.detail} />
    </div>
  )
}

export default Case
