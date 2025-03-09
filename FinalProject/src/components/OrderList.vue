<script>
  export default {
    name: 'OrderPage',
    data() {
      return {
        // Dummy order data
        orders: [
          {
            products: [
              { name: 'Product 1', price: 29.99, quantity: 2 },
              { name: 'Product 2', price: 49.99, quantity: 1 },
            ],
          },
          {
            products: [
              { name: 'Product 3', price: 19.99, quantity: 3 },
              { name: 'Product 4', price: 99.99, quantity: 1 },
            ],
          },
        ],
      };
    },
    methods: {
      calculateOrderTotal(order) {
        return order.products.reduce((total, product) => {
          return total + product.price * product.quantity;
        }, 0).toFixed(2);
      },
    },
  };
  </script>
  
  <template>
    <div class="order-page">
      <h1 class="page-heading">Your Orders</h1>
  
   
      <div v-for="(order, index) in orders" :key="index" class="order">
        <h2 class="order-title">Order #{{ index + 1 }}</h2>
  
 
        <div v-for="(product, prodIndex) in order.products" :key="prodIndex" class="product-item">
          <div class="product-info">
            <h3>{{ product.name }}</h3>
            <p>Price: ${{ product.price }}</p>
            <p>Quantity: {{ product.quantity }}</p>
            <p>Total: ${{ (product.price * product.quantity).toFixed(2) }}</p>
          </div>
        </div>
  
        <hr />
        <p class="order-total">Order Total: ${{ calculateOrderTotal(order) }}</p>
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