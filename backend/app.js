const express = require('express');
const cors = require('cors');
const app = express();
const loginRouter = require('./routers/login');
const productRouter = require('./routers/products');
const categoryRouter = require('./routers/category');

app.use(cors());
app.use(express.json());
app.use('/login',loginRouter);
app.use('/product',productRouter)
app.use('/category',categoryRouter)

app.listen(3000, () => {
    console.log('程序已经运行');
});