var email = document.getElementById("campoEmail")
var confirmCorreo = document.getElementById("campoConfirmarCorreo")
/* var button = document.getElementById("button") */
let emailValue = ""
let confirmEmailValue= ""

email.addEventListener("change",(event) => {
  emailValue = event.target.value 
})

confirmCorreo.addEventListener("change",(event)=>{
  confirmEmailValue = event.target.value
  validar_confirmar_correo(emailValue,confirmEmailValue)
})


function validar_confirmar_correo(email,confirmEmail){
  if(confirmEmail === ""){
    alert("datos vacios")
  }
  if(confirmEmail.length !== email.length){
    alert("los correos no son iguales")
  }
}

function validar_pais(string){
  var validRegex = /[A-Z]+[a-z]+(?:\.[a-z])*$/;
  if (string.value.match(validRegex)) {
    alert("Pais valido");
    document.form1.campoPais.focus();
    return true;
  } else {
    alert("El pais debe iniciar en mayuscula y terminar en minuscula");
    document.form1.campoPais.focus();
    return false;
  }
}

