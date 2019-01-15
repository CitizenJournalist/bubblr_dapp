pragma solidity 0.4.25;

/**
 * @title Bubblr ERC20 token interface
 * @dev 
 */
interface IBBLRToken {
  // function totalSupply() external view returns (uint256);

  function balanceOf(address who) external view returns (uint256);

  // function allowance(address owner, address spender)
  //   external view returns (uint256);

  // function safeTransfer(address to, uint256 value) external returns (bool);

  // function approve(address spender, uint256 value)
  //   external returns (bool);

  // function transferFrom(address from, address to, uint256 value)
  //   external returns (bool);

  // event Transfer(
  //   address indexed from,
  //   address indexed to,
  //   uint256 value
  // );

  // event Approval(
  //   address indexed owner,
  //   address indexed spender,
  //   uint256 value
  // );
}
