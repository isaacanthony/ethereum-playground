// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./Child.sol";

contract Factory is Ownable {
  Child[] private children;

  function addChild() public onlyOwner {
    Child child = new Child();
    children.push(child);
  }

  function numChildren() public view returns(uint) {
    return children.length;
  }

  function getChild(uint _index) public view returns (Child) {
    require(_index >= 0, "Invalid index");
    require(_index < children.length, "Invalid index");
    return children[_index];
  }
}
