export const getProducts = () => {
    return [
      {
        id: 1,
        name: "Product 1",
        price: 99.99,
        description: "This is a great product with amazing features.",
        usp: "Best value for money.",
        image: "https://via.placeholder.com/300x200?text=Product+1"
      },
      {
        id: 2,
        name: "Product 2",
        price: 149.99,
        description: "A premium product that offers exceptional performance.",
        usp: "High durability and top quality.",
        image: "https://via.placeholder.com/300x200?text=Product+2"
      },
      {
        id: 3,
        name: "Product 3",
        price: 49.99,
        description: "Affordable and reliable product for everyday use.",
        usp: "Great price for the value.",
        image: "https://via.placeholder.com/300x200?text=Product+3"
      },
      {
        id: 4,
        name: "Product 4",
        price: 199.99,
        description: "Top-tier product for professionals with specialized features.",
        usp: "Exceptional performance in all conditions.",
        image: "https://via.placeholder.com/300x200?text=Product+4"
      },
      {
        id: 5,
        name: "Product 5",
        price: 120.99,
        description: "A stylish and functional product for everyday use.",
        usp: "Compact and convenient.",
        image: "https://via.placeholder.com/300x200?text=Product+5"
      },
      {
        id: 6,
        name: "Product 6",
        price: 89.99,
        description: "Great value for money with amazing features.",
        usp: "Affordable and high quality.",
        image: "https://via.placeholder.com/300x200?text=Product+6"
      },
      {
        id: 7,
        name: "Product 7",
        price: 259.99,
        description: "Professional-grade performance for high-end users.",
        usp: "Maximum durability and top-tier performance.",
        image: "https://via.placeholder.com/300x200?text=Product+7"
      },
      {
        id: 8,
        name: "Product 8",
        price: 79.99,
        description: "A reliable product for everyday tasks.",
        usp: "Great for home use.",
        image: "https://via.placeholder.com/300x200?text=Product+8"
      },
      {
        id: 9,
        name: "Product 9",
        price: 189.99,
        description: "High-end product for professionals and enthusiasts.",
        usp: "Superior build quality.",
        image: "https://via.placeholder.com/300x200?text=Product+9"
      },
      {
        id: 10,
        name: "Product 10",
        price: 59.99,
        description: "A great option for budget-conscious consumers.",
        usp: "Affordable yet reliable.",
        image: "https://via.placeholder.com/300x200?text=Product+10"
      },
      {
        id: 11,
        name: "Product 11",
        price: 109.99,
        description: "A versatile product with excellent value.",
        usp: "Perfect for a variety of tasks.",
        image: "https://via.placeholder.com/300x200?text=Product+11"
      },
      {
        id: 12,
        name: "Product 12",
        price: 79.99,
        description: "Simple, easy-to-use, and effective.",
        usp: "Great for quick jobs.",
        image: "https://via.placeholder.com/300x200?text=Product+12"
      },
      {
        id: 13,
        name: "Product 13",
        price: 159.99,
        description: "Exceptional design and top-quality performance.",
        usp: "Perfect for experts and professionals.",
        image: "https://via.placeholder.com/300x200?text=Product+13"
      },
      {
        id: 14,
        name: "Product 14",
        price: 169.99,
        description: "Reliable, efficient, and built to last.",
        usp: "Engineered for peak performance.",
        image: "https://via.placeholder.com/300x200?text=Product+14"
      },
      {
        id: 15,
        name: "Product 15",
        price: 99.99,
        description: "A great mix of value and performance.",
        usp: "Perfect for home and office use.",
        image: "https://via.placeholder.com/300x200?text=Product+15"
      },
      {
        id: 16,
        name: "Product 16",
        price: 219.99,
        description: "Advanced features for professionals.",
        usp: "Built for precision and reliability.",
        image: "https://via.placeholder.com/300x200?text=Product+16"
      },
      {
        id: 17,
        name: "Product 17",
        price: 79.99,
        description: "Great product for daily use and low budget.",
        usp: "Compact and user-friendly.",
        image: "https://via.placeholder.com/300x200?text=Product+17"
      },
      {
        id: 18,
        name: "Product 18",
        price: 139.99,
        description: "A reliable and affordable option for daily tasks.",
        usp: "Excellent value for money.",
        image: "https://via.placeholder.com/300x200?text=Product+18"
      },
      {
        id: 19,
        name: "Product 19",
        price: 249.99,
        description: "Ultimate product for professionals and enthusiasts.",
        usp: "Exceptional performance.",
        image: "https://via.placeholder.com/300x200?text=Product+19"
      },
      {
        id: 20,
        name: "Product 20",
        price: 119.99,
        description: "Reliable and affordable with a solid design.",
        usp: "Easy to use and durable.",
        image: "https://via.placeholder.com/300x200?text=Product+20"
      },
      // Repeat and modify the product details for the next 80 products.
      // You can update `id`, `name`, `price`, `description`, etc.
      // Here I'll just increment the ID to 100 and vary the name.
  
      ...Array.from({ length: 80 }, (_, index) => ({
        id: index + 21,
        name: `Product ${index + 21}`,
        price: (index + 21) * 10, // Just an example of varying prices
        description: `Description for Product ${index + 21}`,
        usp: `USP for Product ${index + 21}`,
        image: `https://via.placeholder.com/300x200?text=Product+${index + 21}`
      }))
    ];
  };