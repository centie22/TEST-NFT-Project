// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol";
import "@openzeppelin/contracts/access/AccessControlEnumerable.sol";
import "@openzeppelin/contracts/utils/Context.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract VeeNFT is
Context,
AccessControlEnumerable,
ERC721Enumerable,
ERC721Burnable,
ERC721Pausable
{
using Counters for Counters.Counter;
bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
Counters.Counter private _tokenIdTracker;
string private _baseTokenURI;

constructor(
string memory name,
string memory symbol,
string memory baseTokenURI
) ERC721(name, symbol) {
_baseTokenURI = baseTokenURI;
_setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
_setupRole(MINTER_ROLE, _msgSender());
_setupRole(PAUSER_ROLE, _msgSender());
}
function _baseURI() internal view virtual override returns (string memory) {
return _baseTokenURI;
}

function mint(address to) public virtual {
require(hasRole(MINTER_ROLE, _msgSender()), "ERC721PresetMinterPauserAutoId: must have minter role to mint");

_mint(to, _tokenIdTracker.current());
_tokenIdTracker.increment();
}

function pause() public virtual {
require(hasRole(PAUSER_ROLE, _msgSender()), "ERC721PresetMinterPauserAutoId: must have pauser role to pause");
_pause();
}

function unpause() public virtual {
require(hasRole(PAUSER_ROLE, _msgSender()), "ERC721PresetMinterPauserAutoId: must have pauser role to unpause");
_unpause();
}
function _beforeTokenTransfer(
address from,
address to,
uint256 tokenId
) internal virtual override(ERC721, ERC721Enumerable, ERC721Pausable) {
super._beforeTokenTransfer(from, to, tokenId);
}

function supportsInterface(bytes4 interfaceId)
public
view
virtual
override(AccessControlEnumerable, ERC721, ERC721Enumerable)
returns (bool)
{
return super.supportsInterface(interfaceId);
}
}