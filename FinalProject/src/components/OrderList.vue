<script>
import { useOrderStore } from '../pinia/orderPinia.js';
import { computed } from 'vue';
import { getOrder } from '../Api.js';
 
export default {
  name: 'OrderPage',
  // setup() {
  //   const orderStore = useOrderStore();
  //   console.log('Order Store:', orderStore.orderItems);
  //   const orders = orderStore.orderItems;
  //   console.log("order items", orders.items);
 
  //   const calculateOrderTotal = (order) => {
  //     let total = 0;
  //     order.items.forEach(item => {
  //       total += item.productPrice * item.quantity;
  //     });
  //     return total.toFixed(2);
  //   };
 
    
  //   return { orderStore, calculateOrderTotal };
  // },
 
  data() {
    return {
      orders : [],
      calculateOrderTotal : 0,
    }
  },
  async mounted() {
    try {
      const userDetails = JSON.parse(localStorage.getItem('userDetails'));
      console.log(userDetails);
      
      this.orders = await getOrder(userDetails.userId, userDetails.jwtToken);
      console.log(this.orders);
      
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  },
};
</script>
 
<template>
  <div class="order-page">
    <h1 class="page-heading">Your Orders</h1>
 
    <div v-for="order in orders" class="order" :key="order.id">
      <p class="order-title">Order ID: <span class="idorder">{{ order.id }}</span> </p>
 
      <!-- Product Items -->
      <div class="product-items">
        <div v-for="product in order.orderItemsResponseDtoList" :key="product.name" class="product-item">
          <div class="product-info">
            <h3 class="produtname">{{ product.name }}</h3>
            <br>
            <p class="orderitems">Price: <span class="productlist">${{ product.price }}</span></p>
            <p class="orderitems">Quantity:  <span class="productlist"> {{ product.quantity }}</span></p>
            <!-- <p class="orderitems">Merchant Name:  <span class="productlist"> {{ product.merchantName }}</span></p> -->
            <p class="orderitems">Total: <span class="productlist">${{ (product.price * product.quantity) }}</span></p>
          </div>
        </div>
      </div>
 
      <hr />
      <p class="order-total">Order Total: ${{ (order.totalPrice) }}</p>
    </div>
  </div>
</template>
 
<style >
.order-page {
  font-family: 'Arial', sans-serif;
  padding: 20px;
  
}
 
.page-heading {
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 20px;
  color: rgb(207, 207, 55);
}
 
.order {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
}
 
.order-title {
  /* font-size: 1.8em; */
  margin-bottom: 10px;
  color: rgb(253, 252, 252);
}
.idorder{
  color: rgb(148, 134, 2);
}
 
.produtname {
  color: #c8941b;
}
 
.orderitems {
  margin-right: 2px;
  color: rgb(7, 126, 169);
}
 
.productlist {
  color: #000000;
  font-weight: bold;
}
 
.product-items {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
 
.product-item {
  width: 100%;
  max-width: 1000px;
  box-sizing: border-box;
  background-color: #f8f8f8;
  padding: 30px;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
 
.product-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
}
 
.product-info {
  font-size: 1.2em;
  color: brown;
}
 
.product-info p {
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
}
 
hr {
  margin-top: 20px;
}
 
.order-total {
  font-size: 1.4em;
  font-weight: bold;
  margin-top: 10px;
  text-align: right;
}
 
 
@media (max-width: 600px) {
  .product-item {
    width: 90%;
  }
}
 
@media (max-width: 768px) {
  .product-item {
    width: 80%;
  }
}
 
 
</style>