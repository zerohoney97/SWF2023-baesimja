import React, { useEffect, useState } from "react";
import { Top, MyNftBox, Collection } from "./Mynft.styled";
import { mintJusticeTokenContract } from "../../layout/search/abiConfig";

import nft1 from "../../img/nft1.png";
import nft2 from "../../img/nft2.png";
import nft3 from "../../img/nft3.png";
import right from "../../img/right.png";

const MyNftTop = () => {
  let user_id = "your";

  return (
    <>
      <Top>{user_id} Collections</Top>
    </>
  );
};

const MyCollection = ({ value, index }) => {
  return (
    <>
      <Collection>
        <img src={nft1} alt={value.img}></img>
        <p className="nft-info">{value.caseName}</p>
        <p className="case-info">{value.caseNum}</p>
        <p>{value.date}</p>
        <p>{value.sentence}</p>
      </Collection>
    </>
  );
};

const MyNftMid = () => {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // 월렛 계정 가져오기
  const [account, setAccount] = useState("");
  const [nftInfo, setNftInfo] = useState("");
  const [nftArr, setNftArr] = useState([]);
  const rawNftToObject = () => {
    const tempArr = [...nftArr];
    nftInfo["0"].forEach((el, index) => {
      tempArr.push({
        img: nftInfo["0"][index],
        caseNum: nftInfo["1"][index],
        caseName: nftInfo["2"][index],
        date: nftInfo["3"][index],
        sentence: nftInfo["4"][index],
      });
    });
    setNftArr(tempArr);
  };
  useEffect(() => {
    if (nftInfo !== "") {
      rawNftToObject();
    }
  }, [nftInfo]);
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
  return (
    <>
      <MyNftBox>
        {nftArr.length !== 0 &&
          nftArr.map((value, index) => {
            return <MyCollection value={value} index={index} />;
          })}
      </MyNftBox>
    </>
  );
};

export { MyNftTop, MyNftMid };
