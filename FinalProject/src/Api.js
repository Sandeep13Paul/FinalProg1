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

  export const cartDetails = [

  ];

  

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
    const response = await fetch(`http://10.20.5.3:8080/Products/getAllProducts`);
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
    const response = await fetch(`http://10.20.5.3:8080/Products/getByProductId/${id}`);
    const data = await response.json();
    console.log("get all data", data.data);
    return data.data || []; 

  } catch (e) {
    console.log(e);
    return [];
  }
};

export const addToCart = async (userId, product) => {
  try {
    const response = await fetch(`http://10.20.5.3:8080/cart/addToCart/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        productMerchantId: product.productMerchantId,
        name: product.name,
        price: product.price,
        merchantName: product.merchantName,
        quantity: 1,
      }),
    });
 
    if (response.ok) {
      const updatedCart = await response.json();
      console.log(updatedCart); 
    } else {
      console.error('Failed to add item to cart');
    }
  } catch (error) {
    console.error('Error adding item to cart:', error);
  }
};
 
export const getProductByName = async (searchQuery) => {
   try {

    const response = await fetch(`http://10.20.5.3:8080/api/products/search?productName=${searchQuery}`);
 
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