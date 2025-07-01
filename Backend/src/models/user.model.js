import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
    Username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 20,
        index: true // Create an index for faster lookups   
    },

    fullname: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        trim: true,
        minlength: 6,
        select: false, // Exclude password from queries by default


    },
    createdAt: {
        type: Date,
        default: Date.now,

    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    profilePicture: {
        type: String,
        default: ''
    },
   watchhistory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Video'
    }],
    refreshToken: {
        type: String,
        default: ''
    },
    avatar: {
        type: String,
        default: 'https://res.cloudinary.com/dz1qj3x7h/image/upload/v1735681234/avatars/default-avatar.png',
        required: true
    },
})

const User=mongoose.model('User',userSchema);