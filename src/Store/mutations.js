
export default {
  pushAssets(state, payload) {
    state.Assets.push(...payload)
  },

  pushExchanges(state, payload) {
    state.Exchanges.push(...payload)
  },

  pushMarketData(state, payload) {
    state.MarketData.push(...payload)
  }
}