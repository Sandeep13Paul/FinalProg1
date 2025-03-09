<script>
  import { getProducts } from '../Api.js';
  
  export default {
    data() {
      return {
        cartItems: [],
      };
    },
    created() {
      this.addProductToCart();
    },
    methods: {
      async addProductToCart() {
        try {
          const { productId, quantity } = this.$route.query;
         
          const allProducts = await getProducts();
          const product = allProducts.find((product) => product.id === parseInt(productId));
  
          if (product) {
            
            const existingItem = this.cartItems.find((item) => item.id === product.id);
            if (existingItem) {
              
              existingItem.quantity += parseInt(quantity);
            } else {
             
              this.cartItems.push({ ...product, quantity: parseInt(quantity) });
            }
          }
        } catch (error) {
          console.error('Error fetching product details:', error);
        }
      },
      increaseQuantity(item) {
        item.quantity++;
      },
      decreaseQuantity(item) {
        if (item.quantity > 1) {
          item.quantity--;
        }
      },
      removeItem(itemId) {
        this.cartItems = this.cartItems.filter((item) => item.id !== itemId);
      },
      getTotalPrice() {
        return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      },
      checkoutButton() {
        this.$router.push('/ThankYou');
      },
    },
  };
  </script>
 
<template>
    <div class="cart-container">
      <h1>Your New Cart</h1>
      <div v-if="cartItems.length > 0">
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <img :src="item.image" alt="Product Image" class="cart-item-image" />
          <div class="cart-item-details">
            <h2>{{ item.name }}</h2>
            <p>{{ item.description }}</p>
            <p>Price: ${{ item.price }}</p>
            <p>Quantity: {{ item.quantity }}</p>
            <button @click="increaseQuantity(item)">+</button>
            <button @click="decreaseQuantity(item)">-</button>
            <button @click="removeItem(item.id)">Remove</button>
          </div>
        </div>
        <div class="total-price">
          <h3>Total Price: ${{ getTotalPrice() }}</h3>
        </div>
        <button @click="checkoutButton">Proceed to Checkout</button>
      </div>
      <div v-else>
        <p>Your cart is empty. Add some items to your cart!</p>
      </div>
    </div>
  </template>
  
  <style >
  .cart-container {
    background-color: #ffffff;
    padding: 20px;
    font-family: 'Arial', sans-serif;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    color: #e64833;
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .cart-item {
    display: flex;
    margin-bottom: 20px;
    border: 1px solid #874f41;
    padding: 10px;
    border-radius: 8px;
    background-color: #90aead;
  }
  
  .cart-item-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 20px;
    border-radius: 8px;
  }
  
  .cart-item-details {
    flex-grow: 1;
  }
  
  .cart-item h2 {
    margin: 0;
    font-size: 18px;
    color: #e64833;
  }
  
  .cart-item p {
    margin: 5px 0;
    color: #000000;
  }
  
  .cart-item button {
    margin: 5px;
    padding: 8px;
    background-color: #874f41;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
  
  .cart-item button:hover {
    background-color: #fb9d0d;
  }
  
  .total-price {
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
    color: #e64833;
  }
  
  button {
    padding: 10px 20px;
    background-color: #244555;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    margin-top: 20px;
    border-radius: 5px;
  }
  
  button:hover {
    background-color: #e64833;
  }
  </style>