<script>
import { useOrderStore } from '../pinia/orderPinia.js';
import { computed } from 'vue';

export default {
  name: 'OrderPage',
  setup() {
    const orderStore = useOrderStore();
    
    console.log('Order Store:', orderStore.orderItems);

    const orders = orderStore.orderItems;

    console.log(orders.items)

    return { orderStore };
  }
  };
  </script>
  
  <template>
    <div class="order-page">
      <h1 class="page-heading">Your Orders</h1>

      <div v-for="order in orderStore.orderItems" class="order">
        <h2 class="order-title">Order ID: {{ order.orderId }}</h2>

        <div v-for="product in order.items" :key="product.productName" class="product-item">
          <div class="product-info">
            <h3>{{ product.productName }}</h3>
            <p>Price: ${{ product.productPrice }}</p>
            <p>Quantity: {{ product.quantity }}</p>
            <p>Merchant Name: {{ product.merchantName }}</p>
            <p>Total: ${{ (product.productPrice * product.quantity).toFixed(2) }}</p>
          </div>
        </div>

        <hr />
        <!-- <p class="order-total">Order Total: ${{ calculateOrderTotal(order) }}</p> -->
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
  }
  
  .order {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 20px;
  }
  
  .order-title {
    font-size: 1.8em;
    margin-bottom: 10px;
  }
  
  .product-item {
    margin-bottom: 15px;
  }
  
  .product-info {
    font-size: 1.2em;
  }
  
  .product-info p {
    margin: 5px 0;
  }
  
  .order-total {
    font-size: 1.4em;
    font-weight: bold;
    margin-top: 10px;
    text-align: right;
  }
  
  hr {
    margin-top: 20px;
  }
  </style>