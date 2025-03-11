<script>
  import { getProducts } from '../Api.js';
  import { useCartStore } from '../pinia/cartPinia.js';
  import { useOrderStore } from '../pinia/orderPinia.js';
  
  export default {
    data() {
      return {
        cart: useCartStore(),
        order: useOrderStore(),
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
        console.log("hello ",this.cart.cartItems);
        this.order.addOrder(this.cart.cartItems);
        this.cart.clearCart();
        this.$router.push('/ThankYou');
      },
    },
  };
  </script>
 
<template>
    <div class="cart-container">
      <h1 class="cartname">Your Cart</h1>
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
        <button class="checkout"  @click="checkoutButton">Proceed to Checkout</button>
      </div>
      <div v-else>
        <p>Your cart is empty. Add some items to your cart!</p>
      </div>
    </div>
  </template>
  
  <style >
 .cart-container {

  background-color: #536878; 
  padding: 20px;
  font-family: 'Arial', sans-serif;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 900px; 
  margin: 40px auto 0; 
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cartname {
  color: rgb(207, 207, 55);
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

.cart-item {
  display: flex; 
  justify-content: flex-start; 
  align-items: center; 
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  background-color: #f8f8f8;
  width: 100%;
  max-width: 900px; 
  text-align: left; 
}

.cart-item-image {
  width: 120px;
  height: 120px;
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
  color: #c8941b;
}

.cart-item p {
  margin: 5px 0;
  color: rgb(7, 126, 169);
}

.cart-item button {
  margin: 5px;
  padding: 8px 12px;
  background-color: #874f41;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.cart-item button:hover {
  background-color: #536878; 
  transform: scale(1.05); 
}

.cart-item button:active {
  background-color: #05f5d9; 
}

.total-price {
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  color:rgb(230, 206, 51);
  text-align: center; 
}

button {
  padding: 10px 20px;
  margin-top: 20px;
}
.checkout{
  padding: 14px 22px;
  font-size: 1.2rem;
  font-weight: 600;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  margin-left: 65px;

}
.checkout:hover{
  transform: scale(1.07);
  box-shadow: 0 6px 14px rgba(255, 126, 95, 0.3);
}

button:hover {
  background-color: #e64833;
}

  </style>