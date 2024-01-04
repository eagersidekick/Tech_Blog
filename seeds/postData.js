const { Post } = require('../models');

const postData = [
    {
        title: "Test Blog Post 1",
        body: "Write your tech blog information here!",
        user_id: 1
    },
    {
        title: "Multiple Blog Posts Can Be Submitted",
        body: "They are all tracked by user!",
        user_id: 2
    },
    {
        title: "Here is another one!",
        body: "Wow! Such blog!",
        user_id: 2

    },
    {
        title: "An article about Tech",
        body: "They've created a robot that can steal your job!",
        user_id: 5
    },
    {
        title: "Blog Test",
        body: "This is the body of the blog post.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;