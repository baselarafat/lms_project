const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    enrolledCourses: [String],  // Array of courseIDs
    progress: Object  // Dictionary with courseID as key and progress percentage as value
});
module.exports = mongoose.model('User', userSchema);
