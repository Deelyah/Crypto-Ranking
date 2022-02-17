<template>
  <div class="flex-col my-5">
    <button class="w-full portis Eth-btn">
      <div class="flex Eth-payment">
        <span class="mr-auto Eth-span">Portis By ShapeShift</span>
        <img class="ml-auto Eth-img" src="../../../assets/portis.svg" alt="Portis symbol"/>
      </div>
    </button>
    <button class="Meta-border w-full Eth-btn">
      <div class="flex Eth-payment">
        <a href="https://metamask.io/" class="Eth-span">Install Metamask</a>
        <img class="ml-auto Eth-img" src="../../../assets/metamask.svg" alt="Portis symbol"/>
      </div>
    </button>
    <button class="w-full wallet_connect Eth-btn">
      <div class="flex Eth-payment">
        <span class="Eth-span">WalletConnect</span>
        <img class="ml-auto Eth-img" src="../../../assets/walletConnect.svg" alt="Portis symbol"/>
      </div>
    </button>
    <button class="w-full torus Eth-btn">
      <div class="flex Eth-payment">
        <span class="Eth-span">Torus</span>
        <img class="ml-auto Eth-img" src="../../../assets/torusWallet.svg" alt="Portis symbol"/>
      </div>
    </button>
    <button class="w-full coin_base Eth-btn">
      <div class="flex Eth-payment">
        <span class="Eth-span">Coinbase Wallet</span>
        <img class="ml-auto Eth-img" src="../../../assets/coinbaseWallet.svg" alt="Portis symbol"/>
      </div>
    </button>
    <button class="w-full chain_wallet Eth-btn">
      <div class="flex Eth-payment">
        <span class="Eth-span">Binance Chain Wallet</span>
        <img class="ml-auto Eth-img" src="../../../assets/bscWallet.svg" alt="Portis symbol"/>
      </div>
    </button>
  </div>
</template>

<style scoped>
  .Eth-btn {
  margin: 10px 0px;
  border-radius: 8px;
  border: 1px solid rgb(236, 239, 241);
}

button {
  background: #f9f9f9;
}

.btn {
  width: 100%;
  border-radius: 8px;
  border:1px sold rgba(0,0,0,.85);
  font-size: 16px;
  font-weight: 500;

}

.Eth-payment {
  align-items: center;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 500;
  padding: 16px;
}

.Eth-span {
  font-size: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.9);
}

.Eth-img {
  width: 26px;
  height: 26px;
}

.portis:hover{
  border: 1px solid #4a6c9b;
}

.portis:hover > div > span {
  color: #4a6c9b;
}

.Meta-border:hover {
  border: 1px solid rgb(241, 185, 12);
}

.Meta-border:hover > div > a {
  color: rgb(241, 185, 12);
  
}

.wallet_connect:hover{
  border: 1px solid #4196fc
}

.wallet_connect:hover > div > span {
  color: #4196fc;
  
}

.torus:hover{
  border: 1px solid #3a95ff
}

.torus:hover > div > span {
  color: #3a95ff;
  
}

.coin_base:hover {
  border: 1px solid #315cf5;
}

.coin_base:hover > div > span{
  color: #315cf5;
}

.chain_wallet:hover {
  border: 1px solid #f1b90c;
}

.chain_wallet:hover > div > span {
  color: #f1b90c;
}
</style>