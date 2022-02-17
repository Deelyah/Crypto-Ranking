<template>
<div class="relative sm:top-0 sm:mx-0 md:top-ve md:mx-4 ">
  <div class="sm:px-0 md:px-8">
    <div class="w-full">
      <table class="w-full">
        <tr>
          <th class="hidden md:table-cell text-left">Rank</th>
          <th class="text-left" colspan="2">Name</th>
          <th class="text-right">Trading Pairs</th>
          <!-- <th class="hidden lg:table-cell text-right">VWAP</th>
          <th class="hidden lg:table-cell text-right">Supply</th>
          <th class="hidden md:table-cell text-right">Market cap</th>
          <th class="hidden md:table-cell text-right">Volume(24Hr)</th>
          <th class="text-right hidden md:table-cell">Change(24Hr)</th>
          <th class="text-right md:hidden lg:hidden">(24Hr)</th> -->

        </tr>
        
        <table-body></table-body>
      
      </table>
    </div>
  </div>
</div>
</template>


<script>
import TableBody from './TableBody.vue'

export default {
  components: {
    TableBody
  },

  methods: {
    despatchExchanges() {
      this.$store.dispatch("fetchExchangeDetails")
    }
  },

  created() {
    this.despatchExchanges()
  }
}
</script>


<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Lato:wght@100;200;300;400;500;600;800;900&display=swap);

table {
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px;
}

tr {
  border: 1px solid rgba(34,36,38,.15);
}

tr:hover {
  background-color: rgba(235, 232, 232, 0.966);
}

th{
  padding: 8px 12px;
  font-weight: 400;
  background-color: rgb(250, 250, 250);
}

.coins {
  position: relative;
  top: -150px;
}


  
</style>