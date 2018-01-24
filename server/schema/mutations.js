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
    //ajout de film
    addMovie: {
      type: MovieType,
      args: {
        title: { type: GraphQLString }
      },
      resolve(parentValue, { title }) {
        return (new Movie({ title })).save().then( (response) => {
          return response;
        }).catch( (erreur) => {
          return new Error("Ce film existe déja.");
        });
      }
    },
    addReviewToMovie: {
      // ajouter une review au film ayant l'id movieId
      type: MovieType,
      args: {
        content: { type: GraphQLString },
        movieId: { type: GraphQLID }
      },
      resolve(parentValue, {movieId,content}) {
        return Movie.addReview(movieId, content);
      }
    },
    likeReview: {
      //liker une review par son id
      type: ReviewType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Review.like(id);
      }
    },
    deleteMovie: {
      // supprimer un film par son id
      type: MovieType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Movie.remove({ _id: id });
      }
    }
  }
});

module.exports = mutation;
