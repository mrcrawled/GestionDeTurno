const ObraSocialController = require('./obra-social.controller');

module.exports = class ObraSocialRoutes {
    constructor(router, db){
        this.router = router;
        this.controller = new ObraSocialController(db);
    }
    exports = () => {
        this.router.route('/obras-sociales')
            .get( this.controller.get )
            .post( this.controller.create );
        this.router.route('/obra-social/:id')
            .get( this.controller.getById )
            .put( this.controller.update )
            .delete( this.controller.delete );
    }
}
