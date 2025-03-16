<script>
import { getProducts, addToOrders, getAllCartItems, updateCartQuantity, removeItemFromCart, clearCart } from '../Api.js';
import { useCartStore } from '../pinia/cartPinia.js';
import { useOrderStore } from '../pinia/orderPinia.js';
import { toast } from "vue3-toastify"

export default {
  data() {
    return {
      cartItems: [],
      totalPrice: 0,
    };
  },
  async mounted() {
    try {
      const userDetails = JSON.parse(localStorage.getItem('userDetails'));
      this.cartItems = await getAllCartItems(userDetails.userId, userDetails.jwtToken);  // Await the promise and assign to products
      console.log("cart items", this.cartItems);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  },
  methods: {
    async increaseQuantity(item, flag) {
      const userDetails = JSON.parse(localStorage.getItem('userDetails'));
      const quantity = await updateCartQuantity(item, flag, userDetails.userId, userDetails.jwtToken);
      this.cartItems.find(items => items.productMerchantId === item.productMerchantId).quantity = quantity;
    },
    async decreaseQuantity(item, flag) {
      if (item.quantity === 1) {
        //
        console.log("hello");
      }
      else {
      const userDetails = JSON.parse(localStorage.getItem('userDetails'));
      const quantity = await updateCartQuantity(item, flag, userDetails.userId, userDetails.jwtToken);
      this.cartItems.find(items => items.productMerchantId === item.productMerchantId).quantity = quantity;
      }
    },
    removeItem(productMerchantId) {
      const userDetails = JSON.parse(localStorage.getItem('userDetails'));
      const flag = removeItemFromCart(userDetails.userId, productMerchantId, userDetails.jwtToken);
      console.log(flag);
      if (flag) {
        this.cartItems = this.cartItems.filter(item => item.productMerchantId !== productMerchantId);
        toast("Item removed from cart", {
          theme: "colored",
          type: "success",
          position: "top-center",
          autoClose: 2000,
          dangerouslyHTMLString: true
        });
      }
      else {
        toast("Error in removing from cart!", {
        "theme": "colored",
        "type": "error",
        "position": "top-center",
        "autoClose": 2000,
        "dangerouslyHTMLString": true
      })
      }

    },
    getTotalPrice() {
      this.totalPrice = this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
      return this.totalPrice;
    },
    async checkoutButton() {
      // console.log("hello ",this.cart.cartItems);
      // this.order.addOrder(this.cart.cartItems);
      // this.cart.clearCart();

      const userDetails = JSON.parse(localStorage.getItem("userDetails"));
      const addOrder = await addToOrders(userDetails.userId, this.totalPrice, userDetails.jwtToken);
      const clearTheCart = await clearCart(userDetails.userId, userDetails.jwtToken);

      console.log(addOrder, " ", clearTheCart);
      this.$router.push('/ThankYou');
    },
  },
};
</script>

<template>
  <div class="cart-container">
    <h1 class="cartname">Your Cart</h1>
    <div v-if="cartItems.length > 0">
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <img :src="item.image" alt="Product Image" class="cart-item-image" />
        <div class="cart-item-details">
          <h2>{{ item.name }}</h2>
          <p>Merchant Name : {{ item.merchantName }}</p>
          <p>Price: ${{ item.price }}</p>
          <p>Quantity: {{ item.quantity }}</p>
          <button @click="increaseQuantity(item, true)">+</button>
          <button @click="decreaseQuantity(item, false)">-</button>
          <button @click="removeItem(item.productMerchantId)">Remove</button>
        </div>
      </div>
      <div class="total-price">
        <h3>Total Price: ${{ getTotalPrice() }}</h3>
      </div>
      <button class="checkout" @click="checkoutButton">Proceed to Checkout</button>
    </div>
    <div v-else>
      <p class="elsecase"> Your cart is empty. Add some items to your cart!</p>
    </div>
  </div>
</template>

<style>
.cart-container {

  /* background-color: #536878; */
  background-color: #171a20;
  opacity: .9;
  
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
  color: rgb(230, 206, 51);
  text-align: center;
}

button {
  padding: 10px 20px;
  margin-top: 20px;
}

.checkout {
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

.checkout:hover {
  transform: scale(1.07);
  box-shadow: 0 6px 14px rgba(255, 126, 95, 0.3);
}

button:hover {
  background-color: #e64833;
}
.elsecase{
  color: white;
}
</style>
