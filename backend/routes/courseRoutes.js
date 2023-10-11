const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');
const { checkAuth } = require('../middleware/checkAuth');  // Assuming you have an authentication middleware
const upload = require('../utils/fileUpload');  // If you're using multer for file uploads

router.get('/', courseController.getAllCourses);       // Get a list of all courses
router.get('/:id', courseController.getCourseById);   // Get details of a specific course by its ID
router.post('/', checkAuth, courseController.addCourse);    // Add a new course (with authentication)
router.post('/upload', checkAuth, upload.single('content'), courseController.uploadContent);  // Upload content for a course

// ... more routes can be added for editing, deleting, etc.

module.exports = router;
