pragma solidity ^0.8.15;
 
contract ingToken {
 
    mapping(address => uint256) public balances;  // 속성명이 address, 속성값이 uint256인 객체
    // 값이 없을 경우 undefined 나 에러나 나는 것이 아니라 디폴트 값인 0이 나온다.
 
    // 상태변수의 이름은 규격을 맞춰줘야 한다. 
    string public name = 'ingToken';
    string public symbol = 'ITK';
    uint8 public decimals = 18;
    uint256 public totalSupply = 10000000000 * 10 ** decimals;
 
    constructor() {
        balances[msg.sender] = totalSupply; // 배포를 진행한 EOA에게 총 발행량 지급
        // constructor() 함수 안에서는 실행시킨 사람이 곧 배포한 사람이다.
    }
 
    function balanceOf(address _owner) public view returns(uint256 balance){
    
        // 메타마스크에서 자동으로 연결된 계정을 balanceOf() 함수의 인자값으로 전달한다.
        return balances[_owner];
    }
 
    // transfer() 함수가 있어야만 계정 간 토큰 전송이 가능하다.
    function transfer(address _to, uint256 _value) public returns(bool success) {
 
        // require(true) : 실행
        // require(false) : 종료
        require(balances[msg.sender] >= _value);
        balances[msg.sender] -= _value;
        balances[_to] += _value;
        
        return true;
    }
}


 

  

 

 

 



