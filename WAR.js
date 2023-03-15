const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slider = document.querySelector('.pelis___1');
prev.addEventListener('click', () =>{
  slider.scrollLeft -= 320
})
next.addEventListener('click', () =>{
  slider.scrollLeft += 320
})

const preve = document.querySelector('.preve');
const nexte = document.querySelector('.nexte');
const sliders = document.querySelector('.pelis--1');
preve.addEventListener('click', () =>{
  sliders.scrollLeft -= 320
})
nexte.addEventListener('click', () =>{
  sliders.scrollLeft += 320
})