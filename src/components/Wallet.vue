<template>
  <div>
    <div
      class="wallet-container h-screen pt-6 fixed flex justify-center items-center inset-0 z-50"
    >
      <div
        class="anything_first_after max-w-lg relative m-auto rounded-xl shadow-lg bg-white overflow-y-auto"
        style="height: 95%"
      >
        <div class="relative ">
            <div class="sticky_header sticky px-5 py-2 top-0 bg-white">
            <div class="flex justify-end my-2">
              <button
                type="button"
                 @click="closeModal"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg p-1.5 ml-auto inline-flex items-center"
              >
                <svg class="w-5 h-5" fill="currentColor">
                  <path
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 
                      1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 
                      01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  ></path>
                </svg>
              </button>
            </div>

            <h3 class="my-2 text-2xl font-bold">Select a network</h3>
            <div class="flex justify-between items-center">
              <div class="mr-auto">
                <button @click="ethIsActive" :class="{ethBg : isActive}" class="Eth btn flex justify-around items-center mb-4 px-14 py-3">
                  <img src="../assets/eth.png" width="20" class="mr-1" height="20" alt="Eth symbol"/>
                  <span class="ml-1">Ethereum</span>
                </button>
              </div>
              <div class="ml-auto">
                <button @click="binanceIsActive" :class="{binanceBg : !isActive}" class="flex justify-around items-center mb-4 px-14 py-3 binance btn">
                  <img src="../assets/binance.png" width="20" class="mr-1" height="20" alt="binance symbol"/>
                  <span class="ml-1">Binance</span>
                </button>
              </div>
            </div>
            
            <h3 class="mt-2 text-2xl font-bold">Connect a wallet</h3>
          </div>

          <div class="px-5">
            <ethereum-pay v-if="isActive"></ethereum-pay>
            <binance-pay v-else></binance-pay>
          </div>
        </div> 
      </div>



    </div>
  </div>
</template>

<script>
import EthereumPay from "./Details/WalletDetails/EthereumPayment.vue"
import BinancePay from "./Details/WalletDetails/BinancePayment.vue"

export default {
  components: {
    EthereumPay,
    BinancePay
  },

  emits: ["close"],

  data() {
    return {
      isActive: true
    }
  },

  created() {
    // const that = this;
   
  },

  methods: {
    closeModal() {
      this.$emit("close")
    },

    ethIsActive() {
      this.isActive = true;
    },

    binanceIsActive() {
      this.isActive = false;
    },

  }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Lato:wght@100;200;300;400;500;600;800;900&display=swap);

.wallet-container {
  background-color: rgba(0, 0, 0, 0.85);
    font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;

}

.Eth {
  background-color: rgb(236, 239, 241);
  color: rgba(0, 0, 0, 0.9);
}

.Eth:hover {
  border: 1px solid rgb(93, 121, 232);
  /* background-color: red; */
}

.sticky_header {
  box-shadow: 0 2px 10px 0 #f2f2f2;
}

.ethBg {
  border: 1px solid rgb(93, 121, 232);

}

.binance {
  background-color: rgb(236, 239, 241);
}

.binance:hover {
  border: 1px solid rgb(241, 185, 12);
}

.binanceBg {
  border: 1px solid rgb(241, 185, 12);
}

.btn {
  width: 100%;
  border-radius: 8px;
  border:1px sold rgba(0,0,0,.85);
  font-size: 16px;
  font-weight: 500;

}


.anything_first_after::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.anything_first_after {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}


</style>
