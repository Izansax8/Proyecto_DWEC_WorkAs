"use strict";
import * as Plantilla from "./plantilla.js";
/*  --- BIBLIOTECA FORMULARIO ---  */
//Tenemos todas las fuciones o procedimientos que nos pueden ser utiles para trabajar con formularios.
var doc = document;

export function selecBtnEmpresa(btnEmpleado, btnEmpresa) {
    btnEmpleado.classList.remove("seleccionado");
    btnEmpresa.classList.remove("no_seleccionado");
    btnEmpleado.classList.add("no_seleccionado");
    btnEmpresa.classList.add("seleccionado");
}

export function selecBtnEmpleado(btnEmpleado, btnEmpresa) {
    btnEmpleado.classList.remove("no_seleccionado");
    btnEmpresa.classList.remove("seleccionado");
    btnEmpleado.classList.add("seleccionado");
    btnEmpresa.classList.add("no_seleccionado");
}

export function crearFormLoginEmpresa() {
    var form = doc.createElement("form");
    form.setAttribute("action", "");
    form.setAttribute("id", "formulario");
    form.innerHTML = `<h2>Iniciar sesión</h2><fieldset><legend>Nº Identificador*</legend><label for="nId"></label><input id="nId" class="inputForm"  name="nId" type="text" required="required" placeholder="NIF" autofocus><img class="desaparecer" src="./././img/correcto.png"><img class="desaparecer" src="./././img/incorrecto.png"><span class="ocultar">Este campo es obligatorio</span></fieldset>
                      <fieldset><legend>Contraseña*</legend><label for="contrasenya"></label><input id="contrasenya" class="inputForm"  name="contrasenya" type="password" required="required" placeholder="Contraseña"><img class="mostrarPsswd" src="./././img/mostrarPsswd.png"><img class="desaparecer mostrarPsswd" src="./././img/ocultarPsswd.png"><span class="ocultar">Este campo es obligatorio</span></fieldset>
                      <div id="btn_form"><input id="btn_login_registrar" type="button" value="Iniciar sesión"></div>
                      <p id="enl_registrar_login" class="enl_login">¿No tienes cuenta? <a>Registrarse</a></p>`;

    return form;
}

export function crearFormRegistroEmpresa() {
    var form = doc.createElement("form");
    form.setAttribute("action", "");
    form.setAttribute("id", "formulario");
    form.innerHTML = `<h2>Registrarse</h2><fieldset><legend>Nº Identificador*</legend><label for="nId"></label><input id="nId" class="inputForm" name="nId" type="text" required="required" placeholder="Ejemplo: A82009812, B430745131..."><img class="desaparecer" src="./././img/correcto.png"><img class="desaparecer" src="./././img/incorrecto.png"><span class="ocultar">Este campo es obligatorio</span></fieldset>
                      <fieldset><legend>Nombre o razón social*</legend><label for="razon_social"></label><input id="razon_social" class="inputForm"  name="razon_social" type="text" required="required" placeholder="Introduce la razón social de tu empresa"><img class="desaparecer" src="./././img/correcto.png"><img class="desaparecer" src="./././img/incorrecto.png"><span class="ocultar">Este campo es obligatorio</span></fieldset>
                      <div id="cp_dir"><fieldset><legend>Dirección</legend><label for="direccion"></label><input id="direccion" class="inputForm"  name="direccion" type="text" placeholder="Ejemplo: Calle Rey Don Juan II, núm 24"><img class="desaparecer" src="./././img/correcto.png"><img class="desaparecer" src="./././img/incorrecto.png"><span class="ocultar">Este campo es obligatorio</span></fieldset>
                      <fieldset><legend>C.P.*</legend><label for="cod_postal"></label><input id="cod_postal" class="inputForm"  name="cod_postal" type="text" required="required" placeholder="Ejemplo: 03630"><img class="desaparecer" src="./././img/correcto.png"><img class="desaparecer" src="./././img/incorrecto.png"><span class="ocultar">Este campo es obligatorio</span></fieldset></div>
                      <fieldset><legend>Contraseña*</legend><label for="contrasenya"></label><input id="contrasenya" class="inputForm"  name="contrasenya" type="password" required="required" placeholder="8 o más carácteres"><img class="mostrarPsswd" src="./././img/mostrarPsswd.png"><img class="desaparecer mostrarPsswd" src="./././img/ocultarPsswd.png"><span class="ocultar">Este campo es obligatorio</span></fieldset>
                      <fieldset><legend>Repetir contraseña*</legend><label for="repetir_contrasenya"></label><input id="repetir_contrasenya" class="inputForm"  name="repetir_contrasenya" type="password" required="required" placeholder="Repetir contraseña"><img class="mostrarPsswd" src="./././img/mostrarPsswd.png"><img class="desaparecer mostrarPsswd" src="./././img/ocultarPsswd.png"><span class="ocultar">Este campo es obligatorio</span></fieldset>
                      <div id="aceptar_politicas"><input type="checkbox" id="check_aceptar_politicas" name="aceptar_politicas"><label for="check_aceptar_politicas"> He leído y acepto la política de privacidad.</label><span class="ocultar">Este campo es obligatorio</span></div>
                      <div id="btn_form"><input id="btn_login_registrar" type="button" value="Crear cuenta"></div>
                      <p id="enl_registrar_login" class="enl_registrar">¿Tienes ya una cuenta? <a>Iniciar sesión</a></p>`;

    return form;
}

