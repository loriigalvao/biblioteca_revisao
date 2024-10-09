import mongoose from 'mongoose';

function db() {
    mongoose
    .connect('mongodb://localhost:27017/revisao')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));
}

export default db;