pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

// remixd -s . --remix-ide https://remix.ethereum.org/
contract JusticeToken is ERC721Enumerable {
    constructor() ERC721("h662Justice", "HAS") {}

    struct Justice {
        string img;
        string caseNum;
        string caseName;
        string date;
        string sentence;
    }
    mapping(uint256 => Justice) public justiceTypes;

    // 이미지
    // 케이스 넘버
    // 사건 이름
    // 결과
    // 날짜

    function mintJusticeToken(
        string memory _img,
        string memory _caseNum,
        string memory _caseName,
        string memory _date,
        string memory _sentence
    ) public {
        // 거의 고정이다. justiceTokenId는 1부터 시작하는 배열의 인덱스 tokenOfOwnerByIndex라는 내장함수는 1부터 시작하는 배열의 인덱스를
        // return하므로 이런식으로 설계하자
        uint256 justiceTokenId = totalSupply() + 1;
        Justice memory tempJustice = Justice({
            img: _img,
            caseNum: _caseNum,
            caseName: _caseName,
            date: _date,
            sentence: _sentence
        });

        justiceTypes[justiceTokenId] = tempJustice;
        _mint(msg.sender, justiceTokenId);
    }

    function getAllUserNft(address account)
        public
        view
        returns (
            string[] memory,
            string[] memory,
            string[] memory,
            string[] memory,
            string[] memory
        )
    {
        uint256 tokenCount = balanceOf(account);

        // Initialize arrays
        string[] memory imgs = new string[](tokenCount);
        string[] memory caseNums = new string[](tokenCount);
        string[] memory caseNames = new string[](tokenCount);
        string[] memory dates = new string[](tokenCount);
        string[] memory sentences = new string[](tokenCount);

        for (uint256 i = 0; i < tokenCount; i++) {
            uint256 tokenId = tokenOfOwnerByIndex(account, i);
            Justice memory justice = justiceTypes[tokenId];

            // Add the data to the arrays
            imgs[i] = justice.img;
            caseNums[i] = justice.caseNum;
            caseNames[i] = justice.caseName;
            dates[i] = justice.date;
            sentences[i] = justice.sentence;
        }

        return (imgs, caseNums, caseNames, dates, sentences);
    }

    function getMsgSender() public view returns (address) {
        return msg.sender;
    }

    function isDuplication(address account,string memory caseNum) public view returns (bool) {
        bool res=false;
        uint256 tokenCount = balanceOf(account);
        for (uint256 i = 0; i < tokenCount; i++) {
            uint256 tokenId = tokenOfOwnerByIndex(account, i);
            Justice memory justice = justiceTypes[tokenId];
        bytes32 caseNumHash = keccak256(bytes(caseNum));
        bytes32 storedCaseNumHash = keccak256(bytes(justice.caseNum));
         if (caseNumHash==storedCaseNumHash){
             res=true;
         }
        }
        return res;
    }
}
