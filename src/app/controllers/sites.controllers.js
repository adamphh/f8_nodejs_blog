const Course = require('../models/courses.model');

class SitesController {
    async getHomePage(req, res, next) {
        const courses = await Course.find({});

        res.json(courses);
        // res.send('You are staying in Homepage');
    }

    getContact(req, res, next) {
        res.send('You are staying in Contact page');
    }
}

module.exports = new SitesController();
