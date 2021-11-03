
let myModal = new bootstrap.Modal(document.getElementById("modal"))
const boton = document.getElementById("user")
boton.addEventListener("click", () => {
  myModal.toggle()
})

const email = document.getElementById("emaillogin");
const password = document.getElementById("passwordlogin");
const mensaje = document.getElementById("mensaje");
const botoningresar = document.getElementById("botonlogin");
botoningresar.addEventListener("click", validarusuario);

function validarusuario() {

  if (email.value.length == 0 || password.value.length == 0) {
    mensaje.innerText = "El email o la contraseña son incorrectos";
    mensaje.className = "mensaje_incorrecto";
    email.classList.add("is-invalid");
    password.classList.add("is-invalid");

  } else {

    if (!existeUsuario(email.value, password.value)) {
      mensaje.innerText = "El email o la contraseña son incorrectos";
      mensaje.className = "mensaje_incorrecto";
      email.classList.add("is-invalid");
      password.classList.add("is-invalid");
    }
    else {
      mensaje.innerText = "sus datos son correctos";
      mensaje.className = "mensaje_correcto";
      email.classList.add("is-valid");
      password.classList.add("is-valid");




    }
  }
}


function existeUsuario(email, contraseña) {
  const usuarios = obtenerUsuariosDeStorage();
  let existe = false;
  for (const usuario of usuarios) {
    const emailactual = usuario.email;
    const contraseñaactual = usuario.password;
    if (emailactual == email && contraseñaactual == contraseña) {
      existe = true;
      break;
    }
  }
  return existe;
}


