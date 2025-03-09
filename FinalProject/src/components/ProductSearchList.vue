<script>
import { getProducts } from '../Api.js';
 
export default {
  name: 'ProductSearchList',
  data() {
    return {
      searchQuery: this.$route.query.query || '',
      products: []
    };
  },
  created() {
    this.fetchProducts();
  },
  watch: {
    
    '$route.query.query'(newQuery) {
      this.searchQuery = newQuery || '';
      this.fetchProducts();
    }
  },
  computed: {
    filteredProducts() {
      if (!this.searchQuery) {
        return this.products;
      }
      return this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    fetchProducts() {
      const allProducts = getProducts();
      this.products = allProducts.filter(product =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
};
</script>
 
<template>
    <div class="product-search-list">
      <h2>Product Search List</h2>
  
      <div v-if="filteredProducts.length === 0">
        <p>No products found matching your search criteria.</p>
      </div>
  
      <div v-if="filteredProducts.length > 0" class="product-cards">
        <div v-for="product in filteredProducts" :key="product.id" class="product-card">
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
  
  <style >
  /* Your existing CSS for Product Search List */
  </style>