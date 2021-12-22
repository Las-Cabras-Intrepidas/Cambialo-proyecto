function getCookie(name) {
    let dc = document.cookie;
    let prefix = name + "=";
    let begin = dc.indexOf("; " + prefix);
    let end = document.cookie.indexOf(";", begin);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) {
            return null;
        }
    } else {
        begin += 2;

        if (end == -1) {
            end = dc.length;
        }
    }
    return dc.valueOf();
    //return decodeURI(dc.substring(begin + prefix.length, end));
}

let botonesBorrar1 = document.getElementById("botonesBorrar1");
let botonesBorrar2 = document.getElementById("botonesBorrar2");
let btnBorrar1 = document.getElementById("btnBorrar1");
let btnBorrar2 = document.getElementById("btnBorrar2");

let btnLogin = document.getElementById("btnInicio");

function recogerCookie() {
    let Nombre = getCookie("userName").split("userName=");
    let datosIntro = "Hola, " + Nombre[1];
    btnLogin.innerText = datosIntro;
    //ELIMINAR LOS OTROS BOTONES
    botonesBorrar1.removeChild(btnBorrar1);
    botonesBorrar2.removeChild(btnBorrar2);
    //CREAR BOTON CIERRE SESIÓN
    botonCierre();
    return Nombre;
}

function comprobarCookie() {
    let clave = getCookie("userName");
    if (clave == null) {
        let noexiste = "noexiste";
        return noexiste;
    } else {
        let existe = "existe";
        return existe;
    }
}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

//MODIFICAR EL BUTTON
if (comprobarCookie() == "existe") {
    console.log("Hay una cookie");
    recogerCookie();
} else if (comprobarCookie() == "noexiste") {
    console.log("No hay una cookie");
}

//CERRAR SESIÓN
function botonCierre() {
    let botonesLogin = document.getElementById("botonesLogin");
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = 'Cerrar sesión';
    //button.style.border=" solid 1px red ";
    button.id = "btnCierreSesion";

    botonesLogin.appendChild(button);
    button.addEventListener("click", () => {
        console.log("fufa");
        deleteAllCookies();
        location.reload();
    });
}