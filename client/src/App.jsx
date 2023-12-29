/*
 * Author: CastleBomber
 * Date: June 15th, 2023
 *
 * Tutorial: Build and Deploy a Modern Web 3.0 Blockchain App | Solidity, Smart Contracts, Crypto
 * Link: https://www.youtube.com/watch?v=Wn_Kb3MR_cU&ab_channel=JavaScriptMastery
 *
 * To run:
 * "npm run dev" from client folder
 * uses vite on web browser, http://127.0.0.1:5173/
 *
 * Code:
 * npm install --save-dev hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
 * npx hardhat run scripts/deploy.js --network sepolia
 *
 * @nomicfoundation/harhat-toolbox giving problems
 *
 * Notes:
 * trouble shooting - deleting node_modules folder, package-lock.json, then edit package.json to appropriate versions
 *
 * when sending crypto, login to your account. if you need the address from another account, grab it,
 * but go back to the original account and refresh the page. Your specific address should be visible
 * on the credit card image
 *
 * Transactions.jsx is having troubles displaying gifs dynamically, left it with dummy data
 *
 * Shortcuts:
 *  VS Code:
 * 	    c++ VS Code clang-formatter: shift+alt+f
 *      Go to definition - F12
 *      Command pallete - shtift+cmd+p
 *
 *  Visual Studio:
 *      code folding: select region, ctrl+m+m
 *      full screen: shift+alt+enter
 *      solution explorer: ctrl+alt+L
 *      (start debugger to access watchlist)
 *      watchlist: ctrl+alt+W,1
 *      add to watchlist: shift+F9
 *		  terminal: ctrl + `
 */

import { Navbar, Welcome, Footer, Services, Transactions } from "./components";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
