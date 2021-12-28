pragma solidity ^0.4.21;

contract GuessTheNewNumberChallenge {
    // solium-disable-next-line constructor
    function GuessTheNewNumberChallenge() public payable {
        // solhint-disable-next-line reason-string
        require(msg.value == 1 ether);  // solium-disable-line error-reason
    }

    function isComplete() public view returns (bool) {
        return address(this).balance == 0;
    }

    function guess(uint8 n) public payable {
        // solhint-disable-next-line reason-string
        require(msg.value == 1 ether);  // solium-disable-line error-reason
        // solhint-disable-next-line not-rely-on-block-hash, not-rely-on-time
        uint8 answer = uint8(keccak256(block.blockhash(block.number - 1), now));  // solium-disable-line security/no-block-members

        if (n == answer) {
            msg.sender.transfer(2 ether);
        }
    }
}
