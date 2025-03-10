<script>
  import { getProducts } from '../Api.js';
  import { useCartStore } from '../pinia/cartPinia.js';
  
  export default {
    data() {
      return {
        cart: useCartStore(),
      };
    },
    methods: {
      increaseQuantity(item) {
        item.quantity++;
      },
      decreaseQuantity(item) {
        if (item.quantity > 1) {
          item.quantity--;
        }
      },
      removeItem(itemId) {
        this.cart.removeFromCart(itemId);
      },
      getTotalPrice() {
        return this.cart.totalPrice();
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
      <div v-if="cart.cartItems.length > 0">
        <div v-for="item in cart.cartItems" :key="item.id" class="cart-item">
          <img :src="item.image" alt="Product Image" class="cart-item-image" />
          <div class="cart-item-details">
            <h2>{{ item.productName }}</h2>
            <p>Price: ${{ item.productPrice }}</p>
            <p>Quantity: {{ item.quantity }}</p>
            <button @click="increaseQuantity(item)">+</button>
            <button @click="decreaseQuantity(item)">-</button>
            <button @click="removeItem(item.productId)">Remove</button>
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
    color: #4ba35b;
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