import { gql } from "@apollo/client";

export const QUERY_ALL_USERS = gql`
  query AllUsers {
  users {
    _id
    username
    email
  }
}
`;

export const QUERY_SINGLE_USER = gql`
query SingleUser($userId: ID!) {
  user(userId: $userId) {
    _id
    username
    email
    posts {
      _id
      postText
      createdAt
    }
    bandwagons {
      fanbaseName
      _id
    }
  }
}
`;

export const QUERY_ME = gql`
query Me {
  me {
    _id
    username
    email
    posts {
      _id
      postText
      createdAt
    }
    bandwagons {
      _id
      artistName
      fanbaseName
    }
  }
}
`;

export const QUERY_ALL_POSTS = gql`
query AllPosts {
  posts {
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

export const QUERY_SINGLE_POST = gql`
query SinglePost($postId: ID!) {
  post(postId: $postId) {
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

export const QUERY_ALL_COMMENTS = gql`
query AllComments {
  comments {
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

export const QUERY_SINGLE_COMMENT = gql`
query SingleComment($commentId: ID!) {
  comment(commentId: $commentId) {
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

export const QUERY_ALL_BANDWAGONS = gql`
query AllBandwagons {
  bandwagons {
    _id
    artistName
    artistDescription
    fanbaseName
  }
}
`;

export const QUERY_SINGLE_BANDWAGON = gql`
query Bandwagon($bandwagonId: ID!) {
  bandwagon(bandwagonId: $bandwagonId) {
    _id
    artistName
    artistDescription
    fanbaseName
  }
}
`;
