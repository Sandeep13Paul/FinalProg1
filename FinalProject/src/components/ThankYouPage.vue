<script>
export default {
  name: 'ThankYouPage',
};
</script>
 
<template>
    <div class="thank-you-container">
      <h1 class="thank-you-heading">Thank You For Ordering</h1>
    </div>
  </template>
 
  
  <style >
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .thank-you-container {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #ff7e5f, #feb47b);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
  }
  
  .thank-you-heading {
    font-size: 3em;
    font-weight: 700;
    letter-spacing: 2px;
    animation: fadeIn 2s ease-in-out;
  }
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  
has context menu


has context menu