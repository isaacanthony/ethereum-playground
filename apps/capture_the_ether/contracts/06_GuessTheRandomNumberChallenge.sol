pragma solidity ^0.4.21;

contract GuessTheRandomNumberChallenge {
    uint8 public answer;

    // solium-disable-next-line constructor
    function GuessTheRandomNumberChallenge() public payable {
        // solhint-disable-next-line reason-string
        require(msg.value == 1 ether);  // solium-disable-line error-reason
        // solhint-disable-next-line not-rely-on-block-hash, not-rely-on-time
        answer = uint8(keccak256(block.blockhash(block.number - 1), now));  // solium-disable-line security/no-block-members
    }

    function isComplete() public view returns (bool) {
        return address(this).balance == 0;
    }

    function guess(uint8 n) public payable {
        // solhint-disable-next-line reason-string
        require(msg.value == 1 ether);  // solium-disable-line error-reason

        if (n == answer) {
            msg.sender.transfer(2 ether);
        }
    }
}
