import React from 'react';

const courses = [
    { id: 1, title: 'Course 1' },
    { id: 2, title: 'Course 2' },
    // ... add more courses for demonstration
];

function CourseList() {
    return (
        <div className="container mt-5">
            <h1>Courses</h1>
            <ul className="list-group">
                {courses.map(course => (
                    <li key={course.id} className="list-group-item">
                        {course.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CourseList;
