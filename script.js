function showAlert() { 
    alert("¡Hola, esto es una alerta desde JavaScript");
}
document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})