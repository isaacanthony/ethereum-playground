pragma solidity ^0.4.21;

contract GuessTheNumberChallenge {
    uint8 public answer = 42;

    // solium-disable-next-line constructor
    function GuessTheNumberChallenge() public payable {
        // solhint-disable-next-line reason-string
        require(msg.value == 1 ether);  // solium-disable-line error-reason
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
