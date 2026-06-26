const formRegistro = document.getElementById("formRegistro");
if(formRegistro){
    formRegistro.addEventListener("submit", function(e){
        e.preventDefault();
        const usuario = document.getElementById("usuario").value.trim()