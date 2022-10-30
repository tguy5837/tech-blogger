const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});


// Vote.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'SET NULL'
// });

// Vote.belongsTo(Post, {
//     foreignKey: 'post_id',
//     onDelete: 'SET NULL'
// });

// User.hasMany(Vote, {
//     foreignKey: 'user_id'
// });

// Post.hasMany(Vote, {
//     foreignKey: 'post_id'
// });

module.exports = { User, Post, Comment };