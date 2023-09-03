let div = document.getElementById("divBtn")
let saludar = document.getElementById("saludarBtn")

div.addEventListener("click", function (){
    alert("Hola. Soy el div.")
})

saludar.addEventListener("click", function (event) {
    event.stopPropagation();
});


