import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
    title: {}
});
const Video=mongoose.model('Video',videoSchema);