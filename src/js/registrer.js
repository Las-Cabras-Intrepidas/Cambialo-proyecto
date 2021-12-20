let users = [

    {
        "name": "admin",
        "user": "admin",
        "password": "admin"
    },
    {
        "name": "Miguel",
        "user": "miguel",
        "password": "miguel"
    },
    {
        "name": "Fran",
        "user": "fran",
        "password": "fran"
    },
    {
        "name": "Adrian",
        "user": "adrian",
        "password": "adrian"
    },
    {
        "name": "Soleny",
        "user": "soleny",
        "password": "soleny"
    },
    {
        "name": "Barbara",
        "user": "barbara",
        "password": "barbara"
    },
    {
        "name": "Soleny",
        "user": "soleny",
        "password": "soleny"
    },
    {
        "name": "Adan",
        "user": "adan",
        "password": "adan"
    }
]


//OK
function registerUser(name, user, psw) {

    let newUser = {
        "name": name,
        "user": user,
        "password": psw
    };

    users.push(newUser);
}
//registerUser("pepe", "pepe", "pepe");
//OK
function searchUser(name, user, psw) {
    let searchUser = {
        "name": name,
        "user": user,
        "passwords": psw
    };
    //ESTO DA LA POSICIÓN DEL ARRAY USERS DEL ELEMENTO A BUSCAR 

    let userFound = users.findIndex(element => element.user == searchUser.user && element.password == searchUser.passwords);
    if (userFound != undefined && userFound != null && userFound > -1) {
        console.log("Posición del Usuario Encontrado", userFound);
        console.log("El usuario encontrado es: ", users[userFound].name);
        return "exist";
    }
}

//------------------------REGISTRO-------------------------------------------
//NO OK
//ALMACENAS LOS DATOS QUE PONES EN EL FORMULARIO DE INICIO DE SESIÓN Y LUEGO EJECUTAS LA FUNCION REGISTERUSER CON ESOS DATOS    
let inputButton = document.getElementById("registerButton");
let inputName = document.getElementById("nameUser");
let inputUser = document.getElementById("user");
let inputPsw = document.getElementById("psw");
console.log(inputButton);
inputButton.addEventListener("click", () => {
    let valueinputName = inputName.value;
    let valueinputUser = inputUser.value;
    let valueinputPsw = inputPsw.value;


    console.log("Valores", valueinputName, valueinputUser, valueinputPsw);
    if ((valueinputName, valueinputUser, valueinputPsw) != null && (valueinputName, valueinputUser, valueinputPsw) != undefined) {

        //COMPROBAR QUE EL USUARIO EXISTA O NO PARA NO AÑADIR DOS IGUALES
        if (searchUser(valueinputName, valueinputUser, valueinputPsw) == "exist") {
            console.log("EL USUARIO YA EXISTE");
            //MOSTRAR EN EL REGISTER QUE EL USUARIO YA EXISTE   
        } else {
            //AÑADE A LA VARIABLE USERS QUE YA EXISTE
            registerUser(valueinputName, valueinputUser, valueinputPsw);
        }

    } else {
        console.log("No es Posible registrar");
    }


});






//------------------LOGIN--------------------
let inputLoginButton = document.getElementById("loginButton");
let inputLoginUser = document.getElementById("userLogin");
let inputLoginPsw = document.getElementById("pswLogin");
let informTextLogin = document.getElementById("inform-text");

inputLoginButton.addEventListener("click", () => {
    let valueLoginUser = inputLoginUser.value;
    let valueLoginPsw = inputLoginPsw.value;
    if (searchUser("nombre", valueLoginUser, valueLoginPsw) == "exist") {
        //EL USUARIO EXISTE 
        console.log("Logeado Correctamente");
        //CAMBIAR A LA PAGINA PRICIPAL CON EL LOGIN YA REGISTRADO
    } else {
        // informTextLogin.style.border = "red";
        // informTextLogin.innerText = "No existe ese usuario";
        console.log("El usuario o la contraseña no son correctas");
    }

})

//MOSTRAR LISTADO DE USUARIOS
console.log(users);