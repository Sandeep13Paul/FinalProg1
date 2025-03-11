<script>
import Home from './components/Home.vue';
import Navigation from './components/Navigation.vue';

export default {
  components: {
    Home,
    Navigation
  }
};
</script>
<template>
  <div>
    <Navigation />
    
    <router-view></router-view>
  </div>
</template>



<style>

body {
  padding-top: 60px;
  background-color: #EAE0C8;
}


.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  padding: 10px 0;
  z-index: 1000;
}

.navbar-list {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0 20px;
  width: 100%;
  justify-content: space-between;
}

.navbar-item {
  color: white;
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-right: 20px; 
}

.logo {
  flex: 0 1 auto; 
}

.search-container {
  flex: 0 1 auto; 
  display: flex;
  align-items: center;
}

.search-input {
  padding: 5px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  width: 300px; 
}

.search-button {
  padding: 5px 10px;
  background-color: #555;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.search-button:hover {
  background-color: #777;
}

.cart-profile {
  flex: 0 1 auto; 
}


header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
