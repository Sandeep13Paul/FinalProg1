<script>
import { loginUser } from '../Api.js'
import { toast } from "vue3-toastify"
import { useRoute, useRouter } from "vue-router";
export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
    };
  },
  mounted() {
    const route = useRoute();
    const router = useRouter();
    if (route.query.success === "true") {
      toast("You have been Successfully Registered 🎉, Please Login to avail the cart.", {
        theme: "colored",
        type: "success",
        position: "top-center",
        autoClose: 3500,
        dangerouslyHTMLString: true
      });
      setTimeout(() => {
        router.replace({ path: route.path, query: {} });
      }, 3600)
    }
  },
  methods: {
    async userlogined() {
      try {
        const userDetails = await loginUser(this.user);
        if (userDetails) {
          console.log('User details:', userDetails);
          const dataToStore = {
            jwtToken: userDetails.jwtToken,
            userId: userDetails.userId
          };
          localStorage.setItem('userDetails', JSON.stringify(dataToStore));
          const storedData = localStorage.getItem('userDetails');
          console.log('Stored data in localStorage:', storedData);

          console.log("Successfully Logged in");
          window.dispatchEvent(new Event("custom-login-event"));
          this.$router.push('/?success=true');
        }

        else {
          console.log('No data returned from API');
          toast("Invalid email or password!", {
            "theme": "colored",
            "type": "error",
            "position": "top-center",
            "autoClose": 2000,
            "dangerouslyHTMLString": true
          })
        }
      } catch (e) {
        console.error('Login error:', e);
        toast("Invalid email or password!", {
          "theme": "colored",
          "type": "error",
          "position": "top-center",
          "autoClose": 2000,
          "dangerouslyHTMLString": true
        })
      }
    }
  }
};
</script>



<template>
  <div class="login-page">
    <div class="login-card">
      <h1 class="login-title">Login Page</h1>
      <div class="login-form">
        <input type="email" placeholder="Enter Your Email" class="input-field" v-model="user.email" />
        <input type="password" placeholder="Enter Your Password" class="input-field" v-model="user.password" />
        <button class="submit-button" @click="userlogined">Submit</button>
      </div>
    </div>
  </div>
</template>


<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  /* background-color: #EAE0C8; */
  background: linear-gradient(to right, #c9d6ff, #e2e2e2);
}


.login-card {
  /* background-color: #536878; */
  background-color: #171a20;
  opacity: .9;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 30px;
  height: 350px;
  width: 100%;
  max-width: 600px;
  text-align: center;
}


.login-title {
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
  margin-top: 50px;
}

.submit-button:hover {
  background-color: #45a049;
}
</style>
