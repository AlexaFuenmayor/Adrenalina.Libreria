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
const biblioteca = document.getElementById ("biblio");


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



const datoCurioso = () => {
  let dato = prompt(
    "¿Te interesa saber un dato curioso de la Biblia? ( Escribe: si o no)"
  ).toLocaleLowerCase();

  switch (dato) {
    case "si":
      alert(
        "Los libros de la Biblia están organizados por estilo de redacción, no por cronología"
      );
      break;
  }
};

const datoCuriosoQuijote = () => {
  let datos2 = prompt(
    "¿Te interesa saber un dato curioso Sobre el Quijote? ( Escribe: si o no)"
  ).toLocaleLowerCase();

  switch (datos2) {
    case "si":
      alert("Gran parte de la obra fue escrita desde la cárcel");
      break;
  }
};

const datoCuriosoPrincipito = () => {
  let datos3 = prompt(
    "¿Te interesa saber un dato curioso Sobre el Principito? ( Escribe: si o no)"
  ).toLocaleLowerCase();

  switch (datos3) {
    case "si":
      alert("En Francia hay un parque temático inspirado en El Principito");
      break;
  }
};

const datoCuriosoDavinci = () => {
  let datos4 = prompt(
    "¿Te interesa saber un dato curioso Sobre el Código Da Vinci? ( Escribe: si o no)"
  ).toLocaleLowerCase();

  switch (datos4) {
    case "si":
      alert(
        "En Filipinas el libro está prohibido por la censura para los menores de 18 años. Básicamente por la supuesta relación entre Jesús y María Magdalena."
      );
      break;
  }
};

const datoCuriosoAlquimista = () => {
  let datos5 = prompt(
    "¿Te interesa saber un dato curioso Sobre el Alquimista? ( Escribe: si o no)"
  ).toLocaleLowerCase();

  switch (datos5) {
    case "si":
      alert(
        "El alquimista fue el segundo libro publicado por el escritor brasileño Paulo Coelho."
      );
      break;
  }
};

const datoCuriosoAnne = () => {
  let datos5 = prompt(
    "¿Te interesa saber un dato curioso Sobre el Diario de Ana Frank? ( Escribe: si o no)"
  ).toLocaleLowerCase();

  switch (datos5) {
    case "si":
      alert(
        "Este libro se ha traducido a más de 70 idiomas, y figura en el “Registro de la Memoria del Mundo” de la UNESCO."
      );
      break;
  }
};


login1.onclick = function () {
  iniciarSesion();
};

login2.onclick = function () {
  cerrarSesion();
};

datoCurioso1.onclick = function () {
  datoCurioso();
};

datoCurioso2.onclick = function () {
  datoCuriosoQuijote();
};
datoCurioso3.onclick = function () {
  datoCuriosoPrincipito();
};
datoCurioso4.onclick = function () {
  datoCuriosoDavinci();
};

datoCurioso5.onclick = function () {
  datoCuriosoAlquimista();
};

datoCurioso6.onclick = function () {
  datoCuriosoAnne();
};


