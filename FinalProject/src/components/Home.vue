<script>
import ProductList from './ProductList.vue';
import ProductSearchList from './ProductSearchList.vue';

export default {
    props: {
        showSearch: {
            type: Boolean,
            default: false  // Default value for showSearch
        }
    },
    components: {
        ProductList,
        ProductSearchList
    }
};
</script>

<template>
  <div>
    <h1>Welcome to the Home Page!</h1>
    
    <!-- Conditionally render the Product List or Product Search List -->
    <div v-if="showSearch">
      <ProductSearchList />
    </div>
    <div v-else>
      <ProductList />
    </div>
  </div>
</template>
