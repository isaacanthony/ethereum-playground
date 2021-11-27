pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract Migrations is Ownable {
  uint public last_completed_migration;

  function setCompleted(uint completed) public onlyOwner {
    last_completed_migration = completed;
  }
}
