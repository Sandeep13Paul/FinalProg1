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

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.thank-you-container {
  font-family: 'Arial', sans-serif;
  /* background-color: #EAE0C8;  */
  background: linear-gradient(to right, #c9d6ff, #e2e2e2);
  height: 94vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #536878; 
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
