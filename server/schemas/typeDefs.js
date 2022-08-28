const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type Book {
    _id: ID
    authors: String
    description: String
    image: String
    link: String
    title: String
  }

  type Query {
    books: [Book]!
    book(bookId: ID!): Book
  }

  type Mutation {
    addBook(authors: String!, description: String!, image: String, link: String, title: String!): Book
    removeBook(bookId: ID!): Book
  }
`;

module.exports = typeDefs;
