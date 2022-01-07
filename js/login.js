"use strict";
import * as Formulario from "./bibliotecas/formulario.js";
import * as Plantilla from "./bibliotecas/plantilla.js";
window.onload = function() {
    var doc = document;

    var btnEmpleado = doc.getElementById("enlace_empleado");
    var btnEmpresa = doc.getElementById("enlace_empresa");

    Formulario.selecBtnEmpresa(btnEmpleado, btnEmpresa);
    Plantilla.RemplazarElemHijo(doc.getElementById("form_login"), doc.getElementById("formulario"), Formulario.crearFormLoginEmpresa());
    Formulario.asignarEvComprobarFormTiempoReal();
    Formulario.asignarEvMostrarPsswd("contrasenya");
    Formulario.asignarEvComprobarInputRequeridos();

    btnEmpleado.addEventListener(
        "click",
        (e) => {
            Formulario.selecBtnEmpleado(btnEmpleado, btnEmpresa);
            Plantilla.RemplazarElemHijo(doc.getElementById("form_login"), doc.getElementById("formulario"), Formulario.crearFormLoginEmpleado());
            Formulario.asignarEvComprobarFormTiempoReal();
            Formulario.asignarEvComprobarInputRequeridos();
        },
        false
    );

    btnEmpresa.addEventListener(
        "click",
        (e) => {
            Formulario.selecBtnEmpresa(btnEmpleado, btnEmpresa);
            Plantilla.RemplazarElemHijo(doc.getElementById("form_login"), doc.getElementById("formulario"), Formulario.crearFormLoginEmpresa());
            Formulario.cambiarFormRegistrarLogin();
            Formulario.asignarEvComprobarFormTiempoReal();
            Formulario.asignarEvComprobarInputRequeridos();
        },
        false
    );

    Formulario.cambiarFormRegistrarLogin();
};