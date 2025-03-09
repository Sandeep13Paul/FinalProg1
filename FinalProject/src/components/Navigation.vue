<script>
export default {
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    goToCart() {
      this.$router.push('/Cart');
    },
    goToProfile() {
      this.$router.push('/Profile');
    },
    homePage() {
      this.$router.push('/');
    },
    toggleSearch() {
      if (this.searchQuery) {
        this.$router.push(`/ProductSearchList?query=${this.searchQuery}`);
      }
    }
  }
};
</script>
 
<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item logo">
        <button @click="homePage" class="nav-button">Logo</button>
      </li>
      <li class="navbar-item search-container">
        <input
          type="text"
          class="search-input"
          v-model="searchQuery"
          placeholder="Search"
          @keypress.enter="toggleSearch"
        />
        <button class="search-button" @click="toggleSearch">Search</button>
      </li>
      <li class="navbar-item cart-profile">
        <button class="cart nav-button" @click="goToCart">Cart</button>
        <button class="profile nav-button" @click="goToProfile">Profile</button>
      </li>
    </ul>
  </nav>
</template>
 
<style scoped>
.navbar {
  background-color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
 
.navbar-list {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}
 
.navbar-item {
  margin-right: 20px;
}
 
.logo {
  flex-grow: 1;
}
 
.nav-button {
  background: linear-gradient(45deg, #6a1b9a, #ff4081);
  color: white;
  border: none;
  padding: 8px 18px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 25px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}
 
.nav-button:hover {
  background: linear-gradient(45deg, #d500f9, #ff80ab);
  transform: scale(1.05);
}
 
.search-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;  /* Center the search bar */
}
 
.search-input {
  padding: 8px 15px;
  font-size: 16px;
  border-radius: 25px;
  border: 1px solid #ddd;
  width: 70%;
  margin-right: 10px;
}
 
.search-button {
  background-color: #4aad9e; /* Initial green color */
  color: white;
  border: none;
  padding: 8px 18px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 25px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}
 
.search-button:hover {
  background-color: #f44336; /* Red color when hovered */
  color: white;
  transform: scale(1.05);
}
 
.cart-profile .nav-button {
    background-color: #4aad9e;
}
 
.cart-profile .nav-button:hover {
    background-color: #4aad9e;
}
 
.cart-profile .nav-button:not(:last-child) {
  margin-right: 15px; /* Add margin between Cart and Profile buttons */
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
 