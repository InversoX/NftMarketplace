
const hre = require("hardhat");

async function main() {
 
  const InversoX_NFTMarketplace = await hre.ethers.getContractFactory("InversoX_NFTMarketplace");
  const inversoX_NFTMarketplace = await InversoX_NFTMarketplace.deploy();

  await inversoX_NFTMarketplace.deployed();

  console.log(
    "deployed contract Address ${InversoX_NFTMarketplace.address}"
    );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
