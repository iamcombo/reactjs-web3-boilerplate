# Create React App with web3

The template is built with [Create React App](https://github.com/facebook/create-react-app), [Polkadot js API](https://polkadot.js.org/docs/api/) and [Ethers.js](https://docs.ethers.io/v5/). Familiarity with these tools
will be helpful, but the template strives to be self-explanatory.

## Miscellaneous

- Polkadot-js API and related crypto libraries depend on [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) that is only supported by modern browsers. To ensure that react-scripts properly transpile your webapp code, update the `package.json` file:

  ```json
  {
    "browserslist": {
      "production": [
        ">0.2%",
        "not ie <= 99",
        "not android <= 4.4.4",
        "not dead",
        "not op_mini all"
      ]
    }
  }
  ```