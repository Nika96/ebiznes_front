import React from "react";

export class OrderedProducts {
    id;
    productID;
    productName;
    quantity;
    orderID;
}

const url = "http://localhost:9000/ordered-product";

export class OrderedProductsService {

    async getAllOrderedProducts(): Promise<Array<OrderedProducts>> {
        let res;
        try {
            res = await fetch(url);
        } catch(error) {
            console.log('Cannnot get products, error: ' + error);
        }
        return JSON.parse(await res.text());
    }

    async createOrderedProducts(productID, productName, quantity, orderID): Promise<OrderedProducts> {
        let res;
        try {
            var opt = {
                'method': 'POST',
                body: JSON.stringify({"id": 0, "productID": productID, "productName": productName,
                    "quantity": quantity, "orderID": orderID})
            }
            res = await fetch(url, opt);
        } catch(error) {
            console.log('Cannnot create an order, error: ' + error);
        }
        return JSON.parse(await res.text());
    }

    async deleteOrder(id, productID, productName, quantity, orderID): Promise<OrderedProducts> {
        let res;
        try {
            var opt = {
                'method': 'DELETE',
                body: JSON.stringify({"id": id, "productID": productID, "productName": productName,
                    "quantity": quantity, "orderID": orderID})
            }
            res = await fetch(url, opt);
        } catch(error) {
            console.log('Cannnot delete ordered products, error: ' + error);
        }
        return JSON.parse(await res.text());
    }

    async getOrderedProductsByID(id): Promise<OrderedProducts> {
        let res;
        try {
            res = await fetch(url + '/' + id);
        } catch(error) {
            console.log('Cannnot get order with given ID, error: ' + error);
        }
        return JSON.parse(await res.text());
    }
}