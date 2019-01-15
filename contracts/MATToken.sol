pragma solidity 0.4.25;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
import "openzeppelin-solidity/contracts/token/ERC721/ERC721Mintable.sol";
import "./IBBLRToken.sol";

/**
 * @title Bubblr ERC721 token
 * @dev 
 */
contract MATToken is ERC721Full, ERC721Mintable {
    using SafeMath for uint256;

    /*** TODO Testing (remove for production) ***/

    uint256 public constant OPENING_RATE = 6400;
    function test(uint256 asset) external returns (uint256) {
        return _valueToken.balanceOf(msg.sender);
    }

    /*** State Variables ***/

    IBBLRToken private _valueToken; // Token to use for value transfer
    
    mapping(uint256 => mapping (address => string)) private _facts; // Staked facts 
    function fact(uint256 asset, address owner) external view returns (string) {
        return _facts[asset][owner];
    }

    mapping(uint256 => bool) private _verified; // Is asset in varified state 
    function verified(uint256 asset) external view returns (bool) {
        return _verified[asset];
    }

    mapping(uint256 => bool) private _published; // Is asset in published state 
    function published(uint256 asset) external view returns (bool) {
        return _published[asset];
    }
    
    /*** Events ***/

    /* Initializes contract */
    constructor(address valueToken) ERC721Full("MATToken", "MAT") public {
        _valueToken = IBBLRToken(valueToken);
    }

    // To mint, call mintWithTokenURI(to, tokenId, tokenURI) // TODO add or get timestamp when minted for timeout
    // to read asset, call tokenURI(tokenId)

    /* Support unvarified content */
    function support(uint256 asset) external {

    }

    /* Attach a positive or negative fact to an asset with a BBLR stake */
    function factCheck(uint256 asset, uint256 stake, bool positive, string URI) external {
        

    }
    
    /* Boost an owned asset by offering BBLR stake */
    function boost(uint256 asset, uint256 stake) external {
        require(_isApprovedOrOwner(msg.sender, asset), ""); // Only owner or approved operator of the asset
        

    }
    
    /* Publish and unpublish asset content on the Bubblr consumer app */
    function publish(uint256 asset) external {
        require(_isApprovedOrOwner(msg.sender, asset), ""); // Only owner or approved operator of the asset
        _published[asset] = true;
    }
    function unpublish(uint256 asset) external {
        require(_isApprovedOrOwner(msg.sender, asset), ""); // Only owner or approved operator of the asset
        delete _published[asset];
    }
    
    /* (called whenever someone tries to send ether to this contract) */
    function() external payable {
        require(msg.value != 0, ""); // Stop spamming, contract only calls, etc
        require(msg.sender != address(0), ""); // Prevent transfer to 0x0 address
        require(msg.sender != address(this), ""); // Prevent calls from this.transfer(this)
        // assert(address(this).balance >= msg.value, ""); // this.balance gets updated with msg.value before this function starts 
    }
}
