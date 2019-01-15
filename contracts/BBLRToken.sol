pragma solidity 0.4.25;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Burnable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/SafeERC20.sol";

/**
 * @title Bubblr ERC20 token
 * @dev 
 */
contract BBLRToken is ERC20Detailed, ERC20Mintable, ERC20Burnable {
    using SafeERC20 for ERC20;
    using SafeMath for uint256;

    /*** TODO Testing (remove for production) ***/

    uint256 public constant OPENING_RATE = 3200;

    /*** State Variables ***/
    
    /*** Events ***/

    /* Initializes contract */
    constructor() ERC20Detailed("Bubblr Token", "BBLR", 18) public {
    }

    /* (called whenever someone tries to send ether to this contract) */
    function() external payable {
        require(msg.value != 0, ""); // Stop spamming, contract only calls, etc
        require(msg.sender != address(0), ""); // Prevent transfer to 0x0 address
        require(msg.sender != address(this), ""); // Prevent calls from this.transfer(this)
        // assert(address(this).balance >= msg.value, ""); // this.balance gets updated with msg.value before this function starts 
    }
}
