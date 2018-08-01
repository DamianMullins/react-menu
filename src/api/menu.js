
const data = {
    "menu": {
        "restaurantName": "Test",
        "items": [{
            "id": 1,
            "name": "Traditional Lemonade &amp; Mint",
            "price": 2.51
        },
        {
            "id": 2,
            "name": "Mojo Juice, Apple",
            "price": 2.51
        },
        {
            "id": 3,
            "name": "Mojo Juice, Mango",
            "price": 2.51
        },
        {
            "id": 4,
            "name": "Mojo Juice, Orange",
            "price": 2.51
        },
        {
            "id": 5,
            "name": "Tropical Lightning, Apple",
            "price": 2.51,
            "quantity": 0
        }]
    },
    "basket": {
        "address": "Tinsel Town- Demo, 1st Floor, Block 4, Imperial Place, Maxwell Road, AR51 1JN",
        "items": [{
            "id": 2,
            "quantity": 2,
            "name": "Mojo Juice, Apple",
            "price": 2.51
        }],
        "deliveryFee": 0.5
    }
};

const getData = () => new Promise(resolve => {
    setTimeout(() => {
        resolve(data);
    }, 1000);
});

export default {
    getData
};
