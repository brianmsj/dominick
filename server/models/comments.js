const mongoose = require('mongoose');
const Schema = mongoose.Schema


const CommentSchema = mongoose.Schema({
  name: String,
  date: String,
  comment: String
})


const Comment = mongoose.model('Comment',CommentSchema)
module.exports = Comment;
