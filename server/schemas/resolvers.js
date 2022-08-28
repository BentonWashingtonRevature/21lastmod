const { Book } = require('../models');

const resolvers = {
    Query: {
        books: async () => {
            return Book.find();
        },

        book: async (parent, { bookId }) => {
            return Book.findOne({_id: bookId});
        },
    },

    Mutation: {},
};

module.exports = resolvers;