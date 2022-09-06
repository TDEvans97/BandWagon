import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const UPDATE_USER = gql`
mutation UpdateUser($userId: ID!, $username: String!, $password: String!) {
  updateUser(userId: $userId, username: $username, password: $password) {
    _id
    username
  }
}
`;

export const REMOVE_USER = gql`
mutation RemoveUser($userId: ID!) {
  removeUser(userId: $userId) {
    _id
    username
  }
}
`;

export const ADD_POST = gql`
mutation AddPost($postText: String!, $postCreator: ID!) {
  addPost(postText: $postText, postCreator: $postCreator) {
    _id
    postText
    createdAt
    postCreator {
      _id
      username
    }
  }
}
`;

export const EDIT_POST = gql`
mutation EditPost($postId: ID!, $postText: String!) {
  editPost(postId: $postId, postText: $postText) {
    _id
    postText
    createdAt
    postCreator {
      _id
      username
    }
  }
}
`;

export const REMOVE_POST = gql`
mutation RemovePost($postId: ID!) {
  removePost(postId: $postId) {
    _id
  }
}
`;

export const ADD_COMMENT = gql`
mutation AddComment($commentBody: String!, $commentCreator: ID!) {
  addComment(commentBody: $commentBody, commentCreator: $commentCreator) {
    _id
    commentBody
    commentCreator {
      _id
      username
    }
    createdAt
  }
}
`;

export const EDIT_COMMENT = gql`
mutation EditComment($commentId: ID!, $commentBody: String!) {
  editComment(commentId: $commentId, commentBody: $commentBody) {
    _id
    commentBody
    createdAt
    commentCreator {
      _id
      username
    }
  }
}
`;

export const REMOVE_COMMENT = gql`
mutation RemoveComment($commentId: ID!) {
  removeComment(commentId: $commentId) {
    _id
  }
}
`;

export const CREATE_BANDWAGON = gql`
mutation CreateBandwagon($artistName: String!, $artistDescription: String!, $fanbaseName: String!) {
  createBandwagon(artistName: $artistName, artistDescription: $artistDescription, fanbaseName: $fanbaseName) {
    _id
    artistName
    artistDescription
    fanbaseName
  }
}
`;

export const EDIT_BANDWAGON = gql`
mutation EditBandwagon($bandwagonId: ID!, $artistName: String!, $artistDescription: String!, $fanbaseName: String!) {
  editBandwagon(bandwagonId: $bandwagonId, artistName: $artistName, artistDescription: $artistDescription, fanbaseName: $fanbaseName) {
    _id
    artistName
    artistDescription
    fanbaseName
  }
}
`;

export const REMOVE_BANDWAGON = gql`
mutation RemoveBandwagon($bandwagonId: ID!) {
  removeBandwagon(bandwagonId: $bandwagonId) {
    _id
  }
}
`;
