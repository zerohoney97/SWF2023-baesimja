import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { mintJusticeTokenContract } from "./abiConfig";

import { searchAction } from "../../../middleware";

import {
  SearchTopBox,
  SearchMidBox,
  PaginationBox,
  DetailBox,
  BtnBox,
  CircleBtn,
  TitleBox,
  Disabled,
  Survey,
} from "./Search.styled";
import Select from "../../util/Select";
import Case from "../../util/Case";

import starE from "../../img/starE.png";
import starF from "../../img/starF.png";

import graph from "../../img/graph.png";
import reason from "../../img/reason.png";

import right from "../../img/right.png";

const SearchTop = () => {
  const [isClick1, setClick1] = useState(false);
  const [isClick2, setClick2] = useState(false);
  const [isClick3, setClick3] = useState(false);

  return (
    <>
      <SearchTopBox>
        <Select select={"기간"} isClick={isClick1} setClick={setClick1} />
        <Select select={"조회수"} isClick={isClick2} setClick={setClick2} />
        <Select
          select={"설문 완료수"}
          isClick={isClick3}
          setClick={setClick3}
        />
      </SearchTopBox>
    </>
  );
};

const SearchLeft = ({ openSearchRight }) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const p = queryParams.get('page');

    const [page, setPage] = useState(p);
    const [pageArr, setArr] = useState();


    // db에서 axios로 정보 받아와서 넘기기...
    let searchArr = useSelector((state) => state.search.searchArr);
    useEffect(() => {
        if(searchArr.lenth !== 0) {
            let pageArr = [];
            let totalPage = Math.ceil(searchArr.length / 5);
            for(let i=0; i<totalPage; i++) {
                pageArr.push(i+1);
            }
            setArr(pageArr);
        }
    }, [searchArr]);

    useEffect(() => {
        console.log(pageArr);
    }, [pageArr])


  if (searchArr.length == 0) {
    return (
      <SearchMidBox>
        <div>검색 결과가 없습니다.</div>
      </SearchMidBox>
    );
  } else {
    return (
      <>
        <SearchMidBox>
          {searchArr.map((value, index) => {
            return (
              <Case
                key={index}
                value={value}
                openSearchRight={openSearchRight}
              />
            );
          })}
          <PaginationBox>
            {pageArr && pageArr.map((value, index) => {
                return <div key={index} className="page-btn">{value}</div>
            })}
          </PaginationBox>
        </SearchMidBox>
      </>
    );
  }
};

const ReasonBox = ({ shows, selected }) => {
  let splited;
  useEffect(() => {
    splited = selected.reason.split("\n");
  }, [selected]);

  if (shows == reason) {
    return (
      <div className="reason-box">
        <div className="reason1">
          <h1>부산고등법원 제2형사부 판결</h1>
          <ul>
            <li>사건 : 2018노22 살인, 살인미수</li>
            <li>피고인A : 항소인피고인</li>
            <li>검사 : 유지열(기소), 박재영(공판)</li>
            <li>변호인 : 법무법인 ○이파트너스</li>
            <li>원심 : 판결울산지방법원 2017. 12. 8. 선고 2017고합219</li>
            <li>판결 : 판결선고2018. 5. 30.</li>
          </ul>
        </div>
        <div className="reason2">
          <h1>주문</h1>
          {selected.detail}
        </div>
        <div className="reason3">
          <h1>이유</h1>
          {selected.reason.split("\n").map((value) => {
            return (
              <>
                {value}
                <br />
              </>
            );
          })}
        </div>
      </div>
    );
  } else if (shows == graph) {
    return <div>graph</div>;
  }
};

