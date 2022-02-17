<template>
  <section>
    <div class="nav w-full sticky">
      <div>

        <div class="mobile-view">
          <div class="flex justify-between items-center">
              <router-link to="/">
              <img src="../../assets/search.png" width="15" height="15" class="search-icon"/>
              </router-link> 

              <router-link to="/coins">
                <img src="https://coincap.io/static/logos/black.svg" class="coin-logo">
              </router-link>   

              <router-link to="/">Swap</router-link>      
          </div>
        </div>
      

        <div class="large-screen flex justify-around items-center">
          <div class="flex">
            <router-link to="/coins">Coins</router-link>
            <router-link to="/Exchanges">Exchanges</router-link>
            <router-link to="/">Swap</router-link>
          </div>

          <div class="flex justify-around">
            <router-link to="/coins">
            <img src="https://coincap.io/static/logos/black.svg" class="coin-logo">
            </router-link>
          </div>

          <div class="flex items-center">
            <router-link to="/">
              <img src="../../assets/search.png" width="15" height="15" class="search-icon"/>
            </router-link>
            <router-link to="/">
              <img src="../../assets/settings.png" width="15" height="15" class="settings-icon"/>
            </router-link>
            <div class="wallet-btn">
              <global-btn @click="openModal">Connect Wallet</global-btn>
            </div>
          </div>
        </div>
      </div>
    </div>

      <wallet @close="closeModal"
      :dog="dog"
      v-if="showModal"></wallet>

  </section>
</template>


<script>
import GlobalBtn from '../GlobalBtn.vue'
import wallet from '../Wallet.vue'

export default {
  components: {
    GlobalBtn,
    wallet
  },

  data() {
    return {
      showModal: false,
    }
  },

  methods: {
    openModal() {
      this.showModal = true;
      this.$emit("click")
    },

    closeModal() {
      this.showModal = false;
    },

    
  }
}
</script>

<style scoped>

@media only screen and (min-device-width: 0px) {
  
  .mobile-view {
    display: block;
    padding: 0 12px;
  }

  .flex-item {
    width:100%
  }

  .large-screen {
    display: none;
  }

  .coin-logo {
    width: 80px;
  }

  a{
    text-decoration: none;
    padding: 16px 16px;
    font-family: lato;
  }

  a:hover{
    background-color: whitesmoke;
  }

}

@media screen and (min-width: 768px) {
  .large-screen {
    display: flex;
  }

  .mobile-view {
    display: none;
  }

  a, .wallet-btn{
    text-decoration: none;
    padding: 16px 16px;
    font-family: lato;
  }

  .global-btn {
    transition: transform 0.2s ease 0s;
    background: rgb(24, 198, 131);
    box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px;
    padding: .5rem;
    border-radius: 1rem;
    font-size: 14px;
    color: white;
  }
}

</style>