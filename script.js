let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const carrusel = document.getElementById('carrusel');
    const comentarios = carrusel.getElementsByClassName('comentario');
    let index = 0;

    function showNextComment() {
        // Ocultar el comentario actual
        comentarios[index].classList.remove('visible');
        
        // Calcular el próximo índice
        index = (index + 1) % comentarios.length;
        
        // Mostrar el próximo comentario
        comentarios[index].classList.add('visible');
    }

    // Inicializar el primer comentario como visible
    comentarios[index].classList.add('visible');

    // Cambiar el comentario cada 2 segundos
    setInterval(showNextComment, 2000);
});



//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 
