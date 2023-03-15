const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slider = document.querySelector('.pelis___1');
prev.addEventListener('click', () =>{
  slider.scrollLeft -= 320
})
next.addEventListener('click', () =>{
  slider.scrollLeft += 320
})
