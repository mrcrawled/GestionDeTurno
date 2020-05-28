const ObraSocialController = require('./obra-social.controller');
const { isLoggedIn } = rootRequire('utils/auth.js');

module.exports = class ObraSocialRoutes {
    constructor(router, db){
        this.router = router;
        this.controller = new ObraSocialController(db);
    }
    exports = () => {
        this.router.route('/obras-sociales')
            .get(isLoggedIn, this.controller.get )
            .post(isLoggedIn, this.controller.create );
        this.router.route('/obras-sociales/:id')
            .get(isLoggedIn,this.controller.getById )
            .put(isLoggedIn, this.controller.update )
            .delete(isLoggedIn, this.controller.delete );
    }
}
