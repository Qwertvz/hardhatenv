import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import dotenv from "dotenv"

dotenv.config({ debug: true })
const url = String(process.env.GETHNODE_ADDRESS) +
            String(process.env.HTTP_GETHNODE_PORT)
console.log("[HardhatConfig] >> Connection endpoint: " + url)

const config: HardhatUserConfig = {
    solidity: "0.8.20",

    paths: {
        sources: "./source/contracts",
        tests: "./source/test",
        cache: "./data/cache",
        artifacts: "./data/artifacts"
    },
    networks: {
        localnet: { url: url }
    },
    mocha: { timeout: 80000 }
}

export default config
