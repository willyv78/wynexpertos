// Mis funciones personalizadas

function linkActivo(argument) {
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
}

function cargarInicio(argument) {
    $(".nav-item").on("click", linkActivo);
}

$(function() {
    cargarInicio();
});