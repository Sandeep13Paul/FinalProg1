import { defineStore } from "pinia";


export const useCartStore = defineStore('cart',{
    state: () => ({
        cartItems: [],
    }),
    getters: {
        cartTotal() {
            return this.cartItems.reduce((acc, item) => acc + item.price, 0);
        },
    },
    actions: {
        addToCart(item, quantity) {
            console.log(item, quantity);
            if (this.cartItems.length > 0) {
                const existingItem = this.cartItems.find((items) => items.productId === item.id);
                if (existingItem) {
                  // don't add the same item again
                } else {
                  this.cartItems.push({productId: item.id, productName: item.name, merchantName: item.merchantList[0].name, productPrice: item.merchantList[0].price, quantity: Number(quantity)});
                }
              } else {
                this.cartItems.push({productId: item.id, productName: item.name, merchantName: item.merchantList[0].name, productPrice: item.merchantList[0].price, quantity: Number(quantity)});
              }
        },
        removeFromCart(productId) {
            this.cartItems = this.cartItems.filter((item) => item.productId !== productId);
        },
        increaseQuantity(index) {
            this.cartItems[index].quantity++;
        },
        decreaseQuantity(index) {
            if (this.cartItems[index].quantity > 1) {
                this.cartItems[index].quantity--;
            }
        },
        totalPrice() {
            return this.cartItems.reduce((acc, item) => acc + item.productPrice * item.quantity, 0);
        },
        clearCart() {
            this.cartItems = [];
        }
    },
    persist: true,
})