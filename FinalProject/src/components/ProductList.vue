<script>
 
import { getProducts } from '../Api.js';  // Go up one directory to src
 
export default {
  data() {
    return {
      products: []
    };
  },
  created() {
    this.products = getProducts();
  }
};
</script>
 
<template>
  <div class="product-list">
    <h2>Product List</h2>
    <div class="product-cards">
      <div v-for="product in products" :key="product.id" class="product-card">
        <router-link :to="'/product-description/' + product.id">
        <img :src="product.image" alt="Product Image" class="product-image" />
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price">${{ product.price }}</p>
        <p class="product-description">{{ product.description }}</p>
        <p class="product-usp">USP: {{ product.usp }}</p>
    </router-link>
      </div>
    </div>
  </div>
</template>
 
<style>
.product-list {
  padding: 20px;
  text-align: center;
}
 
.product-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
 
.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  background-color: #fff;
}
 
.product-card h3 {
  font-size: 1.2em;
  color: #333;
}
 
.product-card p {
  color: #555;
  margin: 10px 0;
}
 
.product-price {
  font-weight: bold;
  color: #28a745;
}
 
.product-usp {
  font-style: italic;
  color: #777;
}
 
.product-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
}
</style>