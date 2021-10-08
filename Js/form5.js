var email = document.getElementById("campoEmail")
var confirmCorreo = document.getElementById("campoConfirmarCorreo")
/* var button = document.getElementById("button") */
let emailValue = ""
let confirmEmailValue= ""

/* button.addEventListener("click",()=>{
 validar_pais()
}) */

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

}

modules.exports.validar_confirmar_correo = validar_confirmar_correo
modules.exports.validar_pais = validar_pais