const Post = require('../models/BlogPost.js');
const Comment = require('../models/Comment.js');
const User = require('../models/User.js');


Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "CASCADE"
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: "CASCADE"
})

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "CASCADE"
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: "CASCADE"
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: "CASCADE"
});

User.hasMany(Post, {
    foreignKey: 'user_id'
});


module.exports = { User, Post, Comment };