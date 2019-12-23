const UsuarioController = require('./usuario.controller');

module.exports = class UsuarioRoutes {
    constructor(router, db){
        this.router = router;
        this.controller = new UsuarioController(db);
    }
    exports = () => {
        this.router.route('/usuarios')
            .get(this.controller.get)
            .post(this.controller.create);
        
        this.router.route('/usuarios/:id')
            .put(this.controller.update)
            .delete(this.controller.delete);
    }
}
