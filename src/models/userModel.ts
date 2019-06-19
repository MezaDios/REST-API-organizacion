import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const newSchema = new Schema({
    user: { type: String, required: true },
    password: { type: String, required: true }
});

const model = mongoose.model('users', newSchema, 'users');

export default model;