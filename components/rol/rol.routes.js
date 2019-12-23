const RolController = require('./rol.controller');

module.exports = class RolRouter {
    constructor(router, db){
        this.router = router;
        this.controller = new RolController(db);
    }
    exports = () => {
        this.router.route('/roles')
            .get(this.controller.get)
            .post(this.controller.create);
        
        this.router.route('/roles/:id')
            .put(this.controller.update)
            .delete(this.controller.delete);
    }
}