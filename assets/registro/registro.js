/* quiero guardar los datos del usuario en el storage key usuarios
value objetousuarios */

$(document).ready(() => {

  /* quiero guardar los datos del usuario en el storage
  key usuarios
  value objetousuarios */

  function ExtisteListaUsuarioEnElStorage() {
    let existe = false;

    if (localStorage.getItem("usuarios") != null) {
      {
        existe = true;
      }
    }

    return existe
  }

  function crearListaDeUsuario() {
    localStorage.setItem("usuarios", JSON.stringify([]));
  }

  function obtenerUsuariosDeStorage() {
    return JSON.parse(localStorage.getItem("usuarios"));
  }

  function guardarUsuariosEnStorage(usuario) {
    localStorage.setItem("usuarios", JSON.stringify(usuario));
  }

  class Usuario {
    constructor(nuevousuario) {
      this.nombre = nuevousuario.nombre;
      this.apellido = nuevousuario.apellido;
      this.email = nuevousuario.email;
      this.password = nuevousuario.password;
    }
  }

  function cargarNuevoUsuario(usuarioACargar) {

    const arrayDeStorage = obtenerUsuariosDeStorage();
    arrayDeStorage.push(usuarioACargar);
    guardarUsuariosEnStorage(arrayDeStorage);
  }

  function presionaboton() {


    if (!ExtisteListaUsuarioEnElStorage()) {
      crearListaDeUsuario()
    }



    let nuevousuario = new Usuario({
      nombre: nombre.value,
      apellido: apellido.value,
      email: email.value,
      password: contraseña.value
    });




    cargarNuevoUsuario(nuevousuario);


  }

  function validardatos() {
    if (nombre.value.length == 0 || apellido.value.length == 0 || email.value.length == 0 || contraseña.value.length == 0) {
      mensaje.innerText = "Falto rellenar un campo"
      mensaje.className = "mensaje_incorrecto";

      nombre.classList.add("is-invalid");
      apellido.classList.add("is-invalid");
      email.classList.add("is-invalid");
      contraseña.classList.add("is-invalid");
    }
    else {

      mensaje.innerText = "Sus datos se guardaron con exito";
      mensaje.className = "mensaje_correcto";
      nombre.classList.add("is-valid");
      apellido.classList.add("is-valid");
      email.classList.add("is-valid");
      contraseña.classList.add("is-valid");



    }
  }



  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido")
  const email = document.getElementById("email");
  const contraseña = document.getElementById("password");
  const mensaje = document.getElementById("mensajeregistro")
  const botoncargar = document.getElementById("botonregistro");
  botoncargar.addEventListener("click", presionaboton);
  botoncargar.addEventListener("click", validardatos)



})