/*
 * Author: CastleBomber
 * Date: June 15th, 2023
 *
 * Tutorial: Build and Deploy a Modern Web 3.0 Blockchain App | Solidity, Smart Contracts, Crypto
 * Link: https://www.youtube.com/watch?v=Wn_Kb3MR_cU&ab_channel=JavaScriptMastery
 *
 *
 * Shortcuts:
 *  VS Code:
 * 	    c++ VS Code clang-formatter: shift+alt+f
 *      Go to definition - F12
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
