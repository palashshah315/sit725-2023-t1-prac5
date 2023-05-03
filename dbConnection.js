const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://palashshah315:palashshah315@cluster0.i0bhvhx.mongodb.net/test?retryWrites=true&w=majority';
const client = new MongoClient(uri);

client.connect(err => {
    if (!err) {
        console.log('DB Connected');
    } else {
        console.error(err);
    }
});

module.exports = client;