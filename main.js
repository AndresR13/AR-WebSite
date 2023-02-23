function login(){
  var user, password

  user= document.getElementById("Usuario").value;
  password= document.getElementById("Contraseña").value;
  if( user == "prueba" && password == "1234"){
    window.location = "inicio.html";
  } else{
    alert("Datos incorrectos")
  }
}