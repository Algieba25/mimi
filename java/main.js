onload = () =>{
    document.body.classList.remove("container");
};
document.addEventListener("DOMContentLoaded", function() {
    var titulo = document.querySelector(".titulo");
    setTimeout(function() {
        titulo.classList.add("visible");
    }, 1000);
});