const SearchRight = ({ shows, clicked, showGraph, closeSearchRight }) => {
  const dispatch = useDispatch();

  const [star, setStar] = useState(starE);
  const [display, setDisplay] = useState("flex");
  const [result, setResult] = useState("N년 N월");

  const selected = useSelector((state) => state.search.selected);
  const isLogin = useSelector((state) => state.login.isLogin);
  const isInterested = useSelector((state) => state.search.isInterested);

  // 월렛 계정 가져오기
  const [account, setAccount] = useState("");
  const [nftInfo, setNftInfo] = useState("");
  const getAccount = async () => {
    try {
      if (window.ethereum) {
        const [accounts] = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts);
      } else {
        console.log(window.ethereum);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAccount();
  });
  useEffect(() => {
    console.log(account);
  }, [account]);

  useEffect(() => {
    if (isLogin == true) {
      setDisplay("none");
    }
  }, [isLogin]);

  useEffect(() => {
    // console.log("선택한 case : ", selected);

    if (isInterested == true) {
      setStar(starF);
    } else {
      setStar(starE);
    }
  }, [selected]);

  // 관심 목록에 넣기/빼기
  const putInterest = async (id) => {
    if (star == starE) {
      setStar(starF);
      try {
        await axios.post(
          `http://localhost:8080/case/setInterested`,
          { case_id: id },
          {
            withCredentials: true,
          }
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      setStar(starE);
      try {
        await axios.post(
          `http://localhost:8080/case/delInterested`,
          { case_id: id },
          {
            withCredentials: true,
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  // 형량 미리보기
  const showResult = () => {
    if (result == "N년 N월") {
      setResult(selected.resultStr);
    } else {
      setResult("N년 N월");
    }
  };

  // 민팅
  const mint = async () => {
    try {
      // DB에 저장
      dispatch(searchAction.saveResult());

      // 민팅
      let nft_img = "";
      let case_num = selected.case_num;
      let category = selected.category;
      let date = new Date();
      let result;

      if (!account) return;
      const res = await mintJusticeTokenContract.methods
        .mintJusticeToken(
          "goldeHammer",
          "case_num",
          "category",
          "date",
          "징역 5년"
        )
        .send({ from: account });
      console.log(res);
      if (res.status) {
        const balance = await mintJusticeTokenContract.methods
          .balanceOf(account)
          .call();
        console.log(balance.length);
        const animalTokenId = await mintJusticeTokenContract.methods
          // 이 부분에서 balance.length를 사용할시 undefined가 발생한다. 따라서 balance는 민트된 nft의 양이므로 굳이 length를 쓰지 않고 일반 balance를 사용
          .tokenOfOwnerByIndex(account, parseInt(balance, 10) - 1)
          .call();
        console.log(animalTokenId);

        const animalType = await mintJusticeTokenContract.methods
          .justiceTypes(animalTokenId)
          .call();
        console.log(animalType);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // 민팅 정보 가져오기
  const getNftInfo = async () => {
    const nftInfo = await mintJusticeTokenContract.methods
      .getAllUserNft(account)
      .call();
    console.log(nftInfo);
    console.log(await mintJusticeTokenContract.methods.getMsgSender().call());
    setNftInfo(nftInfo);
  };
  useEffect(() => {
    if (account !== "") {
      getNftInfo();
    }
  }, [account]);

  if (clicked == true) {
    return (
      <>
        <DetailBox>
          <BtnBox>
            {isLogin && (
              <>
                <CircleBtn
                  left={"15px"}
                  onClick={() => {
                    putInterest(selected.id);
                  }}
                >
                  <img src={star}></img>
                </CircleBtn>
                <CircleBtn left={"55px"} onClick={showGraph}>
                  <img src={shows}></img>
                </CircleBtn>
              </>
            )}
            <div onClick={() => {closeSearchRight(0)}} className="close-btn">x</div>
          </BtnBox>

          <TitleBox>
            {selected.title}
            <div className="result">
              징역 {result} <span onClick={showResult}>미리보기</span>
            </div>
          </TitleBox>

          {Object.keys(selected).length !== 0 && (
            <ReasonBox shows={shows} selected={selected} />
          )}

          <Survey>
            <div className="info">
              <p>
                여러분이 생각하는 해당 판례의{" "}
                <span className="underline">적절한 형량</span>은 얼마인가요?
                <br />
                설문을 진행하시면 여러분의 의견이 담긴{" "}
                <span className="bold">세상에서 단 하나뿐인 NFT</span>가
                발행됩니다.
              </p>
            </div>
            <div className="make-nft">
              <div className="wrap">
                <label>징역</label>
                <input type="number" min={0} max={30} defaultValue={0}></input>
                <label>년</label>
                <input type="number" min={0} max={12} defaultValue={0}></input>
                <label>월</label>
              </div>
              <div className="wrap">
                <label>집행유예</label>
                <input type="number" min={0} max={30} defaultValue={0}></input>
                <label>년</label>
                <input type="number" min={0} max={12} defaultValue={0}></input>
                <label>월</label>
              </div>

              <div onClick={mint} className="make-nft-btn">
                설문 완료 후 NFT 발행하기
                <img src={right}></img>
              </div>
            </div>

            <Disabled display={display}>로그인 후 이용 가능</Disabled>
          </Survey>
          {nftInfo == "" ? (
            <></>
          ) : (
            nftInfo["0"].map((img, index) => {
              return (
                <ul>
                  <li>{nftInfo["0"][index]}</li>
                  <li>{nftInfo["1"][index]}</li>
                  <li>{nftInfo["2"][index]}</li>
                  <li>{nftInfo["3"][index]}</li>
                  <li>{nftInfo["4"][index]}</li>
                </ul>
              );
            })
          )}
        </DetailBox>
      </>
    );
  }
};

export { SearchTop, SearchLeft, SearchRight };
