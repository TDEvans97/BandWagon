const { Schema, model } = require("mongoose");

const bandwagonSchema = new Schema(
    {
        artistName: {
            type: String,
            require: true,
            maxLength: 60
        }, 
        artistDescription: {
            type: String,
            require: true,
            maxLength: 280
        },
        fanbaseName: {
            type: String,
            require: true,
            maxLength: 60
        },
        followers: [
            {
            type: Schema.Types.ObjectId,
            ref: "User",
            }
        ],
        posts: [
            {
                type: Schema.Types.ObjectId,
                ref: "Post",
            }
        ],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    },
);

bandwagonSchema.virtual("followerCount").get(function () {
    return this.followers.length;
});

const Bandwagon = model('Bandwagon', bandwagonSchema);

module.exports = Bandwagon;