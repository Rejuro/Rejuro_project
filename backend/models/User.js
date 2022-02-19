const {model, Schema, Schema: { Types: {ObjectId}}} = require('mongoose')

const schema = new Schema({
    login: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    img: {
        type: String,
        default: ''
    },
    city: {
        type: String,
        default: ''
    },
    bio: {
        type: String,
        default: ''
    },
    url: {
        type: String,
        default: ''
    },
    company: {
        type: String,
        default: ''
    },
    birthday: {
        type: Number,
        min: 6,
        max: 65
    },
    role_at_project: {
        type: String,
        default: 'member'
    },
    role_at_site: {
        type: String,
        default: 'user'
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    created_at: {
        type: Date,
        default: Date.now
    }
    
})
