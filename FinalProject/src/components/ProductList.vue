<!-- <script>
 
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
</style> -->

<script>
import { getProducts } from '../Api.js';
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
    <h2 style="color: #5e402b;">Product List</h2>
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

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

.product-list {
  padding: 50px;
  text-align: center;
  background-color: #EAE0C8;
  font-family: 'Inter', sans-serif;
}

.product-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 40px;
  margin-top: 40px;
  padding: 30px;
  justify-content: center;
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 14px;
  padding: 30px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  text-align: left;
  background-color: #536878;
  color: #EAE0C8;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.product-card h3 {
  font-size: 1.7em;
  font-weight: 600;
  color: #EAE0C8;
}

.product-card p {
  color: #ddd;
  margin: 12px 0;
}

.product-price {
  font-weight: bold;
  font-size: 1.2em;
  color: #FFD700;
}

.product-usp {
  font-style: italic;
  color: #dcdcdc;
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 20px;
}

</style>
