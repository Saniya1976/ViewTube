import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 100,
        index: true // Create an index for faster lookups
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlength: 500 // Limit description length
    },
    duration: {
        type: Number,
        required: true,
        min: 0 // Duration should be a non-negative number

    },
    videoUrl: {
        type: String,
        required: true

    },
    thumbnailUrl: {
        type: String,
        required: true
    },
    uploader: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    ispublished: {
        type: Boolean,
        default: false
    },
});
const Video=mongoose.model('Video',videoSchema);