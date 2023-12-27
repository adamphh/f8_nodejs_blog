const newsRoutes = require('./news.route');
const sitesRoutes = require('./sites.route');

function route(app) {
    app.use('/news', newsRoutes);

    app.use('/', sitesRoutes);
}

module.exports = route;
