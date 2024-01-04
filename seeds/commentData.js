const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "I'm commenting",
        user_id: 1,
        post_id: 3,
        
    },
    {
        comment_text: "Follow my blog :)",
        user_id: 2,
        post_id: 1,
        
    },
    {
        comment_text: "Neat blog!",
        user_id: 3,
        post_id: 4,
        
    },
    {
        comment_text: "Don't forget to reply to my post!",
        user_id: 1,
        post_id: 2,
        
    },
    {
        comment_text: "Think again!",
        user_id: 2,
        post_id: 3,
        
    },
    {
        comment_text: "Not sure about this one.",
        user_id: 3,
        post_id: 1,
        
    },
    {
        comment_text: "Hi! So glad you got a blog!",
        user_id: 3,
        post_id: 2,
        
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;