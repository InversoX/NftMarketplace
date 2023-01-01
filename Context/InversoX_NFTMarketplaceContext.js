import React, { useState, useEffect, useContext } from 'react';
import Web3 from 'web3';
import { ethers } from 'ethers';
import Router from 'next/router';
import axios from 'axios';
import{ create as ipfsHttpClient } from "ipfs-http-client";

//INTERNAL IMPORT
import {InversoX_NFTMarketplaceAddress ,InversoX_NFTMarketplaceABI} from "../context/constants";

//--- FETCHING SMART CONTRACT
const fetchContract = (signerOrProvider)=> 
new ethers.Contract(
    InversoX_NFTMarketplaceAddress,
    InversoX_NFTMarketplaceABI,
    signerOrProvider
);

//---connecting with the smart contract
const connectingWithSmartcontract = async()=> {
    try {
      const web3 = new Web3();
      const connection = await web3.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner()
      const contract = fetchContract(signer);
      return contract;
    } catch (error) {
      console.log("Something went wrong while connecting with contract");  
    }
}


export const InversoX_NFTMarketplaceContext = React.createContext();

export const InversoX_NFTMarketplaceProvider = ({children}) => {
    const titleData = "";

    const checkContract = async()=>{
        const contract = await connectingWithSmartcontract();
    };

    return(
        <InversoX_NFTMarketplaceContext.Provider 
            value={{
                checkContract,
                titleData,
            }}
            >
            {children}
        </InversoX_NFTMarketplaceContext.Provider>
    );
};