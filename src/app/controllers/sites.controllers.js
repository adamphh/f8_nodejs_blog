class SitesController {
    getHomePage(req, res, next) {
        res.send('You are staying in Homepage');
    }

    getContact(req, res, next) {
        res.send('You are staying in Contact page');
    }
}

module.exports = new SitesController;