<script>
export default {
  data() {
    return {
      isLoading: false, // Controls the visibility of the loader
    };
  },
  methods: {
    showLoader() {
      this.isLoading = true; // Show the loader
    },
    hideLoader() {
      this.isLoading = false; // Hide the loader
    }
  }
}
</script>

<template>
    <div v-if="isLoading" class="loader-overlay">
      <div class="loader"></div>
    </div>
  </template>
  
 
  
  <style scoped>
  .loader-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .loader {
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top: 4px solid #fff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  