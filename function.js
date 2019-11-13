const a = document.getElementById('menu_button');
a.addEventListener('click', presionado);
const b = document.querySelector('.item');

function presionado(){
  if (b.classList.contains('is-active')) {
    b.classList.remove('is-active');
  } else {
    b.classList.add('is-active');
  }
}
