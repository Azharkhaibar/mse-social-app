const express = require('express');
const app = express();
const mongoose = require('mongoose')
const PORT = 3000;

const mongoUrl = "mongodb+srv://JOPEDE:admin@cluster0.hivu6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoUrl).then(() => {
    console.log('mongoose Connected');
}).catch((err) => {
    console.log(err);
    
})

app.get('/', (req, res) => {
    res.send({status: 'Database JOPEDE Connected'})
})

app.post('/register', async (req, res) => {
    const data = req.body
})

app.listen(PORT, () => {
    console.log(`${PORT} Succedded`);
    
})