import { Schema, model } from 'mongoose';

const livroSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
});

export default model('Livro', livroSchema);