<template>
  <div class="flex-col my-5">
  
    <button class="w-full Meta-border Binance-btn">
      <div class="flex Binance-payment">
        <a class="Binance-span">Install Metamask</a>
        <img
          class="ml-auto Binance-img"
          src="../../../assets/metamask.svg"
          alt="Metamask symbol"
        />
      </div>
    </button>
    <button class="w-full wallet_connect Binance-btn">
      <div class="flex Binance-payment">
        <span class="Binance-span">WalletConnect</span>
        <img
          class="ml-auto Binance-img"
          src="../../../assets/walletConnect.svg"
          alt="WalletConnect symbol"
        />
      </div>
    </button>
    <button class="w-full torus Binance-btn">
      <div class="flex Binance-payment">
        <span class="Binance-span">Torus</span>
        <img
          class="ml-auto Binance-img"
          src="../../../assets/torusWallet.svg"
          alt="Torus symbol"
        />
      </div>
    </button>
    <button class="w-full chain_wallet Binance-btn">
      <div class="flex Binance-payment">
        <span class="mr-auto Binance-span">Binance Chain Wallet</span>
        <img
          class="ml-auto Binance-img"
          src="../../../assets/bscWallet.svg"
          alt="Chain Wallet symbol"
        />
      </div>
    </button>
  </div>
</template>

<style scoped>
.Binance-btn {
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

.Binance-payment {
  align-items: center;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 500;
  padding: 16px;
}

.Binance-span {
  font-size: 16px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.9);
}

.Binance-img {
  width: 26px;
  height: 26px;
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

.chain_wallet:hover {
  border: 1px solid #f1b90c;
}

.chain_wallet:hover > div > span {
  color: #f1b90c;
}
</style>