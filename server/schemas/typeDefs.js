const { gql } = require('apollo-server-express');

const typeDefs = gql`
   type User {
    _id: ID
    username: String
    email: String
    password: String
    posts: [Post]
    bandwagons: [Bandwagon]
  }

  type Post {
    _id: ID
    postText: String
    createdAt: String
    postCreator: User
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentBody: String
    commentCreator: User
    createdAt: String
  }

  type Bandwagon {
    _id: ID
    artistName: String
    artistDescription: String
    fanbaseName: String
    followers: [User]
    posts: [Post]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(userId: ID!): User
    me: User
    posts: [Post]!
    post(postId: ID!): Post
    comments: [Comment]!
    comment(commentId: ID!): Comment
    bandwagons: [Bandwagon]
    bandwagon(bandwagonId: ID!): Bandwagon
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): User
    updateUser(userId: ID! username: String!, password: String!): User
    removeUser(userId: ID!): User
    addPost(postText: String!, postCreator: ID!): Post
    editPost(postId: ID! postText: String!): Post
    removePost(postId: ID!): Post
    addComment(commentBody: String!, commentCreator: ID!): Comment
    editComment(commentId: ID! commentBody: String!): Comment
    removeComment(commentId: ID!): Comment

    createBandwagon(artistName: String!, artistDescription: String!, fanbaseName: String!): Bandwagon
    editBandwagon(bandwagonId: ID!, artistName: String!, artistDescription: String!, fanbaseName: String!): Bandwagon
    removeBandwagon(bandwagonId: ID!): Bandwagon
  }
`;

module.exports = typeDefs;