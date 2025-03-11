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
  <div class="container">
    <div class="profile-container">
      <h1 class="profile-title">Profile</h1>
      <div class="profile-info">
        <h2 class="profile-name">{{ profile.name }}</h2>
        <p class="profile-email">{{ profile.email }}</p>
        <p><strong class="profile-strong">Address:</strong> {{ profile.address }}</p>
        <p><strong class="profile-strong">Phone:</strong> {{ profile.phone }}</p>
      </div>
    </div>

    <div class="order-container">
      <!-- <h2 class="order-title">Your Orders</h2> -->
      <div class="order-items">
        <OrderList></OrderList>
      </div>
    </div>
  </div>
</template>
 
<style scoped>
/* Container for centering */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1800px;
  padding: 20px;
  background-color: #EAE0C8; /* Beige background */
}

/* Profile Container */
.profile-container {
  background-color: #536878; /* Profile card background */
  color: #000000;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  margin-bottom: 40px;
  text-align: center; /* Center text */
}

/* Profile Title */
.profile-title {
  color: rgb(207, 207, 55);
  font-size: 32px;
  margin-bottom: 20px;
}

/* Profile Info */
.profile-info {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  margin-top: 15px;
  text-align: left; /* Left-align text for profile details */
}

/* Profile Name */
.profile-name {
  font-size: 26px;
  color: #D6536D;
  margin-bottom: 10px;
}

/* Profile Email and Other Details */
.profile-email {
  font-size: 18px;
  color: #E43D12;
  margin: 10px 0;
}

.profile-strong {
  color: #EFB11D;
}

/* Order Container */
.order-container {
  background-color: #536878; /* Blue background for the order card */
  color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1000px;
  margin-top: 40px;
  text-align: center; /* Center text */
}

/* Order Title */
.order-title {
  color: #EFB11D;
  font-size: 24px;
  margin-bottom: 15px;
}

/* Order Items */
.order-items {
  display: flex;
  flex-wrap: wrap; /* Allows wrapping of items when screen size is smaller */
  justify-content: center; /* Center items horizontally */
  gap: 20px; /* Space between items */
  margin-top: 20px;
}

/* Order Item Card */
.order-item-card {
  background-color: #ffffff; /* White background for each item */
  color: #000000;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 200px; /* Set a fixed width for the item card */
  text-align: center;
}

/* Card Header */
.order-item-card h3 {
  font-size: 20px;
  color: #536878;
}

/* Card Details */
.order-item-card p {
  font-size: 16px;
  color: #333;
}
</style>
