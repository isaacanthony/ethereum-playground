pragma solidity ^0.5.0;

contract Dice {

  function roll(uint n) public pure returns (uint) {
    require(n >= 1 && n <= 6);
    return n;
  }

}
