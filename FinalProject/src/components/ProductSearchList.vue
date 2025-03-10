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
            <p class="product-price">${{ product.merchantList[0].price }}</p>
            <p class="product-description">{{ product.description }}</p>
            <p class="product-usp">USP: {{ product.usp }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

.product-search-list {
  background-color: #eadcbb;
  color: #536878;
  padding: 40px;
  border-radius: 10px;
  text-align: center;
  font-family: 'Inter', sans-serif;
}

h2 {
  color: #5e402b;
  margin-bottom: 20px;
}

.product-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  justify-content: center;
}

.product-card {
  background-color: #536878;
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
  height: auto;
  border-radius: 10px;
}
</style>
