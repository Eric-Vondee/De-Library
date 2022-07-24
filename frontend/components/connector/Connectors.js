import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { CHAIN_DATA_LIST } from "web3modal";

export const DEFAULT_CHAIN_ID = 80001;

export const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      rpc: {
        80001: process.env.ALCHEMY_URL,
      },
      network: CHAIN_DATA_LIST[DEFAULT_CHAIN_ID].network,
      chainId: 80001,
    },
  },
  coinbasewallet: {
    package: CoinbaseWalletSDK, // Required
    options: {
      appName: "tuks", // Required

      rpc: process.env.ALCHEMY_URL, // Optional if `infuraId` is provided; otherwise it's required
      chainId: 80001, // Optional. It defaults to 1 if not provided
      darkMode: true, // Optional. Use dark theme, defaults to false
    },
  },
};
