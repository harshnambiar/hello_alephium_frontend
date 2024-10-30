# hello_alephium_frontend  
The frontend app for what was previously done in the [hello_alephium](https://github.com/harshnambiar/hello_alephium) demo. Hence the point numbering starts from 35. Please make sure you have completed those steps before you get to this "fun" part

Includes a step by step guide to access the deployed CounterRalph contract on the Alephium Testnet from your vanilla JS frontend.

35. Make sure your hello_alephium_frontend has an src inside it as shown here, with the artifacts folder inside it as you obtained previously
36. Copy the package.json and do an npm install to install the dependencies
37. Make sure the webpack.config.js file is present in the root folder as shown
38. Do an npm run build
39. Do an npm run start if the build is fine
40. Go to localhost:3000 and connect to your Alephium extension wallet
41. Call the Get Counter function and check the console message. You should see the value returned
42. Call the Increment Counter function and sign the transaction. Wait for a minute or so
43. Call the Get Counter function again and you should see that the value now is 1 more than the previous call (if it's the same, wait a few seconds more since sometimes the transactions can take longer on the testnet)
44. Call the Reset Counter function and sign the transaction. Wait for the changes to reflect
45. Repeat step 43. The counter should be 0 again.

This completes the demo. By completing steps 35 to 45, you have learnt:
1. How to link the Alephium wallet with the frontend dapp
2. How to call view methods from the Alephium Smart Contract
3. How to transact in case of setter methods from the Alephium Smart Contract
4. How to use the Alephium Signer as a means to sign transactions
