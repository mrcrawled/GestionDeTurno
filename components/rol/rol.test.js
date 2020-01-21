require("@babel/polyfill");
const config = require("../../database/config");
const rolSql = require("./rol.sql");
const db = new rolSql(config);

describe("Listado de roles", () => {
    const roles = db.selectAll();
    test("Tipo debe ser Array", () => {
        expect(Array.isArray(roles)).toBeTruthy();
    });
    describe("Cada Rol debe tener id y tipo", () => {
        roles.forEach((rol, index) => {
            test("Tiene id", () => {
                expect(rol.id).toBeDefined();
            });
            test("Tiene rol_tipo", () => {
                expect(rol.rol_tipo).toBeDefined();
            });
        });
    });
});

describe("Insertar nuevo rol", () => {
    const rol_tipo = "fantasma";
    const descripcion = "rol de fantasía";
    const newRol = db.insert(rol_tipo, descripcion);
    test("Rol insertado", () => {
        expect(newRol).toBeTruthy();
    });
    test("Rol ya creado", () => {
        const newRol2 = db.insert(rol_tipo, descripcion);
        expect(newRol2).toBeFalsy();
    });
});

describe("Actualizacion de Rol", () => {
    const rol = db.selectAll().filter(rol => rol.rol_tipo == "fantasma")[0];
    const newDescipcion = "rol de fantasía modificado";
    const rolUpdated = db.update(rol.id, rol.rol_tipo, newDescipcion);
    test("Rol actualizado", () => {
        expect(rolUpdated).toBeTruthy();
    });
    test("Rol actualizado segun valor", () => {
        const rol = db.selectAll().filter(rol => rol.rol_tipo == "fantasma")[0];
        expect(rol.descripcion).toEqual(newDescipcion);
    });
});

describe("Eliminación de Rol", () => {
    const rol = db.selectAll().filter(rol => rol.rol_tipo == "fantasma")[0];
    const rolDeleted = db.delete(rol.id);
    test("Rol eliminado", () => {
        expect(rolDeleted).toBeTruthy();
    });
    test("Verificación de rol eliminado", () => {
        const rol = db.selectAll().filter(rol => rol.rol_tipo == "fantasma");
        expect(rol).toHaveLength(0);
    });
    test("Eliminando rol eliminado", () => {
        const rolDeleted = db.delete(rol.id);
        expect(rolDeleted).toBeFalsy();
    });
});