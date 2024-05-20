const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://root:root@cluster0.chmsyfo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri);

client.connect(err => {
    if (!err) {
        console.log('DB Connected');
    } else {
        console.error(err);
    }
});

module.exports = client;