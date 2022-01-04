"use strict";
import * as Formulario from "./bibliotecas/formulario.js";
window.onload = function () {
    var doc = document;
    var btnEmpleado = doc.getElementById("enlace_empleado");
    var btnEmpresa = doc.getElementById("enlace_empresa");

    btnEmpleado.classList.add("no_seleccionado");
    btnEmpresa.classList.add("seleccionado");

    btnEmpleado.addEventListener(
        "click",
        (e) => {
            btnEmpleado.classList.remove("no_seleccionado");
            btnEmpresa.classList.remove("seleccionado");
            btnEmpleado.classList.add("seleccionado");
            btnEmpresa.classList.add("no_seleccionado");
        },
        false
    );

    btnEmpresa.addEventListener(
        "click",
        (e) => {
            btnEmpleado.classList.remove("seleccionado");
            btnEmpresa.classList.remove("no_seleccionado");
            btnEmpleado.classList.add("no_seleccionado");
            btnEmpresa.classList.add("seleccionado");
        },
        false
    );
};