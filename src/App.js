import { ethers }  from 'ethers';
import { useEffect } from 'react';
import { useContract } from './hooks/useContract';

function App() {
  const tokenABI = ["function balanceOf(address) view returns (uint)"];
  const provider = ethers.getDefaultProvider(
    "https://data-seed-prebsc-1-s1.binance.org:8545/"
  );

  const contract = useContract(
    '0x337610d27c682E347C9cD60BD4b3b107C9d34dDd',
    tokenABI,
    provider
  );

  async function getBalance() {
    const data = await contract.balanceOf('0xE0e5C149B9CdF9d2279b6ddFdA9Bc0A4a975285c');
    console.log(data);
  }

  useEffect(() => {
    getBalance();
  },[])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
