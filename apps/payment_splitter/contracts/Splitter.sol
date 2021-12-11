// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/finance/PaymentSplitter.sol";

contract Splitter is PaymentSplitter {
  // solhint-disable-next-line func-visibility, no-empty-blocks
  constructor(address[] memory _payees, uint256[] memory _shares) PaymentSplitter(_payees, _shares) payable {}
}
