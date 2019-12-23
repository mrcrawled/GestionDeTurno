const AuthenticationController = require('./authentication.controller');

module.exports = class AuthenticationRouter {
    constructor(router, db) {
        this.router = router;
        this.controller = new AuthenticationController(db);
    }
    exports = () => {
        this.router
            .post('/login', this.controller.loginSession )
            .post('/logout', this.controller.logoutSession )
            .post('/reset-password',this.controller.resetPassword )
            .post('/change-password', this.controller.changePassword )
            .post('/change-password/:token/:id', this.controller.changePassword );
    }
}
