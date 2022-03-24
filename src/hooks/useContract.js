import { ethers } from 'ethers';
import { useMemo } from 'react';

export function useContract(address, abi, providerOrSigner) {
  return useMemo(() => {
    try {
      if(!address || !abi || !providerOrSigner) return null;
      return new ethers.Contract(address, abi, providerOrSigner);
    } catch (error) {
      console.log('Failed to get contract', error);
      return null;
    }
  },[address, abi, providerOrSigner]);
}
