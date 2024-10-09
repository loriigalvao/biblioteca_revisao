import express from 'express';
import userRouter from './routers/userRouter.js';
import livroRouter from './routers/livroRouter.js';
import rentRouter from './routers/rentRouter.js';
import db from './config/db.js';

db();

const app = express();
app.use(express.json());

app.use('/users', userRouter);
app.use('/livros', livroRouter);
app.use('/rents', rentRouter);

app.listen(3000, () => console.log('Server is running on port 3000'));