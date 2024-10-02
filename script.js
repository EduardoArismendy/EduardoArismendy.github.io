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



//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 


// Código para los artículos de pensamientos
const pensamientos = [
  {
    title: "El Valor del Silencio",
    content: "En un mundo lleno de ruido, el silencio se ha convertido en un lujo..."
  },
  // (otros pensamientos)
    {
  title: "La Vida como un Libro",
  content: "Imagina tu vida como un libro en blanco, donde cada día es una nueva página por escribir. Tú eres el autor de tu propia historia, con el poder de decidir qué aventuras vivirás, qué personajes incluirás y qué lecciones aprenderás. Cada experiencia, sea buena o mala, es un capítulo que contribuye a la riqueza de tu narrativa personal. Al final, lo que importa no es la longitud del libro, sino la calidad de su contenido y el impacto que tiene en ti y en quienes te rodean."
},
{
  title: "El Éxito y la Felicidad",
  content: "Muchos persiguen el éxito creyendo que este les traerá felicidad, pero quizás estemos enfocando las cosas al revés. La verdadera clave podría estar en buscar primero la felicidad. Cuando somos felices, irradiamos una energía positiva que atrae oportunidades y nos impulsa a dar lo mejor de nosotros mismos. Este estado mental nos permite ver soluciones donde otros ven problemas, y nos da la resistencia necesaria para superar obstáculos. Así, la felicidad se convierte en el cimiento sobre el cual construimos nuestro éxito personal y profesional."
},
{
  title: "El Fruto de la Paciencia",
  content: "En una era de gratificación instantánea, la paciencia parece haber perdido su valor. Sin embargo, las recompensas más dulces de la vida a menudo requieren tiempo y perseverancia. Al igual que un agricultor que cuida diligentemente sus cultivos, debemos nutrir nuestros sueños y metas con dedicación constante. Aunque el proceso pueda ser desafiante, incluso amargo a veces, el resultado final —sea un logro personal, una relación profunda o un proyecto culminado— tiene un sabor incomparablemente dulce. La paciencia nos enseña a apreciar no solo el destino, sino también el viaje."
},
{
  title: "Haciendo que los Días Cuenten",
  content: "Es fácil caer en la rutina de simplemente contar los días, esperando que pase el tiempo hasta el próximo fin de semana, las próximas vacaciones o el próximo gran evento. Pero ¿qué pasaría si invirtiéramos esa energía en hacer que cada día cuente? Esto implica vivir con intención, buscando oportunidades para aprender, crecer y hacer una diferencia, por pequeña que sea. Puede ser tan simple como una palabra amable a un extraño o dar un paso hacia una meta personal. Al final, no es la cantidad de días en nuestra vida lo que importa, sino la cantidad de vida en nuestros días."
}
];

let currentArticle = 0;
const articlesContainer = document.getElementById('articles');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Función que crea los artículos
function createArticles() {
  pensamientos.forEach((pensamiento, index) => {
    const article = document.createElement('div');
    article.className = 'article';
    article.innerHTML = `
      <h2 class="article-title">${pensamiento.title}</h2>
      <p class="article-content">${pensamiento.content}</p>
    `;
    if (index === 0) article.classList.add('active');
    articlesContainer.appendChild(article);
  });
}

// Función que actualiza los botones de navegación de artículos
function updateButtons() {
  prevBtn.disabled = currentArticle === 0;
  nextBtn.disabled = currentArticle === pensamientos.length - 1;
}

// Función que muestra un artículo específico
function showArticle(index) {
  const articles = document.querySelectorAll('.article');
  articles.forEach((article, i) => {
    article.classList.toggle('active', i === index);
  });
  updateButtons();
}

// Funciones para navegar entre artículos
function nextArticle() {
  if (currentArticle < pensamientos.length - 1) {
    currentArticle++;
    showArticle(currentArticle);
  }
}

function prevArticle() {
  if (currentArticle > 0) {
    currentArticle--;
    showArticle(currentArticle);
  }
}

// Inicializar los artículos y botones de navegación
createArticles();
updateButtons();
nextBtn.addEventListener('click', nextArticle);
prevBtn.addEventListener('click', prevArticle);

// Código para la sección de comentarios
const commentsList = document.getElementById('commentsList');
const hiddenComments = document.getElementById('hiddenComments');
const commentText = document.getElementById('commentText');
const submitComment = document.getElementById('submitComment');
const moreCommentsBtn = document.getElementById('moreCommentsBtn');

// Función para agregar un nuevo comentario
function addComment(text) {
  const comment = document.createElement('div');
  comment.className = 'comment';
  const date = new Date().toLocaleString();
  comment.innerHTML = `
    <div class="comment-author">Usuario Anónimo</div>
    <div class="comment-date">${date}</div>
    <div class="comment-content">${text}</div>
  `;
  
  // Mover los comentarios existentes al área oculta
  while (commentsList.firstChild) {
    hiddenComments.prepend(commentsList.firstChild);
  }
  
  // Agregar el nuevo comentario al área visible
  commentsList.appendChild(comment);
  
  // Mostrar el botón "Ver más comentarios" si hay comentarios ocultos
  if (hiddenComments.children.length > 0) {
    moreCommentsBtn.style.display = 'block';
  }
}

// Evento al enviar un comentario
submitComment.addEventListener('click', () => {
  const text = commentText.value.trim();
  if (text) {
    addComment(text);
    commentText.value = '';
  }
});

// Mostrar/ocultar comentarios ocultos
moreCommentsBtn.addEventListener('click', () => {
  const isHidden = hiddenComments.style.display === 'none';
  hiddenComments.style.display = isHidden ? 'block' : 'none';
  moreCommentsBtn.textContent = isHidden ? 'Ocultar comentarios' : 'Ver más comentarios';
});

// Comentario inicial
addComment("Me encanta este blog. Siempre encuentro inspiración en tus pensamientos.");
