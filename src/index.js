import { CounterRalph } from './artifacts/ts/CounterRalph'
import { web3, NodeProvider, ONE_ALPH, DUST_AMOUNT, ALPH } from '@alephium/web3'
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
    wallet = windowAlephium;
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

    const counterAddress = '27jC7SfSAWwzVZpBcA4bZ9qrRggvVvSKACfnN9QHeS29Q'
    const ctr = CounterRalph.at(counterAddress)
    const counterVal = await ctr.view.getCounter()
    console.log(counterVal)
}
window.get_counter = get_counter;

async function get_last_caller(){
    const nodeUrl = 'https://wallet-v20.testnet.alephium.org'
    const nodeProvider = new NodeProvider(nodeUrl)
    web3.setCurrentNodeProvider(nodeProvider)

    const counterAddress = '27jC7SfSAWwzVZpBcA4bZ9qrRggvVvSKACfnN9QHeS29Q'
    const ctr = CounterRalph.at(counterAddress)
    const counterVal = await ctr.view.getLastCaller()
    console.log(counterVal)
}
window.get_last_caller = get_last_caller;

async function get_timeline(){
    const nodeUrl = 'https://wallet-v20.testnet.alephium.org'
    const nodeProvider = new NodeProvider(nodeUrl)
    web3.setCurrentNodeProvider(nodeProvider)

    const counterAddress = '27jC7SfSAWwzVZpBcA4bZ9qrRggvVvSKACfnN9QHeS29Q'
    const ctr = CounterRalph.at(counterAddress)
    const counterVal = await ctr.view.getLastFiveChanges()
    console.log(counterVal)
}
window.get_timeline = get_timeline;


async function increment_counter(){
    const nodeUrl = 'https://wallet-v20.testnet.alephium.org'
    const nodeProvider = new NodeProvider(nodeUrl)
    web3.setCurrentNodeProvider(nodeProvider)

    const counterAddress = '27jC7SfSAWwzVZpBcA4bZ9qrRggvVvSKACfnN9QHeS29Q'
    const ctr = CounterRalph.at(counterAddress)
    console.log(wallet);
    try {
        const res = await ctr.transact.incrementCounter({
        signer: wallet,
        attoAlphAmount: DUST_AMOUNT * 100n
        //this amount is 0.10 ALPH, needed to insert into one mapping in Ralph. if there were more mappings, it 
        //would have been a multiple of this
      })
        console.log("counter incremented successfully!");
    }
    catch (err) {
        console.log(err);
        console.log("counter incrementation task failed successfully!");
    }
    
}
window.increment_counter = increment_counter;


async function reset_counter(){
    const nodeUrl = 'https://wallet-v20.testnet.alephium.org'
    const nodeProvider = new NodeProvider(nodeUrl)
    web3.setCurrentNodeProvider(nodeProvider)

    const counterAddress = '27jC7SfSAWwzVZpBcA4bZ9qrRggvVvSKACfnN9QHeS29Q'
    const ctr = CounterRalph.at(counterAddress)
    try {
        const res = await ctr.transact.resetCounter({
        signer: wallet,
        attoAlphAmount: ONE_ALPH / 10n + DUST_AMOUNT
        // the resetCounter function in the smart contract takes 0.10 ALPH to reset, hence
        // this amount has to be mentioned here for the transaction to go through
      })
        console.log("counter reset successfully!");
    }
    catch (err) {
        console.log(err);
        console.log("counter reset task failed successfully!");
    }
    
}
window.reset_counter = reset_counter;
 
