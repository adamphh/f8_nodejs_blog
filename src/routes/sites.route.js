const express = require('express');
const router = express.Router();

// const getNews = require('../app/controllers/news.controllers');  
const sitesController = require('../app/controllers/sites.controllers');

router.use('/contact', sitesController.getContact);

// Get Homepage
router.use('/', sitesController.getHomePage);

module.exports = router;