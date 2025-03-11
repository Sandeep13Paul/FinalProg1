<script>
import { getProducts } from '../Api.js';
import { useCartStore } from '../pinia/cartPinia.js';

export default {
  name: 'ProductDescription',
  data() {
    return {
      product: null,
      cart: useCartStore(),
      productPrice: 0,
      merchantName: "",  
      merchantId: "",    
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
        if (this.product) {
          this.productPrice = this.product.merchantList[0].price;
          this.merchantName = this.product.merchantList[0].name;
          this.merchantId = this.product.merchantList[0].id;
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    },
   
    addToCart(product, productPrice, merchantName, merchantId) {
      console.log('Adding product to cart:', product);
      console.log("Merchant Name:", merchantName);
      console.log("Merchant ID:", merchantId);
      this.cart.addToCart(product, 1, productPrice, merchantName, merchantId); 
    },

    updateMerchantInfo(event) {
      const selectedPrice = parseFloat(event.target.value);
   
      const selectedMerchant = this.product.merchantList.find(
        merchant => merchant.price === selectedPrice
      );

      if (selectedMerchant) {
        this.merchantName = selectedMerchant.name;
        this.merchantId = selectedMerchant.id;
      }
    }
  }
};
</script>

<template>
  <div class="product-description">
    <h1 class="product-title">Product Details</h1>

    <div v-if="product" class="product-card">
      <div class="product-image-container">
        <img :src="product.image" alt="Product Image" class="product-image" />
      </div>

      <div class="product-info">
        <h2 class="product-name">{{ product.name }}</h2>
        <p class="product-price">${{ productPrice }}</p>
        <p class="product-description-text">{{ product.description }}</p>
        <p class="product-usp">USP: {{ product.usp }}</p>

        <!-- Dropdown Select with Class -->
        <div class="merchant-select-container">
          <select v-model="productPrice" @change="updateMerchantInfo" class="merchant-select">
            <option value="" disabled>Select Merchant</option>
            <option v-for="merchant in product.merchantList" :key="merchant.id" :value="merchant.price">
              {{ merchant.name }} - ${{ merchant.price }}
            </option>
          </select>
        </div>

        <button @click="addToCart(product, productPrice, merchantName, merchantId)" class="add-to-cart-button">
          Add to Cart
        </button>
      </div>
    </div>
    
    <div v-else class="not-found">
      <p>Product not found</p>
    </div>
  </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

.product-description {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: #EAE0C8;
  padding: 60px 20px;
  font-family: 'Inter', sans-serif;
}

.product-title {
  font-size: 2.8rem;
  color: #333;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
}

.product-card {
  display: flex;
  flex-direction: row;
  background-color: #536878;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  padding: 40px;
  max-width: 1000px;
  width: 100%;
  height: 450px; /* Increased height */
  gap: 50px;
  align-items: center;
}

.product-image-container {
  flex: 1;
  display: flex;
  justify-content: center;
}

.product-image {
  width: 320px;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
}

.product-info {
  flex: 2;
  text-align: left;
}

.product-name {
  font-size: 2rem;
  font-weight: 700;
  color: #d9d9d9;
  margin-bottom: 12px;
}

.product-price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #a1a728;
  margin-bottom: 12px;
}

.product-description-text {
  font-size: 1.1rem;
  color: #000000;
  margin-bottom: 18px;
  line-height: 1.6;
}

.product-usp {
  font-style: italic;
  color: #000000;
  margin-bottom: 25px;
}

.add-to-cart-button {
  padding: 14px 22px;
  font-size: 1.2rem;
  font-weight: 600;
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.add-to-cart-button:hover {
  transform: scale(1.07);
  box-shadow: 0 6px 14px rgba(255, 126, 95, 0.3);
}

.not-found {
  font-size: 1.6rem;
  color: #ff4444;
  margin-top: 20px;
}

/* Dropdown Styling with Classes */
.merchant-select-container {
  margin-top: 10px;
}

.merchant-select {
  padding: 10px;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 8px;
  background-color: #fff;
  color: #333;
  border: 1px solid #ddd;
  width: 100%;
  max-width: 250px;
  cursor: pointer;
  transition: all 0.2s ease;
}

/* Hover and Focus Effects for Dropdown */
.merchant-select:hover, .merchant-select:focus {
  border-color: #ff7e5f;
  box-shadow: 0 4px 8px rgba(255, 126, 95, 0.3);
}

.merchant-select option {
  padding: 8px;
  background-color: #f8f8f8;
}

.merchant-select:focus {
  outline: none;
  border-color: #ff7e5f;
}
</style>
