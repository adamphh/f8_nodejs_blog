// [GET] news
// const getNews = (req, res) => {
//     return res.render('news');
// }

// module.exports = getNews;

class NewsController {
    constructor() { }

    getNews(req, res) {
        return res.render('news');
    }

    // [GET] news/:slug
    showNews(req, res) {
        return res.send('news details');
    }
}
module.exports = new NewsController();
