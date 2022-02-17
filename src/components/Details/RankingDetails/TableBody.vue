<template>
  <tr
    v-for="(coinData) in checkStore"
    :key="coinData.id"
    class="w-full"
  >
    <td class="hidden md:table-cell">{{ coinData.rank }}</td>

    <td colspan="2" class="text-left">{{ coinData.name }}</td>

    <td class="text-right">${{ roundUp(coinData.priceUsd) }}</td>

    <td class="hidden md:table-cell text-right"> ${{convertToBillion(coinData.marketCapUsd)}}b</td>

    <td class="hidden md:table-cell text-right">${{convertToBillion(coinData.volumeUsd24Hr)}}b</td>

    <td class="text-right">{{roundUp(coinData.changePercent24Hr)}}%</td>
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
      return this.$store.getters.returnAssets;
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
