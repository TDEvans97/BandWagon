const { Schema, Types, model } = require('mongoose');
const dateFormat = require("../utils/dateFormat");

const commentSchema = new Schema(
    {
        commentBody: {
            type: String,
            require: true,
            maxLength: 280
        },
        commentCreator: {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
    }
);
const Comment = model('Comment', commentSchema);

module.exports = Comment;