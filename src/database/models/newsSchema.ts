import mongoose from 'mongoose';

const NewsSchema = new mongoose.Schema({
    hat: String,
    title: String,
    text: String,
    author: String,
    img: String, 
    publishDate: Date,
    link: String, 
    active: Boolean
});

export default NewsSchema;