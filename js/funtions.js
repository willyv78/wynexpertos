// Mis funciones personalizadas
function selectTab(argument) {
    var id_panel = $(this).find(".nav-link").attr("href");
    $(".nav-link").removeClass("active");
    $(".tab-pane").removeClass("show");
    $(id_panel).addClass("show");
}

function linkActivo(argument) {
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
}

function cargarInicio(argument) {
    $(".nav-item").on("click", linkActivo);
    $(".nav-item").on("click", selectTab);
}

$(function() {
    cargarInicio();
});