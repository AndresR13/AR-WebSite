function login(){
  var user, password

  user= document.getElementById("Usuario").value;
  password= document.getElementById("Contraseña").value;
  if( user == "ARMUSIC2023" && password == "123456"){
    window.location = "inicio.html";
  } else{
    alert("Datos incorrectos")
  }
}
