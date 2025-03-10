<!-- <script>
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
       <h1 class="product-title">Product Details</h1>
   
       <div v-if="product" class="product-card">
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
     justify-content: center;
     min-height: 100vh;
     background-color: #f4f4f4;
     padding: 40px 20px;
     font-family: 'Inter', sans-serif;
   }
   
   .product-title {
     font-size: 2.5rem;
     color: #333;
     margin-bottom: 30px;
     font-weight: 600;
   }
   
   .product-card {
     display: flex;
     flex-direction: row;
     background-color: #ffffff;
     border-radius: 12px;
     box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
     padding: 30px;
     max-width: 900px;
     width: 100%;
     gap: 40px;
     align-items: center;
   }
   
   .product-image-container {
     flex: 1;
     display: flex;
     justify-content: center;
   }
   
   .product-image {
     width: 280px;
     height: auto;
     border-radius: 10px;
     object-fit: cover;
   }
   
   .product-info {
     flex: 2;
     text-align: left;
   }
   
   .product-name {
     font-size: 1.8rem;
     font-weight: 600;
     color: #333;
     margin-bottom: 10px;
   }
   
   .product-price {
     font-size: 1.5rem;
     font-weight: bold;
     color: #28a745;
     margin-bottom: 10px;
   }
   
   .product-description-text {
     font-size: 1.1rem;
     color: #555;
     margin-bottom: 15px;
     line-height: 1.6;
   }
   
   .product-usp {
     font-style: italic;
     color: #888;
     margin-bottom: 20px;
   }
   
   .add-to-cart-button {
     padding: 12px 20px;
     font-size: 1.1rem;
     font-weight: 600;
     background: linear-gradient(135deg, #ff7e5f, #feb47b);
     color: #fff;
     border: none;
     border-radius: 8px;
     cursor: pointer;
     transition: transform 0.2s ease, box-shadow 0.2s ease;
   }
   
   .add-to-cart-button:hover {
     transform: scale(1.05);
     box-shadow: 0 6px 14px rgba(255, 126, 95, 0.3);
   }
   
   .not-found {
     font-size: 1.5rem;
     color: #ff4444;
     margin-top: 20px;
   }
   </style>
    -->

<script>
import { getProducts } from '../Api.js';

export default {
  name: 'ProductDescription',
  data() {
    return {
      product: null
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
    },

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
        <p class="product-price">${{ product.price }}</p>
        <p class="product-description-text">{{ product.description }}</p>
        <p class="product-usp">USP: {{ product.usp }}</p>
        <button @click="addToCart" class="add-to-cart-button">Add to Cart</button>
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
  background-color: #f4f4f4;
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
  background-color: #ffffff;
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
  color: #333;
  margin-bottom: 12px;
}

.product-price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #28a745;
  margin-bottom: 12px;
}

.product-description-text {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 18px;
  line-height: 1.6;
}

.product-usp {
  font-style: italic;
  color: #888;
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
</style>
