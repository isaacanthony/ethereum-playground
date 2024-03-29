pragma solidity ^0.4.21;

contract GuessTheSecretNumberChallenge {
    bytes32 public answerHash = 0xdb81b4d58595fbbbb592d3661a34cdca14d7ab379441400cbfa1b78bc447c365;

    // solium-disable-next-line constructor
    function GuessTheSecretNumberChallenge() public payable {
        // solhint-disable-next-line reason-string
        require(msg.value == 1 ether);  // solium-disable-line error-reason
    }

    function isComplete() public view returns (bool) {
        return address(this).balance == 0;
    }

    function guess(uint8 n) public payable {
        // solhint-disable-next-line reason-string
        require(msg.value == 1 ether);  // solium-disable-line error-reason

        if (keccak256(n) == answerHash) {
            msg.sender.transfer(2 ether);
        }
    }
}
