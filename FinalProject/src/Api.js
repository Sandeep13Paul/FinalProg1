export const getProducts = () => {

    return [
      {
        id: 1,
        name: "Product 1",
        description: "This is a great product with amazing features.",
        usp: "Best value for money.",
        image: "https://via.placeholder.com/300x200?text=Product+1",
        merchantList: [
          { id: 1, name: "Merchant 1", price: 89.99 },
          { id: 2, name: "Merchant 2", price: 95.99 }
        ]
      },


      // Repeat and modify the product details for the next 80 products.
      // You can update `id`, `name`, `price`, `description`, etc.
      // Here I'll just increment the ID to 100 and vary the name.
  
      ...Array.from({ length: 80 }, (_, index) => ({
        id: index + 2,
        name: `Product ${index + 2}`,
        price: (index + 2) * 10, // Just an example of varying prices
        description: `Description for Product ${index + 2}`,
        usp: `USP for Product ${index + 2}`,
        image: `https://via.placeholder.com/300x200?text=Product+${index + 21}`,
        merchantList: [
          { id: index + 3, name: `Merchant ${index + 3}`, price: (index + 2) * 9.5 },
          { id: index + 4, name: `Merchant ${index + 4}`, price: (index + 2) * 9.9 }
        ]
      }))
    ];
  };

  export const cartDetails = [

  ];

  