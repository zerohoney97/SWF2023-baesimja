pragma solidity ^0.8.0;

import "./JusticeToken.sol";

contract SaleNft {
    JusticeToken public mintJusticeTokenAddress;

    constructor(address _mintJusticeTokenAddress) {
        mintJusticeTokenAddress = JusticeToken(_mintJusticeTokenAddress);
    }

    mapping(uint256 => uint256) public justiceTokenPrice;

    uint256[] public onSaleJusticeTokenArray;

    // 판매 등록하는 함수, 첫번째인자는 무엇을 팔건지, 두번째 인자는 얼마인지.
    function setForSaleAnimalToken(uint256 _justiceTokenId, uint256 _price)
        public
    {
        // 해당하는 주인이 판매 등록을 해야함
        // 토큰 아이디값을 넣으면 주인이 누군지 출력
        address justiceTokenOwner = mintJusticeTokenAddress.ownerOf(
            _justiceTokenId
        );

        require(
            justiceTokenOwner == msg.sender,
            "seller and deployer are not same"
        );

        require(_price > 0, "zero");

        require(
            justiceTokenPrice[_justiceTokenId] == 0,
            "this token is alerady on sale"
        );

        require(
            mintJusticeTokenAddress.isApprovedForAll(
                justiceTokenOwner,
                address(this)
            ),
            "animalTokenOwner did not approve"
        );
        justiceTokenPrice[_justiceTokenId] = _price;
        onSaleJusticeTokenArray.push(_justiceTokenId);
    }

    function purchaseAnimalToken(uint256 _justiceTokenId) public payable {
        uint256 price = justiceTokenPrice[_justiceTokenId];
        address animalTokenOwner = mintJusticeTokenAddress.ownerOf(
            _justiceTokenId
        );
        require(price > 0, "Animal Token are not sale");
        require(price <= msg.value, "Caller sent lower than price");
        require(animalTokenOwner != msg.sender, "Caller is animal token owner");

        // 돈이 주인한테 감
        payable(animalTokenOwner).transfer(msg.value);
        mintJusticeTokenAddress.safeTransferFrom(
            animalTokenOwner,
            msg.sender,
            _justiceTokenId
        );
        justiceTokenPrice[_justiceTokenId] = 0;

        for (uint256 i = 0; i < onSaleJusticeTokenArray.length; i++) {
            if (justiceTokenPrice[onSaleJusticeTokenArray[i]] == 0) {
                onSaleJusticeTokenArray[i] ==
                    onSaleJusticeTokenArray[onSaleJusticeTokenArray.length - 1];
                onSaleJusticeTokenArray.pop();
            }
        }
    }




    function getOnSaleAnimalTokenArrayLength() public view returns (uint256) {
        return onSaleJusticeTokenArray.length;
    }
}