export function crearFormLoginEmpleado() {
    var form = doc.createElement("form");
    form.setAttribute("action", "");
    form.setAttribute("id", "formulario");
    form.innerHTML = `<h2>Iniciar sesión</h2><fieldset><legend>DNI*</legend><label for="dni"></label><input id="dni" class="inputForm"  name="dni" type="text" required="required" placeholder="DNI" autofocus><img class="desaparecer" src="./././img/correcto.png"><img class="desaparecer" src="./././img/incorrecto.png"><span class="ocultar">Este campo es obligatorio</span></fieldset>
                      <fieldset><legend>Código empleado*</legend><label for="cod_empleado"></label><input id="cod_empleado" class="inputForm"  name="cod_empleado" type="password" required="required" placeholder="Formato: 8 carácteres(números y letras)"><img class="mostrarPsswd" src="./././img/mostrarPsswd.png"><img class="desaparecer mostrarPsswd" src="./././img/ocultarPsswd.png"><span class="ocultar">Este campo es obligatorio</span></fieldset>
                      <div id="btn_form"><input id="btn_login_registrar" type="button" value="Iniciar sesión"></div>`;

    return form;
}

export function asignarEvMostrarPsswd(id) {
    if (doc.getElementById(id) != null) {
        doc.getElementById(id).parentNode.getElementsByTagName("img")[0].addEventListener(
            "click",
            (e) => {
                doc.getElementById(id).parentNode.getElementsByTagName("img")[0].classList.add("desaparecer");
                doc.getElementById(id).parentNode.getElementsByTagName("img")[1].classList.remove("desaparecer");
                doc.getElementById(id).setAttribute("type", "text");
            },
            false
        );

        doc.getElementById(id).parentNode.getElementsByTagName("img")[1].addEventListener(
            "click",
            (e) => {
                doc.getElementById(id).parentNode.getElementsByTagName("img")[0].classList.remove("desaparecer");
                doc.getElementById(id).parentNode.getElementsByTagName("img")[1].classList.add("desaparecer");
                doc.getElementById(id).setAttribute("type", "password");
            },
            false
        );
    }
}

export function comprobarExpReg(valor, expReg) {
    if (expReg.test(valor)) {
        return true;
    } else {
        return false;
    }
}

export function devolverValorSiExiste(elemento) {
    if (doc.getElementById(elemento) !== null) {
        return doc.getElementById(elemento).value.trim();
    } else {
        return null;
    }
}

