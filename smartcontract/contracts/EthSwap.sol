// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";
// msg.sender는 send즉, 트랜잭션이 일어날 때만 갖고 올 수 있다.!
contract EthSwap {
    ERC20 public token;
    uint public rate = 100;

    // 배포한 ERC20의 CA를 인자값으로 받는다.
    constructor(ERC20 _token) {
        token = _token;
    }

    // EOA -> EthSwap (Contract) -> getToken() -> return JwToken CA
    function getToken() public view returns (address) {
        return address(token); // JwToken CA
    }

    // EOA -> EthSwap -> getSwapBalance() -> JwToken -> balanceOf()
    function getSwapBalance() public view returns (uint) {
        return token.balanceOf(msg.sender);
    }

    function getThisAddress() public view returns (address) {
        return address(this);
        // 여기서 this는 해당 컨트랙트를 의미 (this == EthSwap)
    }

    function getMsgSender() public view returns (address) {
        return msg.sender;
    }

    // ETH -> TOKEN buy
    function buyToken() public payable {
        uint256 tokenAmount = msg.value * rate;

        require(token._balanceOf() >= tokenAmount, "error [1]");
        token.buyToken(msg.sender, tokenAmount); // from: EthSwap CA, to: msg.sender
    }

    function getAmountToken() public payable returns (uint256) {
        uint256 tokenAmount = msg.value * rate;
        return tokenAmount;
    }

    // TOKEN -> ETH sell
    function sellToken(uint256 _amount) public payable {
        require(token.balanceOf(msg.sender) >= _amount);
        uint256 etherAmount = _amount / rate;

        require(address(this).balance >= etherAmount);
        token.transferFrom(msg.sender, address(this), _amount);
        payable(msg.sender).transfer(etherAmount);
    }
}
