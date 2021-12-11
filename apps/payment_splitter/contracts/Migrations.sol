// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Migrations is Ownable {
  uint public lastCompletedMigration;

  function setCompleted(uint completed) public onlyOwner {
    lastCompletedMigration = completed;
  }
}
