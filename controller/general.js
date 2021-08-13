
/* Abrir menu responsivo */
function open_menu() {
    document.getElementById("responsive-menu-background").style.height = "100%";
}

/* Cerrar menu responsivo */
function close_menu() {
    document.getElementById("responsive-menu-background").style.height = "0%";
}

/* Cambiar entre páginas */
function chage_page(page) {
    if (page === "w") {
        window.location = "wedding.html";
    } else if (page === "d") {
        window.location = "details.html";
    } else if (page === "r") {
        window.location = "rsvp.html";
    } else {
        window.location = "home.html";
    }
}

/* Cargar pagina 'preloading' */
window.addEventListener("load", function () {
    var load_screen = document.getElementById('load_screen');
    document.body.removeChild(load_screen);
});