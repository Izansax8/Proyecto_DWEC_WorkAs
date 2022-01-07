"use strict";
/*  --- BIBLIOTECA PLANTILLA ---  */
//Tenemos todas las fuciones o procedimientos que nos pueden ser utiles para interactuar con el DOM.
var doc = document;

//Añade el elemento pasado por parámetro a otro elemento con la id pasada por parámetro.
export const anyadirElemento = (id, elemento) => {
    doc.getElementById(id).appendChild(elemento);
}
//Limpia el formulario pasado por parámetro.
export const limpiar = (formulario) => {
    formulario.reset();
}

//Añade o reemplaza un elemento según si existe este. Se introduce el elemento Padre, el elemento hijo, y el nuevo elemento.
export const RemplazarElemHijo = (padre, hijo, nuevoElemento) => {
    if (hijo == null) {
        padre.appendChild(nuevoElemento);
    } else {
        padre.replaceChild(nuevoElemento, hijo);
    }
}

//Exportamos.
export * from './plantilla.js'