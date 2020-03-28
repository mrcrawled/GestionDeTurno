require("@babel/polyfill");
require('dotenv').config();
const config = require("../../database/config");
const rolSql = require("./rol.sql");
const db = new rolSql(config);

it("Listado de roles",  async done => {
    const roles = await db.selectAll();
    expect(Array.isArray(roles)).toBe(true);
    roles.forEach((rol, i) => {
        expect(typeof rol.id).toBe('number');
        expect(typeof rol.rol_tipo).toBe('string');
    });
    done();
});

it("Insertar nuevo rol", async done => {
    const rol_tipo = "fantasma";
    const descripcion = "rol de fantasía";

    const newRol = await db.insert(rol_tipo, descripcion);
    expect(newRol).toBe(true);

    const newRol2 = await db.insert(rol_tipo, descripcion);
    expect(newRol2).toBe(false);
    done();
});

it("Actualizacion de Rol", async done => {
    const roles = await db.selectAll();
    const rol = roles.filter(rol => rol.rol_tipo == "fantasma")[0];
    const newDescipcion = "rol de fantasia modificado";

    const rolUpdated = await db.update(rol.id, rol.rol_tipo, newDescipcion);
    expect(rolUpdated).toBe(true);

    const roles2 = await db.selectAll();
    expect(roles2.length).toBe(roles.length);

    const rol2 = roles2.filter(rol => rol.rol_tipo == "fantasma")[0];
    expect(typeof rol2).toBe("object");
    expect(rol2.descripcion).toBe(newDescipcion);
    done();
});

it("Eliminación de Rol", async done => {
    const roles = await db.selectAll();
    const rol = roles.filter(rol => rol.rol_tipo == "fantasma")[0];

    const rolDeleted = await db.delete(rol.id);
    expect(rolDeleted).toBe(true);

    const roles2 = await db.selectAll()
    const rol2 = roles2.filter(rol => rol.rol_tipo == "fantasma");
    expect(rol2.length).toBe(0);

    const rolDeleted2 = await db.delete(rol.id);
    expect(rolDeleted2).toBe(false);
    done();
});