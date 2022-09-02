const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Comment, Bandwagon } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // Get ALL users
        users: async () => {
            return User.find().populate('posts').populate({
                path: 'posts',
                populate: 'comments'
            });
        },
        // Get a single user by ID
        user: async (parent, { userId }) => {
            return user.findOne({ _id: userId }).populate('posts').populate({
                path: 'posts',
                populate: 'comments'
            });
        },
        // Get the logged in user
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('posts').populate({
                    path: 'posts',
                    populate: 'comments'
                });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        // Get ALL posts
        posts: async () => {
            return Post.find().populate('comments');
        },
        // Get a single post by ID
        post: async (parent, { postId }) => {
            return Post.findOne({ _id: postId }).populate('comments');
        },
        // Get ALL comments
        comments: async () => {
            return Comment.find();
        },
        // Get a single comment by ID
        comment: async (parent, { commentId }) => {
            return Comment.findOne({ _id: commentId });
        },
        // Get ALL bandwagons
        bandwagons: async () => {
            return Bandwagon.find().populate('followers').populate({
                path: 'followers',
                populate: 'posts'
            }).populate({
                path: 'posts',
                populate: 'comments'
            });
        },
        // Get a single bandwagon by ID
        bandwagon: async (parent, { bandwagonId }) => {
            return Bandwagon.findOne({ _id: bandwagonId }).populate('followers').populate({
                path: 'followers',
                populate: 'posts'
            }).populate({
                path: 'posts',
                populate: 'comments'
            });
        },
    },

    // resolvers optionally accepts 4 positional arguments: (parent, args, context, info)

    Mutation: {
        // Verify user login 
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('No user with this email found!');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect password!');
            }
            const token = signToken(user);
            return { token, user };
        },
        // Create a new user
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        // Find and update the matching user using the destructured args
        updateUser: async (parent, { userId, username, password }) => {
            return await User.findOneAndUpdate(
                { _id: userId },
                { username },
                { password },
                { new: true }
            )
        },
        // Find and remove the matching user using the destructured args
        removeUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findOneAndDelete({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        // Add a post if the user executing this mutation is logged in
        addPost: async (parent, { postCreator, postText }, context) => {
            if (context.user) {
                return await Post.findOneAndUpdate(
                    { _id: postCreator },
                    {
                        $addToSet: { posts: postText },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        // Edit a post if the user executing this mutation is logged in
        editPost: async (parent, { postId, postText }, context) => {
            if (context.user) {
                return await Post.findOneAndUpdate(
                    { _id: postId },
                    {
                        $addToSet: { posts: postText },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        // Remove a post if the user executing this mutation is logged in
        removePost: async (parent, { postId }, context) => {
            if (context.user) {
                return await Post.findOneAndDelete({ _id: postId });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        addComment: async (parent, { commentCreator, commentBody }, context) => {
            if (context.user) {
                return await Comment.findOneAndUpdate(
                    { _id: commentCreator },
                    {
                        $addToSet: { comments: commentBody },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        // Edit a Comment if the user executing this mutation is logged in
        editComment: async (parent, { commentId, commentBody }, context) => {
            if (context.user) {
                return await Comment.findOneAndUpdate(
                    { _id: commentId },
                    {
                        $addToSet: { comments: commentBody },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        // Remove a Comment if the user executing this mutation is logged in
        removeComment: async (parent, { commentId }, context) => {
            if (context.user) {
                return await Comment.findOneAndDelete({ _id: commentId });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        // Create a new bandwagon
        createBandwagon: async (parent, { artistName, artistDescription, fanbaseName }, context) => {
            if (context.user) {
                const bandwagon = await Bandwagon.create({ artistName, artistDescription, fanbaseName });
                const token = signToken(bandwagon);
                return { token, bandwagon };
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        // Find and update the matching user using the destructured args
        editBandwagon: async (parent, { bandwagonId, artistName, artistDescription, fanbaseName }) => {
            if (context.user) {
                return await Bandwagon.findOneAndUpdate(
                    { _id: bandwagonId },
                    { artistName },
                    { artistDescription },
                    { fanbaseName },
                    { new: true }
                )
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        // Find and remove the matching user using the destructured args
        removeBandwagon: async (parent, { bandwagonId }, context) => {
            if (context.user) {
                return await Bandwagon.findOneAndDelete({ _id: bandwagonId});
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    }
};

module.exports = resolvers;