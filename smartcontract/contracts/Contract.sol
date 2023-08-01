pragma solidity ^0.8.15;

contract Contract {
    uint256 public value;
    address public owner;

    constructor(uint256 _value) {
        value = _value;
        owner = msg.sender;
    }
}
