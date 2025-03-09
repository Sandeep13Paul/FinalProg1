<script>
  import { getProducts } from '../Api.js';
  
  export default {
    name: 'ProductDescription',
    data() {
      return {
        product: null,
      };
    },
    created() {
      const productId = this.$route.params.productId;
      if (productId) {
        this.fetchProductDetails(productId);
      }
    },
    methods: {
      async fetchProductDetails(id) {
        try {
          const allProducts = await getProducts();
          this.product = allProducts.find(product => product.id === parseInt(id)) || null;
        } catch (error) {
          console.error("Error fetching product details:", error);
        }
      },
      addToCart() {
        this.$router.push({
          query: { productId: this.product.id, quantity: 1 },
        });
      }
    }
  };
  </script>
<template>
    <div class="product-description">
      <h1 class="product-title">Product Description</h1>
  
      <div v-if="product" class="product-details">
        <div class="product-image-container">
          <img :src="product.image" alt="Product Image" class="product-image" />
        </div>
  
        <div class="product-info">
          <h2 class="product-name">{{ product.name }}</h2>
          <p class="product-price">${{ product.price }}</p>
          <p class="product-description-text">{{ product.description }}</p>
          <p class="product-usp">USP: {{ product.usp }}</p>
          <button @click="addToCart" class="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
      
      <div v-else>
        <p>Product not found</p>
      </div>
    </div>
  </template>
  
  
  
  <style>
  .product-description {
    padding: 20px;
    text-align: center;
  }
  
  .product-details {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .product-image-container {
    flex: 1;
    max-width: 300px;
  }
  
  .product-image {
    width: 100%;
    height: auto;
  }
  
  .product-info {
    flex: 2;
    margin-left: 20px;
  }
  
  .product-title {
    font-size: 2em;
    margin-bottom: 20px;
  }
  
  .product-name {
    font-size: 1.5em;
    font-weight: bold;
  }
  
  .product-price {
    font-size: 1.2em;
    color: #28a745;
  }
  
  .product-description-text {
    font-size: 1em;
    margin: 10px 0;
  }
  
  .product-usp {
    font-style: italic;
    color: #777;
  }
  
  .add-to-cart-button {
    padding: 10px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .add-to-cart-button:hover {
    background-color: #0056b3;
  }
  </style>
  