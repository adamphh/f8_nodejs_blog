const Course = require('../models/courses.model');
const utilMongoose = require('../../util/mongoose');

class SitesController {
    async getHomePage(req, res, next) {
        try {
            let courses = await Course.find({});
            if (courses) {
                courses = utilMongoose.processMongooseListToObject(courses);
                res.render('home', { layout: 'home', coursesData: courses });
            }
            // res.render('home', { layout: 'home', coursesData: courses });
            // res.json(courses);
        } catch (err) {
            next(err);
        }
        // res.send('You are staying in Homepage');
    }

    getContact(req, res, next) {
        res.send('You are staying in Contact page');
    }
}

module.exports = new SitesController();
