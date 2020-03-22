import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        default: ''
    },
    avatarUrl: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        default: ''
    },
    address: {
        type: {
            country: String, 
            state: String,
            city: String,
            town: String,
        },
        default: {
            country: '',
            state: '',
            city: '',
            town: ''
        }
    },
    groups: {
        type: [String],
        default: []
    },
    password: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
});
