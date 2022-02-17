import { createRouter, createWebHistory } from "vue-router";
import Wallet from '@/components/Wallet.vue';
import CoinList from '../components/Details/CoinDetails/CoinList.vue';
import Exchanges from "@/components/Details/ExchangeDetails/TableHead.vue"

const Router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', redirect: '/coins'},
    {path: '/coins', component: CoinList},
    {path: '/Exchanges', component: Exchanges},
    {path: '/Wallet', component: Wallet}
  ]
})

export {Router}