const Course = require('../models/Course');

exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        res.status(500).send('Server error');
    }
};

exports.getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) return res.status(404).send('Course not found');
        res.json(course);
    } catch (error) {
        res.status(500).send('Server error');
    }
};

exports.addCourse = async (req, res) => {
    try {
        const course = new Course({
            title: req.body.title,
            description: req.body.description,
            contentLinks: req.body.contentLinks
        });
        await course.save();
        res.status(201).send('Course added successfully');
    } catch (error) {
        res.status(500).send('Server error');
    }
};

exports.uploadContent = async (req, res) => {
    try {
        const filePath = req.file.path;
        const course = await Course.findById(req.body.courseId);
        if (!course) return res.status(404).send('Course not found');

        course.contentLinks.push(filePath);
        await course.save();

        res.status(200).send('Content uploaded successfully');
    } catch (error) {
        res.status(500).send('Server error');
    }
};

// ... Add more controllers as needed
