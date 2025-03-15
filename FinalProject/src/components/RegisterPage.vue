<script>
import { registerUser } from "../Api.js"
export default {
  data() {
    return {
      user:{
        name: '',
        email: '',
        password: '',
      }
    };
  },
  methods: {
    registerUser() {
      registerUser(this.user);
      console.log(this.user);
      this.$router.push('/LoginPage');
    },
  },
};
</script>

<template>
  <div class="register-page">
    <div class="register-card">
      <h1 class="register-title">Register User</h1>
      <div class="register-form">
        <input 
          v-model="user.name" 
          type="text" 
          placeholder="Enter your name" 
          class="input-field name-input"
        />
        
        <input 
          v-model="user.email" 
          type="email" 
          placeholder="Enter Your Email" 
          class="input-field"
        />
        
        <input 
          v-model="user.password" 
          type="password" 
          placeholder="Enter Your Password" 
          class="input-field"
        />
        
        <!-- Submit Button -->
        <button class="submit-button" @click="registerUser">Submit</button>
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
  /* background-color: #EAE0C8; */
  background: linear-gradient(to right, #c9d6ff, #e2e2e2);
}

.register-card {
  /* background-color: #536878; */
  background-color: #171a20;
  opacity: .9;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 100%;
  max-width: 600px;
  text-align: center;
}

.register-title {
  font-size: 2rem;
  color: #ffffff;
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
