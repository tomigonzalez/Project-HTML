

/*////////////////////////////////////////////*/



// Recupera todos los elementos con la clase "container1"
const containers = document.querySelectorAll('.container1');
// Comprobamos si el usuario ha alcanzado el elemento con el ID "my-element"
let myElement = document.getElementById('my-element');
let targetPosition = myElement.offsetTop;


// Comprobamos si el usuario ha alcanzado el elemento con el ID "my-element"

 

// Itera a través de cada elemento y agrega la animación de progreso
const animation = () => {containers.forEach(container => {
  
  const circularProgress = container.querySelector('.circular-progress');
  const progressValue = container.querySelector('.progress-value');
  let progressStartValue = 0;    
  let progressEndValue = container.getAttribute('data-progress-end'); // Recupera el valor final del progreso del atributo "data-progress-end" del elemento
  let speed = 10;

  let progress = setInterval(() => {
    progressStartValue++;

    circularProgress.style.background = `conic-gradient(#9fa077 ${progressStartValue * 3.6}deg, #323132 0deg)`;

    if(progressStartValue == progressEndValue){
      clearInterval(progress);
   
       }    
  }, speed); 
})};

let progress = null;



window.addEventListener("scroll",function scrollHandler() {
  // Ejecutar la animación si el usuario ha alcanzado el elemento con el ID "my-element"
  if (window.pageYOffset >= targetPosition) {
    animation();
    // Eliminar el listener después de que se haya ejecutado una vez
    window.removeEventListener("scroll", scrollHandler);
  }
});

/*////////////////////////////////////////////////////////////////////////*/
//Contenedor de Zapatillas
const contposition = document.querySelector(".contposition");

const renderProduct = (product) => {
  const { id, img, name,desc } = product;


  return `
  <div class="card1">
                <div class="card_img">
                    <img src="${img}" alt="pag">
                    <a href="https://github.com/tomigonzalez" TARGET="_blank"><div class="transition"></div></a>
                </div>
                <h2 class="title colors">${name}</h2>
                <div class="contenido">
                    
                    <p class="txt proyects">
                    ${desc}
                    </p>
                </div>      
  </div>
  `;
};


//Renderizar products populares
const renderProyect = () => {
  contposition.innerHTML += mostPopularProducts()
  .map(renderProduct) 
  .join("");
};

renderProyect();
/*//////////////////////////////////////////////////////////////////////////////////////*/

const inputs = document.querySelectorAll('input');


inputs.forEach (input => {
  input.onfocus = () => {
    input.previousElementSibling.classList.add('active');
  }
  
    input.onblur =() =>{ 
      if (!input.value){
      input.previousElementSibling.classList.remove('active');}
      else {input.previousElementSibling.classList.add('active');}}
});



function validateForm() {
  var name =  document.getElementById('name').value;
  if (name == "") {
      document.querySelector('.status').innerHTML = "El nombre no puede estar vacio";
      return false;
  }
  var email =  document.getElementById('email').value;
  if (email == "") {
      document.querySelector('.status').innerHTML = "El email no puede estar vacio";
      return false;
  } else {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(email)){
          document.querySelector('.status').innerHTML = "Email format invalid";
          return false;
      }
  }
  var subject =  document.getElementById('subject').value;
  if (subject == "") {
      document.querySelector('.status').innerHTML = "Subject cannot be empty";
      return false;
  }
  var message =  document.getElementById('message').value;
  if (message == "") {
      document.querySelector('.status').innerHTML = "Message cannot be empty";
      return false;
  }
  document.querySelector('.status').innerHTML = "Sending...";
  window.location.href = "index2.html";
}

///////////////////////////nav////////////////////////////////

// selector
const menu = document.querySelector('.hamburger');
const navMenu = document.getElementById('nav')
// method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);

///////////////////////////////cerrar con scroll///////////////////////////////////////
const closeOnScroll = () => {
  navMenu.classList.remove("is_active");
  menu.classList.remove("is-active");return;
  

}
window.addEventListener("scroll", closeOnScroll);