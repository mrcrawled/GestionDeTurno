require("@babel/polyfill");
require('dotenv').config();
const config = require("../../database/config");
const obraSocialSql = require("./obra-social.sql");
const db = new obraSocialSql(config);

it("Listado de obras sociales",  async done => {
    const obrasSociales = await db.fetchAll();
    expect(Array.isArray(obrasSociales)).toBe(true);
    obrasSociales.forEach((obraSocial, i) => {
        expect(typeof obraSocial.nombre).toBe('string');
        expect(typeof obraSocial.descripcion).toBe('string');
    });
    done();
});

it("Insertar una nueva obra social", async done => {
    const nombre = "OS";
    const descripcion = "Probando obra social";

    const newObraSocial = await db.insert(nombre, descripcion);
    expect(newObraSocial).toBe(false);

   const newObraSocial2 = await db.insert(nombre, descripcion);
   expect(newObraSocial2).toBe(true);
    done();
});

it("Borrar obra social", async done => {
    const obrasSociales = await db.fetchAll();
    const obraSocial = obrasSociales.filter(obraSocial => obraSocial.nombre == "OS")[0];

    const deleteObraSocial = await db.delete(obraSocial.id);
    expect(deleteObraSocial).toBe(false);

    done();
});
