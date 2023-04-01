/********** Menu ********/  
//Utiliza funciones anonimas autoejectuables
((d)=>{
 const $btnMenu = d.querySelector(".menu-btn"),
  $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", e=> {
    $btnMenu.firstElementChild.classList.toggle("none"); // toggle permite cada vez que se ejecute cambiar de estado la visibilidad del elemento HTML, es decir si está visible pasa a oculto y si se encuentra oculto pasa a visible. 
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active")
  });

  d.addEventListener("click", e => {
    if(!e.target.matches(".menu a")) return false;

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active")
  });
})(document); //Pasa como parametro el (d) "document", para no tener que llamarlo cada vez que necesita interactuar con el DOM.
// El signo $ es la abreviatura de jQuery para getElementById.


/* ********** ContactForm ********** */
((d) => {
 const $form = d.querySelector(".contact-form"),
   $loader = d.querySelector(".contact-form-loader"),
   $response = d.querySelector(".contact-form-response");

 $form.addEventListener("submit", (e) => {
   e.preventDefault();
   $loader.classList.remove("none");
   fetch("https://formsubmit.co/ajax/your@email.com", {
     method: "POST",
     body: new FormData(e.target),
   })
     .then((res) => (res.ok ? res.json() : Promise.reject(res)))
     .then((json) => {
       console.log(json);
       location.hash = "#gracias";
       $form.reset();
     })
     .catch((err) => {
       console.log(err);
       let message =
         err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
       $response.querySelector(
         "h3"
       ).innerHTML = `Error ${err.status}: ${message}`;
     })
     .finally(() => {
       $loader.classList.add("none");
       setTimeout(() => {
         location.hash = "#close";
       }, 3000);
     });
 });
})(document);


