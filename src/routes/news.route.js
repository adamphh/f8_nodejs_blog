const express = require('express');
const router = express.Router();

// const getNews = require('../app/controllers/news.controllers');
const newsController = require('../app/controllers/news.controllers');

// GET news
//router.get('/news', getNews());
// router.use('/', getNews);

// Route sẽ đọc từ trên xuống dưới. nếu để  / ở trên /:slug thì khi chạy nó sẽ đọc được / và chạy luôn thay vì chạy /:slug. Vì vậy cần phải để /:slug lên trước /
router.use('/:slug', newsController.showNews);

router.use('/', newsController.getNews);


module.exports = router;