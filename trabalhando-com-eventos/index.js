function register(ev){
console.log(ev);
const sectionElement = ev.currentTarget.parentNode
const username = sectionElement.children.username.value
const password= sectionElement.children.password.value
const passwordConfirmation = sectionElement.children.passwordConfirmation.value

if(password === passwordConfirmation){
  alert('Usuário ' + username + ' Registrado! ')
}else{
  alert('As senhas não conferem! ')
}
}

const button = document.querySelector('#registre-button')

button.addEventListener('click', register)

function removeLister(){
  button.removeEventListener('click',register)
  alert('Evento Remove Lister')
}

button.addEventListener('mouseover', function(ev){ console.log(ev.currentTarget)})