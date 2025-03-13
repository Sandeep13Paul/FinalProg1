// export const getProducts = () => {
 
//     return [
//       {
//         id: 1,
//         name: "Product 1",
//         description: "This is a great product with amazing features.",
//         usp: "Best value for money.",
//         image: "https://via.placeholder.com/300x200?text=Product+1",
//         merchantList: [
//           { id: 1, name: "Merchant 1", price: 89.99 },
//           { id: 2, name: "Merchant 2", price: 95.99 }
//         ]
//       },
 
 
//       // Repeat and modify the product details for the next 80 products.
//       // You can update `id`, `name`, `price`, `description`, etc.
//       // Here I'll just increment the ID to 100 and vary the name.
  
//       ...Array.from({ length: 80 }, (_, index) => ({
//         id: index + 2,
//         name: `Product ${index + 2}`,
//         price: (index + 2) * 10, // Just an example of varying prices
//         description: `Description for Product ${index + 2}`,
//         usp: `USP for Product ${index + 2}`,
//         image: `https://via.placeholder.com/300x200?text=Product+${index + 21}`,
//         merchantList: [
//           { id: index + 3, name: `Merchant ${index + 3}`, price: (index + 2) * 9.5 },
//           { id: index + 4, name: `Merchant ${index + 4}`, price: (index + 2) * 9.9 }
//         ]
//       }))
//     ];
//   };
 
 
 
// export const getProducts = async () => {
//      const getAllProducts = async () => {
//        try {
//         const response = await fetch(`http://localhost:8080/Products/getAllProducts`);
//         const data = await response.json();
//         console.log(data);
//         return data.data;
//        }
//        catch (e){
//         console.log(e);
      
//        }
//     }
 
//     const data = await getAllProducts();
//     console.log("get all data", data);
//     return data;
// }
 
export const getProducts = async () => {
 
  try {
    const response = await fetch(`http://localhost:8080/Search/getAllProducts`);
    const data = await response.json();
    console.log("get all data", data.data);
    return data.data || [];
   
  } catch (e) {
    console.log(e);
    return [];
  }
  };
   
   
  export const getProductById = async (id) => {
   
  try {
    const response = await fetch(`http://localhost:8080/Search/getByProductId/${id}`);
    const data = await response.json();
    console.log("get all data", data.data);
    return data.data || [];
   
  } catch (e) {
    console.log(e);
    return [];
  }
  };
   
  export const addToCartItem = async (userId, product, productMerchantId, productPrice, merchantName, token) => {
  try {
    // console.log("hi", productMerchantId)
    // console.log(product.imageUrl);
    
    const response = await fetch(`http://localhost:8080/Cart/addToCart/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        productMerchantId: productMerchantId,
        name: product.productName,
        merchantName: merchantName,
        price: productPrice,
        quantity: 1,
        image: product.productImageUrl
      }),
    });
   
    if (response.ok) {
      const updatedCart = await response.json();
      console.log(updatedCart.data);
      return updatedCart.data;
    } else {
      console.error('Failed to add item to cart');
    }
  } catch (error) {
    console.error('Error adding item to cart:', error);
  }
  };
   
  export const getProductByName = async (searchQuery) => {
  try {
   
    const response = await fetch(`http://localhost:8080/Search/getByProductName?productName=${searchQuery}`);
   
    if (response.ok) {
      const searchedItems = await response.json();
      console.log(searchedItems.data);
      return searchedItems.data;
    } else {
      console.error('Failed to add item to cart');
    }
    
  } catch (error) {
      console.log("Product Not Present with the provided name");
  }
  }
   
  export const loginUser = async (details) => {
  try {
    console.log(details);
    const response = await fetch(`http://localhost:8080/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: details.email,
        password: details.password
      }),
    });
   
    const data = await response.json();
    // console.log("api",await response.json());
    return data;
   
  } catch (error) {
    console.error("Invalid credentials");
  }
  }
   
  export const registerUser = async (details) => {
  try {
    console.log(details);
    const response = await fetch(`http://localhost:8080/auth/create-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: details.name,
        email: details.email,
        password: details.password
      }),
    });
   
    const data = await response.json();
    // console.log("api",await response.json());
    return data;
   
   
   
  } catch (error) {
    console.error("Error in registering user " + error);
  }
  }
   
  export const getProfileById = async (userId) => {
  try {
    const response = await fetch(`http://localhost:8080/user/getUserById/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    });
    const data = await response.json();
    console.log("get profile data", data.data);
    return data.data || [];
   
  } catch (e) {
    console.log(e);
    return [];
  }
  }
   
  export const getProductMerchantId = async (productId, merchantId) => {
  try {
    const response = await fetch(`http://localhost:8080/Products/getProductMerchantId/${productId}/${merchantId}`);
    const data = await response.json();
    console.log("get product merchant id", data.data);
    return data.data || [];
   
   
  } catch (e) {
    console.log(e);
    return [];
  }
  }
   
  export const addToOrders = async (userId, totalPrice, token) => {
  try {
    const response = await fetch(`http://localhost:8080/Orders/addToOrderHistory/${userId}/${totalPrice}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log("Added to order", data);
    return data || [];
    
  } catch (error) {
    console.error(error);
    
  }
  }
   
  export const getAllCartItems = async (userId, token) => {
  try {
    const response = await fetch(`http://localhost:8080/Cart/getAllCartItems/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log("get product merchant id", data.data);
    return data.data || [];
    
  } catch (error) {
    console.error(error);
    
  }
  }
   
  export const updateCartQuantity = async (item, flag, userId, token) => {
  try {
    console.log("update product", item, flag, userId, token);
    const response = await fetch(`http://localhost:8080/Cart/updateQuantity/${userId}/${item.productMerchantId}?increase=${flag}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data);
    
    console.log("quantity", data.data);
    return data.data || [];
    
  } catch (error) {
    console.error(error);
    
  }
  }
   
  export const removeItemFromCart = async (userId, productMerchantId, token) => {
    try {
      const response = await fetch(`http://localhost:8080/Cart/removeFromCart/${userId}/${productMerchantId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log("quantity", data.data);
      return data.data || [];
      
    } catch (error) {
      console.error(error);
      
    }
    }
   
  export const clearCart = async (userId, token) => {
    try {
      const response = await fetch(`http://localhost:8080/Cart/clearCart/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log("Deleted cart", data);
      return data || [];
      
    } catch (error) {
      console.error(error);
      
    }
    
  }
  export const getOrder = async (userId, token) => {
    try {
      const response = await fetch(`http://localhost:8080/Orders/getAllOrders/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      console.log("All orders list", data.data);
      return data.data || [];
    }
    catch (error) {
      console.error(error);
    }
  }
   
  export const getUserDetails = async (userId, token) => {
    try {
      const response = await fetch(`http://localhost:8080/home/getUserDetails/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
      const datas = await response.json();
      console.log("User details", datas);
      return datas || [];
    }
    catch (error) {
      console.error(error);
    }
  }