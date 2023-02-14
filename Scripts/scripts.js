
const sections = document.querySelectorAll('section');
const buttons = document.querySelectorAll('.btn');

//variable de seccion 
let sec; 

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        removeVisibility();
        makeVisible(btn.id);
    })

})

function removeVisibility()
{
    console.log('borra la visibilidad');
    sections.forEach((section) => {
        section.style.visibility = "hidden";
    })
}

function makeVisible(ids)
{
    console.log('entra en make visible y el id enviado es '+ ids);
    switch(ids) {
        case "home-button":
          sec = document.getElementById('home');
          sec.style.visibility = "visible";
          break;
        case "sobremi-button":
            sec = document.getElementById('sobremi');
            sec.style.visibility = "visible";
          break;
        case "estudios-button":
            sec = document.getElementById('estudios');
            sec.style.visibility = "visible";
        break;
        case "experiencia-button":
            sec = document.getElementById('experiencia');
            sec.style.visibility = "visible";
        break;  
      }
    
}


// codigo referencia 
// const panels = document.querySelectorAll('.panel')
// panels.forEach((panel) =>{
//     panel.addEventListener('click', () => {
//         removeActiveClases()
//         panel.classList.add('active')
//     })
// })

// function removeActiveClases(){
//     panels.forEach((panel) => {
//         panel.classList.remove('contacto')
//     })
// }