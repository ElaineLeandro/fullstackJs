function addContact(){
  const contactSection = document.getElementById('contacts-list')

  const h3 = document.createElement('h3')
  h3.innerHTML = 'Contact'

  const ul = document.createElement('ul')
  const nameLi = document.createElement('li')
  nameLi.innerText = 'Nome:'
  const nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.name = 'fullname'
  nameLi.appendChild(nameInput)
  ul.appendChild(nameLi)
  ul.appendChild(document.createElement('br'))

  const phoneLi = document.createElement('li')
  phoneLi.innerText = 'Telefone'
  const phoneInput = document.createElement('input')
  phoneInput.type = 'text'
  phoneInput.name = 'phone'
  phoneLi.appendChild(phoneInput)
  ul.appendChild(phoneLi)
  ul.appendChild(document.createElement('br'))


  const addressLi = document.createElement('li')
  addressLi.innerHTML = '<label for="adress">Endereço</label>'
  const addressInput =  document.createElement('input')
  addressInput.type = 'text'
  addressInput.name = 'address'
  addressInput.id = 'address'
  addressLi.appendChild(addressInput)
  ul.appendChild(addressLi)
  ul.appendChild(document.createElement('br'))

  
  

  contactSection.append(h3, ul)

  
}


function removeContact(){
  const contactSection = document.querySelector('#contacts-list')

  const titles = document.querySelectorAll('h3')
  console.log(titles);
  const contacts = document.querySelectorAll('ul')
  
  contactSection.removeChild(titles[titles.length - 1])
  contactSection.removeChild(contacts[contacts.length - 1])

}