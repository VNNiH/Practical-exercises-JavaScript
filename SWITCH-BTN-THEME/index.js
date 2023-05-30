
const button = document.getElementById('switchBtn')
const spanBtn = document.getElementById('spanBtn')

button.addEventListener('click', switchTheme)

function switchTheme(){
  document.body.classList.toggle('is-light')
  document.body.classList.toggle('is-dark')

  if(document.body.classList.contains('is-dark')) {
    spanBtn.textContent = 'LIGTH MODE'
  } else {
    spanBtn.textContent = 'DARK MODE'
  }
 }

 