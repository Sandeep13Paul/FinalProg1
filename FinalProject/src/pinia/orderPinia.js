import { defineStore } from 'pinia';

export const useOrderStore = defineStore('order',{
    state: () => ({
        orderItems: [],
    }),
    actions: {
        addOrder(items) {
            console.log("hello 2", items);
            const newOrder = {
                orderId: Math.floor(Math.random() * 1000),
                items: items,
            }
            if (!this.orderItems) {
                this.orderItems = [];
            }
            console.log("new order", newOrder)
            this.orderItems.push(newOrder);
            console.log("it is this order items", this.orderItems);
        },
    },
    persist: true,
});