// Mis funciones personalizadas
function selectTab(argument) {
    var id_panel = $(this).find(".nav-link").attr("href");
    $(".tabs-4 > .nav-link").removeClass("active");
    $(".tab-content > .tab-pane").removeClass("show");
    $(id_panel).addClass("show");
}

function linkActivo(argument) {
    $(".tabs-4 > .nav-item").removeClass("active");
    $(this).addClass("active");
}

function cargarInicio(argument) {
    $(".tabs-4 > .nav-item").on("click", linkActivo);
    $(".tabs-4 > .nav-item").on("click", selectTab);
}

$(function() {
    cargarInicio();
});