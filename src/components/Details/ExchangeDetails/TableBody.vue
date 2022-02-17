<template>
  <tr
    v-for="(exchange) in checkStore"
    :key="exchange.id"
    class="w-full"
  >
    <td class="hidden md:table-cell">{{ exchange.rank }}</td>

    <td colspan="2" class="text-left">{{ exchange.name }}</td>

    <td class="text-right">${{ roundUp(exchange.tradingPairs) }}</td>

    <!-- <td class="hidden md:table-cell text-right"> ${{convertToBillion(exchange.marketCapUsd)}}b</td>

    <td class="hidden md:table-cell text-right">${{convertToBillion(exchange.volumeUsd24Hr)}}b</td>

    <td class="text-right">{{roundUp(exchange.changePercent24Hr)}}%</td> -->
  </tr>
</template>

<script>
export default {
  methods: {
    roundUp(value) {
      return Math.round(value * 100) / 100;
    },
    convertToBillion(value) {
      let roundValue = Math.round(value);
      let quotient = roundValue/1000000000
      return quotient.toFixed(2)
    },
    convertToMillion(value) {
      let roundValue = Math.round(value);
      let quotient = roundValue/1000000
      return quotient.toFixed(2)
    }
  },

  computed: {
    checkStore() {
      return this.$store.getters.returnExchanges;
    },
  },
};
</script>

<style scoped>
  tr {
    border: 1px solid rgba(34,36,38,.15);
  }

  td {
    padding: 12px;
  }

  tr:hover {
    background-color: rgba(235, 232, 232, 0.966);
  }
</style>
