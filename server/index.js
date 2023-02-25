const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const { User } = require('./models/User')
const config = require('./config/key')
const {auth} = require("./middleware/auth");
const cors = require('cors');

mongoose.set("strictQuery", false);
const connect = mongoose.connect(config.mongoURI,
    {
      useNewUrlParser: true, useUnifiedTopology: true,
      
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.use(cors())
//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));
//applicaton/json
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/users', require('./routes/users'))
app.use('/api/video', require('./routes/video'))

app.use('/uploads', express.static('/uploads'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/hello', (req, res) => {
    res.send("안녕")
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})