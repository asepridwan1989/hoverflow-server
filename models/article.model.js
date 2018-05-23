const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  liked: {
    type: Number,
    default: 0
  },
  title: {
    type: String,
    require: [true, 'title required']
  },
  content: {
    type: String,
    require: [true, 'content required']
  },
}, {
  timestamps: true
})

let article = mongoose.model('Article', articleSchema)

module.exports = article
