const login1 = document.getElementById("login1");
const login2 = document.getElementById("login2");
const loginUser = document.getElementById("loginUser");
const textLogin = document.getElementById("textLogin");
const textLogout = document.getElementById("textLogout");
const datos = document.getElementById("datoCurioso1");
const datos2 = document.getElementById("datoCurioso2");
const datos3 = document.getElementById("datoCurioso3");
const datos4 = document.getElementById("datoCurioso4");
const datos5 = document.getElementById("datoCurioso5");
const datos6 = document.getElementById("datoCurioso6");
const biblio = document.getElementById ("biblio");


textLogin.style.visibility = "hidden";
textLogout.style.visibility = "hidden";

const show = () => {
  if (textLogin.style.visibility == "hidden") {
    textLogin.style.visibility = "visible";
  } else {
    textLogin.style.visibility = "hidden";
  }
};

const show2 = () => {
  if (textLogout.style.visibility == "hidden") {
    textLogout.style.visibility = "visible";
  } else {
    textLogout.style.visibility = "hidden";
  }
};

const iniciarSesion = () => {
  let usuario = prompt("Ingresa tu nombre");

  localStorage.setItem("name", usuario);

  loginUser.innerHTML = usuario;
};

if (localStorage.getItem("name")) {
  loginUser.innerHTML = localStorage.getItem("name");
};

const cerrarSesion = () => {
  loginUser.innerHTML = " ";
  localStorage.clear();
};

const entradaBiblioteca = () => {
    let edad = alert("Bienvenido a Biblioteca");
    let nombre = prompt("Ingresa tu nombre");
    let sexo = prompt(nombre + " ¿Eres Hombre o Mujer?");
  
    switch (sexo) {
      case "hombre":
        edad = prompt("¿Que edad tienes?");
  
        if (edad <= 18) {
          alert("Debes ser mayor de 18 años para obtener tu entrada");
        } else if (edad > 24) {
          alert(
            "Tienes acceso. El costo de la entrada a La Biblioteca es de: 2.000$"
          );
        } else if (edad > 19 && edad < 24) {
          alert(
            "Tienes acceso. El costo de la entrada a La Biblioteca es de: 1.000$"
          );
        }
        break;
      case "mujer":
        edad = prompt("Que edad tienes");
  
        if (edad <= 18) {
          alert("Debes ser mayor de 18 años para obtener tu entrada");
        } else if (edad >= 25) {
          alert(
            "Tienes acceso. El costo de la entrada a La Biblioteca es de: 5.000$"
          );
        } else if (edad > 18 && edad < 25) {
          alert(
            "Tienes acceso. El costo de la entrada a La Biblioteca es de: 2.000$"
          );
        } else {
          alert("Opción Inválida");
        }
        break;
      default:
        alert("Es necesario que ingreses tu sexo");
    }
  };

  login1.onclick = function () {
    iniciarSesion();
  };
  
  login2.onclick = function () {
    cerrarSesion();
  };

bibliot.onclick = function(){
    entradaBiblioteca();
}