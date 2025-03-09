<script>
import OrderList from './OrderList.vue';
 
export default {
  data() {
    return {
      profile: {
        email: 'priyanshu@12121',
        name:"Priyanshu",
        address: '123 Vintage St, Springfield, IL',
        phone: '(123) 456-7890'
      }
    };
  },
  components: {
    OrderList
  }
};
</script>
 
<template>
  <div class="profile-container">
    <h1>Profile</h1>
    <div class="profile-info">
      <h2>{{ profile.name }}</h2>
      <p>{{ profile.email }}</p>
      <p><strong>Address:</strong> {{ profile.address }}</p>
      <p><strong>Phone:</strong> {{ profile.phone }}</p>
    </div>
    <div>
      <OrderList></OrderList>
    </div>
  </div>
</template>
 
<style scoped>
.profile-container {
  background-color: #E9E9E1;
  color: #000000;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
 
h1 {
  color: #E43D12;
  font-size: 28px;
  margin-bottom: 20px;
}
 
.profile-info {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
}
 
.profile-info h2 {
  font-size: 24px;
  color: #D6536D;
}
 
.profile-info p {
  font-size: 18px;
  color: #E43D12;
  margin: 10px 0;
}
 
.profile-info strong {
  color: #EFB11D;
}
</style>