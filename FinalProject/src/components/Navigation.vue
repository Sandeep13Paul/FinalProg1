<script>
import { toast } from "vue3-toastify"
import { getUserLoggedOut } from '../Api.js';
export default {
  data() {
    return {
      searchQuery: '',
      isLoggedIn: false,
    };
  },
  mounted() {
    this.checkLoginStatus();

    window.addEventListener("storage", this.checkLoginStatus);

    window.addEventListener("custom-login-event", this.checkLoginStatus);
  },
  watch: {
    searchQuery() {
      if (this.searchQuery.length === 0) {
        this.$router.push('/');
      }
    },
    isLoggedIn() {
      if (localStorage.getItem("userDetails")) {
        this.isLoggedIn = true;
      }
      else {
        this.isLoggedIn = false;
      }
    },
  },

  methods: {
    checkLoginStatus() {
      this.isLoggedIn = localStorage.getItem("userDetails") !== null;
    },
    goToCart() {
      this.$router.push('/Cart');
    },
    goToProfile() {
      this.$router.push('/Profile');
    },
    goToLogin() {
      this.$router.push('/LoginPage');
    },
    goToRegister() {
      this.$router.push('/RegisterPage');
    },
    async goToLogout() {
      localStorage.removeItem('userDetails');
      window.dispatchEvent(new Event("custom-login-event"));
      const data = await getUserLoggedOut();
      console.log(data);
      this.$router.push({ path: "/", query: { loggedOut: true } });
    },
    homePage() {
      this.$router.push('/');
    },
    toggleSearch() {
      if (this.searchQuery) {
        const newSearchQuery = this.searchQuery;
        // this.searchQuery = ' ';
        this.$router.push(`/ProductSearchList?query=${newSearchQuery}`);
      } else {
        this.$router.push('/');
      }
    }
  }
};
</script>

<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item logo">
        <img src="../assets/image.png" alt="LOGO" class="nav-button logo-img" @click="homePage" />
      </li>
      <li class="navbar-item search-container">
        <input type="text" class="search-input" v-model="searchQuery" placeholder="Search"
          @keypress.enter="toggleSearch" />
        <button class="search-button" @click="toggleSearch">Search</button>
      </li>
      <li class="navbar-item cart-profile">
        <button class="cart nav-button" @click="goToCart">Cart</button>


        <button class="profile nav-button" @click=goToLogin v-if="!isLoggedIn">Login</button>
        <button class="profile nav-button" @click="goToRegister" v-if="!isLoggedIn">Register</button>
        <button class="profile nav-button" @click="goToProfile" v-if="isLoggedIn">Profile</button>
        <button class="profile nav-button" @click="goToLogout" v-if="isLoggedIn">Logout</button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  /* background: linear-gradient(135deg, #2C2C2C, #333333); */
  /* background: linear-gradient(135deg, #92bcd7a8, #7cacbc); */
  background-color: #171a20;
  /* background: linear-gradient(135deg, #536878, #171a20); */
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  /* height: 80px; */
}

.navbar-list {
  display: flex;
  list-style-type: none;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.navbar-item {
  margin-right: 20px;
}

.logo {
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: auto;
}

.logo-img {
  width: 100%;
  height: auto;
  max-width: 50px;
}

.nav-button {
  background-color: #D8CFC4;
  color: #333;
  border: none;
  /* padding: 8px 18px; */
  font-size: 16px;
  cursor: pointer;
  border-radius: 60px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.nav-button:hover {
  background-color: #B0A38D;
  color: white;
  transform: scale(1.05);
}

.search-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
}

.search-input {
  margin-top: 20px;
  padding: 8px 15px;
  font-size: 16px;
  border-radius: 25px;
  border: 1px solid #ddd;
  width: 70%;
  margin-right: 20px;
  height: 40px;
}

.search-button {
  background-color: #D8CFC4;
  color: #333;
  border: none;
  padding: 8px 18px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 25px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  height: 40px;
}

.search-button:hover {
  background-color: #B0A38D;
  color: white;
  transform: scale(1.05);
}

.cart-profile .nav-button {
  background-color: #D8CFC4;
}

.cart-profile .nav-button:hover {
  background-color: #B0A38D;
}

.cart-profile .nav-button:not(:last-child) {
  margin-right: 15px;
}

@media (max-width: 768px) {
  .navbar-list {
    flex-direction: column;
    align-items: center;
  }

  .navbar-item {
    margin: 10px 0;
  }

  .search-container {
    width: 100%;
    margin-top: 10px;
  }

  .search-input {
    width: 80%;
    margin-right: 0;
  }
}
</style>
