import { createMemoryHistory, createRouter,createWebHashHistory } from 'vue-router'
 
import Home from './components/Home.vue'
import Cart from './components/Cart.vue'
import ThankYouPage from './components/ThankYouPage.vue'
import Profile from './components/Profile.vue'
import ProductList from './components/ProductList.vue'
import ProductSearchList from './components/ProductSearchList.vue'
import ProductDescription from './components/ProductDescription.vue'
const routes = [
 
 
  {path:'/',component :ProductList},
  {path:'/Cart',component: Cart},
  {path:'/Thankyou', component:ThankYouPage},
  {path:'/Profile',component:Profile},
  {path:'/ProductSearchList', component:ProductSearchList},
  {path: '/product-description/:productId', component: ProductDescription}
 
]
 
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router
 