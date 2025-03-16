<script>
import { getProducts, getProductByName } from '../Api.js';

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
      return this.products
      // .filter(product =>
      //   product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      //   product.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      // );
    }
  },
  methods: {
    async fetchProducts() {
  try {
    const searchedItems = await getProductByName(this.searchQuery);

    console.log("items", searchedItems)
    if (searchedItems) {
      this.products = searchedItems;
      // .filter(product =>
      //   product.productName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      //   product.productDescription.toLowerCase().includes(this.searchQuery.toLowerCase())
      // );
    } else {
      this.products = [];
    }
    
  } catch (error) {
    console.error("Error fetching products:", error);
    this.products = [];
  }
}
  }
};
</script>
 
<template>
  <div class="product-search-list">
    <h2 class="psearchtittle">Product Search List</h2>

    <div v-if="filteredProducts.length === 0">
      <p>No products found matching your search criteria.</p>
    </div>

    <div v-if="filteredProducts.length > 0" class="product-cards">
      <div v-for="product in filteredProducts" :key="product.productId" class="product-card">
        <router-link :to="'/product-description/' + product.productId" class="product-link">
          <img :src="product.productImageUrl" alt="Product Image" class="product-image" />
          <h3 class="product-name">{{ product.productName }}</h3>
          <p class="product-price">${{ product.productMerchantPrice }}</p>
          <p class="product-description">{{ product.productDescription }}</p>
          <p class="product-usp">USP: {{ product.productUsp }}</p>
          <p class="product-usp">Merchant Name: {{ product.merchantName }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

.product-search-list {
/* background-color: #eadcbb; */
background: linear-gradient(to right, #c9d6ff, #e2e2e2);
color: #536878;
padding: 40px;
border-radius: 10px;
/* height: 970px; */
text-align: center;
font-family: 'Inter', sans-serif;
}


.psearchtittle{
font-size: 2.8rem;
color: #333;
font-weight: 700;
margin-bottom: 40px;
text-align: center;

}

.product-cards {
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 50px;
justify-content: center;

}

.product-card {
/* background-color: #536878; */
background-color: #171a20;
opacity: .9;
color: #C2B280;
padding: 30px;
border-radius: 15px;
box-shadow: 0 8px 14px rgba(0, 0, 0, 0.2);
transition: transform 0.3s ease;
text-align: left;
}

.product-card:hover {
transform: scale(1.08);
}

.product-name,
.product-price,
.product-description,
.product-usp {
margin: 14px 0;
}

.product-image {
width: 100%;
height: 300px;
border-radius: 10px;
}
.product-link {
text-decoration: none;
}
</style>