export function comprobarRazSocial(razSocial) {
    var expRazSocial = /^[a-zA-Z0-9\s,.'-]{2,100}$/;
    return razSocial != null && razSocial != "" && comprobarExpReg(razSocial, expRazSocial);
}

export function comprobarDir(dir) {
    var expDir = /^[a-zA-Z0-9\s,.'-]{5,100}$/;
    return dir != null && dir != "" && comprobarExpReg(dir, expDir);
}

export function comprobarDni(dni) {
    var expDni = /^[0-9]{8,8}[A-Za-z]$/;
    return dni != null && dni != "" && comprobarExpReg(dni, expDni);
}

export function comprobarNumId(nId) {
    var expNumId = /^[A-Za-z][0-9]{8,8}$/;
    return nId != null && nId != "" && comprobarExpReg(nId, expNumId);
}

export function comprobarCP(cp) {
    var expCP = /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/;
    return cp != null && cp != "" && comprobarExpReg(cp, expCP);
}

export function comprobarCodEmpleado(codEmpleado) {
    var expCodEmpleado = /^[a-zA-Z0-9]{8,8}$/;
    return codEmpleado != null && codEmpleado != "" && comprobarExpReg(codEmpleado, expCodEmpleado);
}

export function comprobarContrasenya(psswd) {
    var noValido = /\s/;
    return psswd != null && psswd != "" && psswd.length >= 8 && !comprobarExpReg(psswd, noValido);
}

export function comprobarContrasenyaCorrecta(psswd, psswd2) {
    return psswd === psswd2;
}

export function mostrarInputValido(id, valido) {
    if (valido) {
        doc.getElementById(id).classList.remove("incorrecto");
        doc.getElementById(id).classList.add("correcto");
        doc.getElementById(id).parentNode.getElementsByTagName("img")[0].classList.remove("desaparecer");
        doc.getElementById(id).parentNode.getElementsByTagName("img")[1].classList.add("desaparecer");
        doc.getElementById(id).parentNode.getElementsByTagName("span")[0].classList.add("ocultar");
    } else {
        doc.getElementById(id).classList.remove("correcto");
        doc.getElementById(id).classList.add("incorrecto");
        doc.getElementById(id).parentNode.getElementsByTagName("img")[0].classList.add("desaparecer");
        doc.getElementById(id).parentNode.getElementsByTagName("img")[1].classList.remove("desaparecer");
        doc.getElementById(id).parentNode.getElementsByTagName("span")[0].innerHTML = "(*) Formato incorrecto";
        doc.getElementById(id).parentNode.getElementsByTagName("span")[0].classList.remove("ocultar");
    }
}

export function comprobarInputRequeridos() {
    var errores = doc.getElementById("formulario").getElementsByTagName("span");
    for (let i = 0; i < errores.length - 1; i++) {
        if (errores[i].parentNode.getElementsByClassName("inputForm")[0].hasAttribute("required") && errores[i].parentNode != doc.getElementById("aceptar_politicas")) {
            errores[i].parentNode.getElementsByTagName("span")[0].innerHTML = "(*) Este campo es obligatorio";
            errores[i].parentNode.getElementsByTagName("span")[0].classList.remove("ocultar");
        } else {
            var checkPoliticas = devolverValorSiExiste("check_aceptar_politicas");
            if (checkPoliticas != null) {
                if (doc.getElementById("check_aceptar_politicas").checked) {
                    doc.getElementById("aceptar_politicas").getElementsByTagName("span")[0].classList.add("ocultar");
                } else {
                    console.log("JAJJAJA");
                    doc.getElementById("aceptar_politicas").getElementsByTagName("span")[0].classList.remove("ocultar");
                }
            }
        }

    }

}

export function asignarEvComprobarInputRequeridos() {
    doc.getElementById("btn_login_registrar").addEventListener(
        "click",
        (e) => {
            comprobarInputRequeridos();
        },
        false
    );

}

export function comprobarFormTiempoReal() {
    var nId = devolverValorSiExiste("nId");
    var razSocial = devolverValorSiExiste("razon_social");
    var dir = devolverValorSiExiste("direccion");
    var cp = devolverValorSiExiste("cod_postal");
    var psswd = devolverValorSiExiste("contrasenya");
    var repPsswd = devolverValorSiExiste("repetir_contrasenya");

    var dni = devolverValorSiExiste("dni");
    var codEmpl = devolverValorSiExiste("cod_empleado");

    if (comprobarNumId(nId)) {
        mostrarInputValido("nId", true);
    } else if (nId != "" && doc.getElementById("nId") != null) {
        mostrarInputValido("nId", false);
    }

    if (comprobarRazSocial(razSocial)) {
        mostrarInputValido("razon_social", true);
    } else if (razSocial != "" && doc.getElementById("razon_social") != null) {
        mostrarInputValido("razon_social", false);
    }

    if (comprobarDir(dir)) {
        mostrarInputValido("direccion", true);
    } else if (dir != "" && doc.getElementById("direccion") != null) {
        mostrarInputValido("direccion", false);
    }

    if (comprobarCP(cp)) {
        mostrarInputValido("cod_postal", true);
    } else if (cp != "" && doc.getElementById("cod_postal") != null) {
        mostrarInputValido("cod_postal", false);
    }

    if (comprobarContrasenya(psswd)) {
        doc.getElementById("contrasenya").classList.remove("incorrecto");
        doc.getElementById("contrasenya").classList.add("correcto");
        doc.getElementById("contrasenya").parentNode.getElementsByTagName("span")[0].classList.add("ocultar");
    } else if (psswd != "" && doc.getElementById("contrasenya") != null) {
        doc.getElementById("contrasenya").classList.remove("correcto");
        doc.getElementById("contrasenya").classList.add("incorrecto");
    }

    asignarEvMostrarPsswd("contrasenya");

    if (comprobarContrasenyaCorrecta(psswd, repPsswd) && comprobarContrasenya(repPsswd)) {
        doc.getElementById("repetir_contrasenya").classList.remove("incorrecto");
        doc.getElementById("repetir_contrasenya").classList.add("correcto");
        doc.getElementById("repetir_contrasenya").parentNode.getElementsByTagName("img")[0].classList.remove("desaparecer");
        doc.getElementById("repetir_contrasenya").parentNode.getElementsByTagName("img")[1].classList.add("desaparecer");
        doc.getElementById("repetir_contrasenya").parentNode.getElementsByTagName("span")[0].classList.add("ocultar");
    } else if (repPsswd != "" && doc.getElementById("repetir_contrasenya") != null) {
        doc.getElementById("repetir_contrasenya").classList.remove("correcto");
        doc.getElementById("repetir_contrasenya").classList.add("incorrecto");
        doc.getElementById("repetir_contrasenya").parentNode.getElementsByTagName("img")[0].classList.add("desaparecer");
        doc.getElementById("repetir_contrasenya").parentNode.getElementsByTagName("img")[1].classList.remove("desaparecer");
    }

    asignarEvMostrarPsswd("repetir_contrasenya");

    /*if (checkPoliticas.checked) {

    } else {

    }*/

    if (comprobarDni(dni)) {
        doc.getElementById("dni").classList.remove("incorrecto");
        mostrarInputValido("dni", true)
    } else if (dni != "" && doc.getElementById("dni") != null) {
        mostrarInputValido("dni", false)
    }

    if (comprobarCodEmpleado(codEmpl)) {
        doc.getElementById("cod_empleado").classList.remove("incorrecto");
        doc.getElementById("cod_empleado").classList.add("correcto");
        doc.getElementById("cod_empleado").parentNode.getElementsByTagName("img")[0].classList.remove("desaparecer");
        doc.getElementById("cod_empleado").parentNode.getElementsByTagName("img")[1].classList.add("desaparecer");
        doc.getElementById("cod_empleado").parentNode.getElementsByTagName("span")[0].classList.add("ocultar");
    } else if (codEmpl != "" && doc.getElementById("cod_empleado") != null) {
        doc.getElementById("cod_empleado").classList.remove("correcto");
        doc.getElementById("cod_empleado").classList.add("incorrecto");
        doc.getElementById("cod_empleado").parentNode.getElementsByTagName("img")[0].classList.add("desaparecer");
        doc.getElementById("cod_empleado").parentNode.getElementsByTagName("img")[1].classList.remove("desaparecer");
    }

    asignarEvMostrarPsswd("cod_empleado");
}

export function asignarEvComprobarFormTiempoReal() {
    doc.body.addEventListener(
        "click",
        (e) => {
            comprobarFormTiempoReal();
        },
        false
    );

}

export function cambiarFormRegistrarLogin() {
    var enlRegistrarLogin = doc.getElementById("enl_registrar_login").getElementsByTagName("a")[0];

    enlRegistrarLogin.addEventListener(
        "click",
        (e) => {
            if (doc.getElementById("enl_registrar_login").classList.contains("enl_login")) {
                Plantilla.RemplazarElemHijo(doc.getElementById("form_login"), doc.getElementById("formulario"), crearFormRegistroEmpresa());
            } else {
                Plantilla.RemplazarElemHijo(doc.getElementById("form_login"), doc.getElementById("formulario"), crearFormLoginEmpresa());
            }
            cambiarFormRegistrarLogin()
            asignarEvComprobarFormTiempoReal();
            asignarEvComprobarInputRequeridos();
        },
        false
    );
}

//Exportamos.
export * from './formulario.js'