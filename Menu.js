function Login(){
  var user, password

  user= document.getElementById("Usuario").value;
  password= document.getElementById("Password").value;
  if( user == "ARMUSIC2023" && password == "1234"){
    window.location = "SESION.html";
  } else{
    swal("Datos incorrectos!", "Vuelve a intentarlo")
  }}