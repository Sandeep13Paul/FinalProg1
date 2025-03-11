import { defineStore } from "pinia";
import { toast } from "vue3-toastify";


import "vue3-toastify/dist/index.css";


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
        addToCart(item, quantity, productP, merchantN, merchantId) {
          console.log("newdata", merchantN, merchantId);
      
   
          if (this.cartItems.length > 0) {
            
            const existingItem = this.cartItems.find((cartItem) => cartItem.productId === item.id);
            const existingMerchant = this.cartItems.find((cartItem) => cartItem.productId === item.id && cartItem.merchantId === merchantId);
      
            console.log(existingItem, "existingItem");
            console.log(existingMerchant, "existingMerchant");
      
            
            if (existingMerchant) {
              console.log("Item already in cart with the same merchant");
              toast("Item already in cart with the same merchant", {
                theme: "colored",
                type: "info",
                position: "top-center",
                autoClose: 2000,
                dangerouslyHTMLString: true
              });
            } 
            else if (existingItem) {
              console.log("Item exists with a different merchant, removing old item and adding new one");
              
            
              const index = this.cartItems.findIndex((cartItem) => cartItem.productId === item.id);
              if (index !== -1) {
                this.cartItems.splice(index, 1);  
              }
      
             
              this.cartItems.push({
                productId: item.id,
                productName: item.name,
                merchantName: merchantN,
                merchantId: merchantId,
                productPrice: productP,
                quantity: Number(quantity)
              });
      
              toast("Item with new merchant added to cart", {
                theme: "colored",
                type: "success",
                position: "top-center",
                autoClose: 2000,
                dangerouslyHTMLString: true
              });
            } 
            
            else {
              console.log("Adding item with new merchant to cart");
              this.cartItems.push({
                productId: item.id,
                productName: item.name,
                merchantName: merchantN,
                merchantId: merchantId,
                productPrice: productP,
                quantity: Number(quantity)
              });
      
              toast("Item added to cart", {
                theme: "colored",
                type: "success",
                position: "top-center",
                autoClose: 2000,
                dangerouslyHTMLString: true
              });
            }
          } else {
            
            console.log("Adding item to empty cart");
            this.cartItems.push({
              productId: item.id,
              productName: item.name,
              merchantName: merchantN,
              merchantId: merchantId,
              productPrice: productP,
              quantity: Number(quantity)
            });
      
            toast("Item added to cart", {
              theme: "colored",
              type: "success",
              position: "top-center",
              autoClose: 2000,
              dangerouslyHTMLString: true
            });
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