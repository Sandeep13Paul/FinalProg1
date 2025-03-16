<script>
import { getProducts } from '../Api.js';
import { useRoute, useRouter } from "vue-router";
import { toast } from "vue3-toastify"
export default {
  data() {
    return {
      products: []
    };
  },
  // created() {
  //   this.products = getProducts();
  //   console.log(this.products)
  // }
  watch: {
    $route() {
      // Check whenever route changes
      this.showLogoutToast();
    }
  },
  async mounted() {
    const route = useRoute();
    const router = useRouter();
    if (route.query.success === 'true') {
      toast("You have been Logged in Successfully 🎉", {
        theme: "colored",
        type: "success",
        position: "top-center",
        autoClose: 1800,
        dangerouslyHTMLString: true
      });
      setTimeout(() => {
        router.replace({ path: route.path, query: {} });
      }, 2000)
    }
    else if (route.query.loggedOut === 'true') {
      toast("Logged Out Successfully from your account", {
        "theme": "colored",
        "type": "info",
        "position": "top-center",
        "autoClose": 1800,
        "dangerouslyHTMLString": true
      });
      setTimeout(() => {
        router.replace({ path: route.path, query: {} });
      }, 2000)
    }
    try {
      this.products = await getProducts();
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  },
  methods: {
    showLogoutToast() {
      if (this.$route.path === "/" && this.$route.query.loggedOut) {
        toast("Logged Out Successfully", {
          theme: "colored",
          type: "info",
          position: "top-center",
          autoClose: 2000,
          dangerouslyHTMLString: true,
        });

        // Remove `loggedOut=true` to prevent repeated toasts
        setTimeout(() => {
        this.$router.replace({  query: {} });
        }, 2000)
      }
    }
  }
};
</script>

<template>
  <div class="product-list">
    <h2 class="prductlisttillte">Product List</h2>
    <div class="product-cards">
      <div v-for="product in products" :key="product.productId" class="product-card">
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

.product-list {
  padding: 50px;
  text-align: center;
  /* background-color: #EAE0C8; */
  /* background: linear-gradient(to right, #c9d6ff, #e2e2e2); */
  /* background: linear-gradient(to right, #1c92d2, #f2fcfe); */
  /* background: linear-gradient(to right, #44a08d, #093637); */
  background: linear-gradient(to right, #c9d6ff, #e2e2e2);
  font-family: 'Inter', sans-serif;
}

.prductlisttillte {
  font-size: 2.8rem;
  color: #333;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
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
  /* background-color: #536878; */
  background-color: #171a20;
  opacity: .9;
  /* background-color: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%); */
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
  height: 300px;
  border-radius: 12px;
  margin-bottom: 20px;
}


.product-link {
  text-decoration: none;
}
</style>
