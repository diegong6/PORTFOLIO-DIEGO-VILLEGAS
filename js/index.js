//LIGHTBOX GALLERY

const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const hamburguer1 = document.querySelector(".hamburguer");

// console.log(imagenes)
// console.log(imagenesLight)
// console.log(contenedorLight)

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})

contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        hamburguer1.style.opacity = '1'
    }
})

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    hamburguer1.style.opacity = '0'
}

//INTRO JS

const intro1 = document.querySelector(".intro1");
document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    intro1.classList.add("display-none");
  }, 900);
});


//BUTTON UP

const btn_up = document.getElementById("boton_up")
btn_up.style.display = 'none'
btn_up.addEventListener('click', () => {
        window.scrollTo(0, 0)
      })

    window.onscroll = () => {
      add_btn_up()
    }

    const add_btn_up = () => {
      if (window.scrollY < 300) {
        btn_up.classList.remove("btn_up-on")
        btn_up.style.display = 'none'
      } else {
        btn_up.classList.add("btn_up-on")
        btn_up.style.display = ''
      }

    }