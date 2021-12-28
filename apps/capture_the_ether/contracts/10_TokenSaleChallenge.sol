pragma solidity ^0.4.21;

contract TokenSaleChallenge {
    mapping(address => uint256) public balanceOf;
    uint256 public constant PRICE_PER_TOKEN = 1 ether;

    // solium-disable-next-line constructor
    function TokenSaleChallenge() public payable {
        // solhint-disable-next-line reason-string
        require(msg.value == 1 ether);  // solium-disable-line error-reason
    }

    function isComplete() public view returns (bool) {
        return address(this).balance < 1 ether;
    }

    function buy(uint256 numTokens) public payable {
        // solhint-disable-next-line reason-string
        require(msg.value == numTokens * PRICE_PER_TOKEN);  // solium-disable-line error-reason

        balanceOf[msg.sender] += numTokens;
    }

    function sell(uint256 numTokens) public {
        // solhint-disable-next-line reason-string
        require(balanceOf[msg.sender] >= numTokens);  // solium-disable-line error-reason

        balanceOf[msg.sender] -= numTokens;
        msg.sender.transfer(numTokens * PRICE_PER_TOKEN);
    }
}
