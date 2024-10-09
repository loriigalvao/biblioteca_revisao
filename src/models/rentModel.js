import { Schema, model } from 'mongoose';

const rentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    book: {
        type: Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    rentDate: {
        type: Date,
        required: true
    },
    returnDate: {
        type: Date,
        required: true
    }
});

export default model('Rent', rentSchema);