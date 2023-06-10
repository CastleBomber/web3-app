/**
 * Tutorial: https://www.youtube.com/watch?v=bcgFG0RoIPU&ab_channel=MuleSoftVideos
 */

var Web3 = require('web3')

var web3 = new Web3(
    new Web3.providers.HttpProviders("")
)

const address = "0x0"

web3.eth.getBalance(address).then((balance) => console.log(`balance=${balance} ETH`))