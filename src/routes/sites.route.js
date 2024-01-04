const express = require('express');
const router = express.Router();

// const getNews = require('../app/controllers/news.controllers');
const sitesController = require('../app/controllers/sites.controllers');

router.get('/contact', sitesController.getContact);

// Get Homepage
router.get('/', sitesController.getHomePage);

module.exports = router;
