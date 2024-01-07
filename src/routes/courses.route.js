const express = require('express');
const router = express.Router();

// const getNews = require('../app/controllers/news.controllers');
const coursesController = require('../app/controllers/courses.controllers');

router.get('/courses/create', coursesController.create);

router.post('/courses/store', coursesController.store);

router.get('/courses/:slug', coursesController.getCourse);

module.exports = router;