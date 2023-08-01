pragma solidity ^0.8.15;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract JwtToken is ERC20 {
    string public _name = "JwtToken";
    string public _symbol = "JTK";
    uint256 public _totalSupply = 5000 * (10 ** decimals());

    constructor() ERC20(_name, _symbol) {
        // _mint() : 컨트랙트를 배포한 사람에게 토큰 발행
        _mint(address(this), _totalSupply);
    }
}

// (0) 0x9b4ac0c393490c539b7b2655abe550ef2f59c5f6473438e2dd5de22870252a82
// (1) 0xbcad4a12e86716e1755e9ea8477269d9521ed50362c354bff28b593a2cea7386
// (2) 0xf3d2c034e5a632e91fac0d2b8b991a6d8355f6163d33bfbfa60d365e4dcdce02
// (3) 0x0e7f40b7bbeca36993d1630c92b984bf55ae14028bbeaf6a7c904d8021ee1fef
// (4) 0xeb6f575041bf35b2ed92f49053ebb1fba1fd03fd7d6594b1da48dce4d44b5d64
// (5) 0x68d5c3ab7a4d34dcd5e467cc0edb00d5e87b7a854d3404f8b3771849c93bb940
// (6) 0x7420de026f3cd743cb47fbefa89bd7944579173a39765f0d3f8444a0b49824b7
// (7) 0x13578084ecb04d96717c3988cefb125167efb23f5b15938573347d7d7dcd0bca
// (8) 0x5d82859c0411bd6f68b1f5afb11bf423bea22a668d79a6836aa62f201fe38825
// (9) 0xb74d7b8fc3787552ae93feefb856da2c01451070879f13c5d87cc9671b2f7e2d
