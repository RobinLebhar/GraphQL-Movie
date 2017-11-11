const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require('mongoose');
const Movie = mongoose.model('movie');
const Review = mongoose.model('review');
const MovieType = require('./movie_type');
const ReviewType = require('./review_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addMovie: {
      type: MovieType,
      args: {
        name: { type: GraphQLString }
      },
      resolve(parentValue, { name }) {
        return (new Movie({ name })).save()
      }
    },
    addReviewToMovie: {
      type: MovieType,
      args: {
        content: { type: GraphQLString },
        movieId: { type: GraphQLID }
      },
      resolve(parentValue, { content, movieId }) {
        return Movie.addReview(movieId, content);
      }
    },
    likeReview: {
      type: ReviewType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Review.like(id);
      }
    },
    deleteMovie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Movie.remove({ _id: id });
      }
    }
  }
});

module.exports = mutation;
