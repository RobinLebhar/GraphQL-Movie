const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  name: { type: String },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  review: [{
    type: Schema.Types.ObjectId,
    ref: 'review'
  }]
});

MovieSchema.statics.addReview = function(id, content) {
  const Review = mongoose.model('review');

  return this.findById(id)
    .then(movie => {
      const review = new Review({ content, movie })
      movie.reviews.push(review)
      return Promise.all([review.save(), movie.save()])
        .then(([review, movie]) => movie);
    });
}

MovieSchema.statics.findReviews = function(id) {
  return this.findById(id)
    .populate('reviews')
    .then(movie => movie.reviews);
}

mongoose.model('movie', MovieSchema);
