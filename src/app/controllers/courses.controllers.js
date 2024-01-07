const Course = require('../models/courses.model');
const { processMongooseDetailToObject } = require('../../util/mongoose');

class CoursesController {
    // [GET] /courses/:slug
    async getCourse(req, res, next) {
        // res.send('Course details');
        let slug = req.params.slug || '';

        try {
            let course = await Course.findOne({ slug: slug });
            if (course && course.name) {
                course = processMongooseDetailToObject(course);
                res.render('courses/view', { course: course });
            }
        } catch (err) {
            next(err);
        }
    }

    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    // [POST] /courses/store
    async store(req, res, next) {
        // res.json(req.body)
        const formData = req.body;
        const image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`;
        formData.image = image;
        const course = new Course(formData);
        const result = await course.save();
        if (result) {
            res.redirect('/');
        }
    }
}

module.exports = new CoursesController();
