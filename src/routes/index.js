const newsRoutes = require('./news.route');
const sitesRoutes = require('./sites.route');
const coursesRoutes = require('./courses.route');

function route(app) {
    app.use('/news', newsRoutes);

    app.use('/', sitesRoutes);

    app.use('/', coursesRoutes);
}

module.exports = route;
