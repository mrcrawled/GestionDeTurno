const TurnoController = require('./turno.controller');

module.exports = class TurnoRoutes {
    constructor(router, db){
        this.router = router;
        this.controller = new TurnoController(db);
    }
    exports = () => {
        this.router.route('/turnos')
            .get(this.controller.get);
        this.router.route('/turnos/asignar')
            .post(this.controller.asignar);
    }
}
