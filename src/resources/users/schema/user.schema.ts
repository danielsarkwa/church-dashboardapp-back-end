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
    password: {
        type: String,
        required: true
    },
    type: { // this is the type of user (admin / user)
        type: String,
        required: true
    },
    role: { // only when the user is an admin, empty when the user is a mobile user -- so as to help easily make users admins and admin users
        type: {
            groups: [String],
            roleType: String
        },
        required: true,
        default: {
            groups: [],
            roleType: ''
        }
    }
});
