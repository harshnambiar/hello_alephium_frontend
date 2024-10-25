import { CounterRalph } from './artifacts/ts/CounterRalph'
import { web3, NodeProvider, ONE_ALPH, DUST_AMOUNT } from '@alephium/web3'
import { getDefaultAlephiumWallet } from "@alephium/get-extension-wallet"

var wallet;

async function connectWallet() {
  // Returns the `window.alephiumProviders.alephium` object after user selects
  // the extension wallet.
  const windowAlephium = await getDefaultAlephiumWallet()
  // Authenticate user to the current dApp, return the selected account
  const selectedAccount = await windowAlephium?.enable()

  if (windowAlephium && selectedAccount) {
    console.log(selectedAccount);
    wallet = selectedAccount;
  }
  else {
    console.log('connection to alephium wallet failed');
  }
}
window.connectWallet = connectWallet;

async function get_counter(){
    const nodeUrl = 'https://wallet-v20.testnet.alephium.org'
    const nodeProvider = new NodeProvider(nodeUrl)
    web3.setCurrentNodeProvider(nodeProvider)

    const counterAddress = 'ysCdctbmaHwjBdJekxLTbjCzqAWwey2x1F34n9oTPG3c'
    const ctr = CounterRalph.at(counterAddress)
    const counterVal = await ctr.view.getCounter()
    console.log(counterVal)
}
window.get_counter = get_counter;


async function increment_counter(){
    const nodeUrl = 'https://wallet-v20.testnet.alephium.org'
    const nodeProvider = new NodeProvider(nodeUrl)
    web3.setCurrentNodeProvider(nodeProvider)

    const counterAddress = 'ysCdctbmaHwjBdJekxLTbjCzqAWwey2x1F34n9oTPG3c'
    const ctr = CounterRalph.at(counterAddress)
    console.log(wallet);
    try {
        const res = await ctr.transact.incrementCounter({
        signer: wallet,
        attoAlphAmount: ONE_ALPH / 10n + DUST_AMOUNT
      })
        console.log("counter incremented successfully!");
    }
    catch (err) {
        console.log(err);
        console.log("counter incrementation task failed successfully!");
    }
    
}
window.increment_counter = increment_counter;


 
