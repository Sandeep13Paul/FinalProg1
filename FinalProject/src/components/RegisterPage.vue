<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
  methods: {
    submitForm() {
      // Here you can add the logic to handle form submission
      console.log("Name:", this.name);
      console.log("Email:", this.email);
      console.log("Password:", this.password);
    },
  },
};
</script>

<template>
  <div class="register-page">
    <div class="register-card">
      <h1 class="register-title">Register User</h1>
      <div class="register-form">
        <!-- Name Field -->
        <input 
          v-model="name" 
          type="text" 
          placeholder="Enter your name" 
          class="input-field name-input"
        />
        
        <!-- Email Field -->
        <input 
          v-model="email" 
          type="email" 
          placeholder="Enter Your Email" 
          class="input-field"
        />
        
        <!-- Password Field -->
        <input 
          v-model="password" 
          type="password" 
          placeholder="Enter Your Password" 
          class="input-field"
        />
        
        <!-- Submit Button -->
        <button @click="submitForm" class="submit-button">Submit</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.register-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  background-color: #EAE0C8;
}

.register-card {
  background-color: #536878;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 100%;
  max-width: 600px;
  text-align: center;
}

.register-title {
  font-size: 2rem;
  color: #1f1e1e;
  margin-bottom: 20px;
}

.input-field {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
}

/* Styling specifically for the Name input field */
.name-input {
  margin-top: 0;
  border: 1px solid #4CAF50;
  transition: border-color 0.3s ease;
}

.name-input:focus {
  border-color: #45a049;
  outline: none;
}

.submit-button {
  width: 100%;
  padding: 12px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 20px;
}

.submit-button:hover {
  background-color: #45a049;
}
</style>
