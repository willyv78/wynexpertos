// Mis funciones personalizadas
// funcion que se ejecuta al hacer el envio de formulario de contacto
function enviarForm(argument) {
    var nom = $("#form-nom").val();
    var email = $("#form-email").val();
    var tel = $("#form-tel").val();
    var men = $("#form-men").val();
    if(nom.length < 1){
        $(this).addClass(".error");
        $("#form-nom").focus();
        alert("Este campo es requerido");
        return false;
    }
    if(email.length < 1){
        $(this).addClass(".error");
        $("#form-email").focus();
        alert("Este campo es requerido");
        return false;
    }
    if(tel.length < 1){
        $(this).addClass(".error");
        $("#form-email").focus();
        alert("Este campo es requerido");
        return false;
    }
    if(men.length < 1){
        $(this).addClass(".error");
        $("#form-email").focus();
        alert("Este campo es requerido");
        return false;
    }
    $.ajax({
        url:"./php/ins_upd_men.php",
        cache:false,
        type:"POST",
        data:"nom="+nom+"&email="+email+"&tel="+tel+"&men="+men,
        success: function(datos){
          if(datos !== ''){
            alert(datos);
            swal({
                title: "Felicidades!",
                text: "El mensaje a sido envíado correctamente!\nPronto nos comunicaremos con usted.",
                type: "success",
                confirmButtonText: "Continuar",
                confirmButtonColor: "#94B86E"
            });
          }
          else{
            setTimeout(esperehide, 500);
            swal({
              title: "Error!",
              text: "Ha ocurrido un error,\nNo se ha realizado cambios,\nrevise la información diligenciada he intentelo nuevamente.",
              type: "error",
              confirmButtonText: "Aceptar",
              confirmButtonColor: "#E25856"
            });
            return;
          }
        }
    });
}
// Funcion que se ejecuta al hacer click en las tabs de servicios y hace que se vea el contenido.
function selectTab(argument) {
    var id_panel = $(this).find(".nav-link").attr("href");
    $(".tabs-4 > .nav-link").removeClass("active");
    $(".tab-content > .tab-pane").removeClass("show");
    $(id_panel).addClass("show");
}
// Función que se ejecuta al hacer click en las tabs de servcios y activa la tab
function linkActivo(argument) {
    $(".tabs-4 > .nav-item").removeClass("active");
    $(this).addClass("active");
}
// funcion que se ejecuta al cargar la página
function cargarInicio(argument) {
    $(".tabs-4 > .nav-item").on("click", linkActivo);
    $(".tabs-4 > .nav-item").on("click", selectTab);
    $(".btn-ins").on("click", enviarForm);
}

$(function() {
    cargarInicio();
});