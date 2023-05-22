const { MongoClient } = require('mongodb');

const username = encodeURIComponent("<username>");
const password = encodeURIComponent("<password>");

const uri = 
'mongodb+srv://maurizioguerrero:peacU9KulOAmzgJb@cluster0.emvc1zy.mongodb.net/?retryWrites=true&w=majority';


const client = new MongoClient(uri);

const database = client.db('test');
const products = database.collection('products');
const orders = database.collection('orders');

module.exports = {
    products,
    orders,
}