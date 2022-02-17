import axios from "axios"

export default {

  // despatched in rankingDetails/tableHead
  async fetchAssetDetails(context) {

    try {
      const response = await axios.get("https://api.coincap.io/v2/assets")
      const result = response.data.data
      context.commit("pushAssets", result)
    } catch (error) {
      console.log(error)
    }
  },


// despatched in exchangeDetails/tablehead
  async fetchExchangeDetails(context) {
    try {
      const response = await axios.get("https://api.coincap.io/v2/exchanges")
      const result = response.data.data
      context.commit("pushExchanges", result)
    } catch(error) {
      console.log(error)
    }
  },

  async fetchMarketDetails(context) {
    try {
      const response = await axios.get("htpps://api.coincap.io/v2/markets")
      const result = response.data.data
      console.log(result)
      context.commit("pushMarketData", result)
    } catch(error) {
      console.log(error)
    }
      
  }
    
}