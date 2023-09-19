const hamburguer = document.querySelector(".hamburguer");
const menu = document.querySelector(".menu-navegacion");
const btn_up1 = document.getElementById("boton_up")

// console.log(menu)
// console.log(hamburguer)

hamburguer.addEventListener('click', ()=> {
  menu.classList.toggle("spread");
  btn_up1.style.display = 'none'
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburguer    ){



        menu.classList.toggle("spread")

        btn_up1.style.display = ''
    }
})
