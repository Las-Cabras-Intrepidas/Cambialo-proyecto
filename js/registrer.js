let users = [
  {
    name: "admin",
    user: "admin",
    password: "admin",
  },
  {
    name: "Miguel",
    user: "miguel",
    password: "miguel",
  },
  {
    name: "Fran",
    user: "fran",
    password: "fran",
  },
  {
    name: "Adrian",
    user: "adrian",
    password: "adrian",
  },
  {
    name: "Soleny",
    user: "soleny",
    password: "soleny",
  },
  {
    name: "Barbara",
    user: "barbara",
    password: "barbara",
  },
  {
    name: "Soleny",
    user: "soleny",
    password: "soleny",
  },
  {
    name: "Adan",
    user: "adan",
    password: "adan",
  },
];

//MOSTRAR LISTADO DE USUARIOS
console.log(users);
//PARTE FUNCIONALIDAD DE ANIMACIONES FRAN
//Ejecutando funciones
//  document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
//  document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
let formulario_login = document.querySelector(".formulario__login");
let formulario_register = document.querySelector(".formulario__register");
let contenedor_login_register = document.querySelector(
  ".contenedor__login-register"
);
let caja_trasera_login = document.querySelector(".caja__trasera-login");
let caja_trasera_register = document.querySelector(".caja__trasera-register");

//FUNCIONES

function anchoPage() {
  if (window.innerWidth > 850) {
    caja_trasera_register.style.display = "block";
    caja_trasera_login.style.display = "block";
  } else {
    caja_trasera_register.style.display = "block";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.display = "none";
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_register.style.display = "none";
  }
}

anchoPage();

function iniciarSesion() {
  if (window.innerWidth > 850) {
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "10px";
    formulario_register.style.display = "none";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";
  } else {
    formulario_login.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_register.style.display = "none";
    caja_trasera_register.style.display = "block";
    caja_trasera_login.style.display = "none";
  }
}

function register() {
  if (window.innerWidth > 850) {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "410px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
  } else {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.display = "none";
    caja_trasera_login.style.display = "block";
    caja_trasera_login.style.opacity = "1";
  }
}

//OK
function registerUser(name, user, psw) {
  let newUser = {
    name: name,
    user: user,
    password: psw,
  };

  users.push(newUser);
}
//registerUser("pepe", "pepe", "pepe");
//OK
function searchUser(name, user, psw) {
  let searchUser = {
    name: name,
    user: user,
    passwords: psw,
  };
  //ESTO DA LA POSICIÓN DEL ARRAY USERS DEL ELEMENTO A BUSCAR

  let userFound = users.findIndex(
    (element) =>
      element.user == searchUser.user &&
      element.password == searchUser.passwords
  );
  if (userFound != undefined && userFound != null && userFound > -1) {
    return users[userFound];
  } else {
    return null;
  }
}

//------------------------REGISTRO-------------------------------------------
//NO OK
//ALMACENAS LOS DATOS QUE PONES EN EL FORMULARIO DE INICIO DE SESIÓN Y LUEGO EJECUTAS LA FUNCION REGISTERUSER CON ESOS DATOS
let inputButton = document.getElementById("registerButton");
let inputButton2 = document.getElementById("registerButton2");
inputButton2.addEventListener("click", register);
let inputName = document.getElementById("nameUser");
let inputUser = document.getElementById("user");
let inputPsw = document.getElementById("psw");
let inputCheckTerms = document.getElementById("checkTerms");
let formRegister = document.getElementById("formRegister");

inputButton.addEventListener("click", () => {
  let valueinputName = inputName.value;
  let valueinputUser = inputUser.value;
  let valueinputPsw = inputPsw.value;
  let valueCheckTerms = inputCheckTerms.value;

  //COMPROBAR QUE EL USUARIO EXISTA O NO PARA NO AÑADIR DOS IGUALES
  if (
    valueinputName != null &&
    valueinputUser != null &&
    valueinputPsw != null &&
    valueCheckTerms != null
  ) {
    if (valueinputName != "" && valueinputUser != "" && valueinputPsw != "") {
      if (searchUser(valueinputName, valueinputUser, valueinputPsw) != null) {
        console.log("EL USUARIO YA EXISTE");
        console.log(searchUser(valueinputName, valueinputUser, valueinputPsw));
        console.log(users);
        //MOSTRAR EN EL REGISTER QUE EL USUARIO YA EXISTE
        inputName.style.border = "0.5px solid #8B0000";
        inputUser.style.border = "0.5px solid #8B0000";
        inputPsw.style.border = "0.5px solid #8B0000";
      } else {
        //AÑADE A LA VARIABLE USERS QUE YA EXISTE
        console.log("Registrando usuario");
        registerUser(valueinputName, valueinputUser, valueinputPsw);
        console.log(users);
        //LLEVAR AL HOME
        let usuario = searchUser(valueinputName, valueinputUser, valueinputPsw);
        console.log("nuevo", usuario);
        volverHome(usuario);
      }
    }
  }
});

//------------------LOGIN--------------------
let inputLoginButton = document.getElementById("loginButton");
let inputLoginButton2 = document.getElementById("loginButton2");
inputLoginButton2.addEventListener("click", iniciarSesion);
let inputLoginUser = document.getElementById("userLogin");
let inputLoginPsw = document.getElementById("pswLogin");
let informTextLogin = document.getElementById("inform-text");
let formLogin = document.getElementById("formLogin");

inputLoginButton.addEventListener("click", () => {
  let valueLoginUser = inputLoginUser.value;
  let valueLoginPsw = inputLoginPsw.value;
  if (searchUser("nombre", valueLoginUser, valueLoginPsw) != null) {
    //EL USUARIO EXISTE
    console.log("Logeado Correctamente");
    //CAMBIAR A LA PAGINA PRICIPAL CON EL LOGIN YA REGISTRADO
    let usuario = searchUser("nombre", valueLoginUser, valueLoginPsw);
    volverHome(usuario);
  } else if (searchUser("nombre", valueLoginUser, valueLoginPsw) == null) {
    inputLoginUser.style.border = "0.5px solid #8B0000";
    inputLoginPsw.style.border = "0.5px solid #8B0000";
    console.log("El usuario o la contraseña no son correctas");
  }
});

//Entrar al home ya logeado
function volverHome(usuario) {
  //CREAR COOKIE PARA Inicio de sesión
  let tiempo = new Date();
  tiempo.setDate(tiempo.getDate() + 1);
  let tiempoDuracion = tiempo;
  crearCookie("userName", usuario.name, tiempoDuracion);
  formLogin.action = "./index.html";
  formRegister.action = "./index.html";
}

//GALLETITAS

function crearCookie(nombre, value, time) {
  document.cookie =
    nombre + "=" + encodeURIComponent(value) + ";expires=" + time;
}
