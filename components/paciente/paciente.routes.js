const PacienteController = require('./paciente.controller');
const { isLoggedIn } = rootRequire('utils/auth.js');

module.exports = class PacienteRouter {
    constructor(router, db){
        this.router = router;
        this.controller = new PacienteController(db);
    }
    exports = () => {
        this.router.route('/pacientes')
            .get( isLoggedIn, this.controller.get )
            .post( this.controller.create );
        
        this.router.route('/pacientes/:id')
            .get(this.controller.getById)
            .put(this.controller.update)
            .delete(this.controller.delete);
    }
}
