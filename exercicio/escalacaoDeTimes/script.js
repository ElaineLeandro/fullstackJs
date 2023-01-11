/**# 8 - Exercício 11

### Escalação do Time

Construa uma página web que permita montar a escalação de um time de jogadores. Nele deverá ser possível:

- Escalar um jogador
    - Informar a posição do jogador a ser escalado para o time.
    - Informar o nome do jogador.
    - Informar o número da camisa do jogador.
    - Ter um botão “Escalar” que pergunta ao usuário se ele deseja confirmar a escalação daquele jogador e então insere as informações em uma lista na página.
    - Após o jogador ser escalado os campos de texto devem ser limpos.
- Remover um jogador
    - Informar o número da camisa do jogador.
    - Ter um botão “Remover” que pergunta ao usuário se ele deseja confirmar a remoção daquele jogador e então exclui ele da lista na página.
    - Após o jogador ser removido o campo de texto deve ser limpo.

Dica: lembrando que é possível acessar o texto de um input através da propriedade value.

 */

function addTime(event){
  event.preventDefault()
  const nameJogador = document.querySelector('#name')
  const nameTime = document.querySelector('#time')
  const numberShirt = document.querySelector('#number')
  
  const clear = [nameJogador, nameTime, numberShirt]
  
  const scale  = prompt(`'Confirma a escala deste Time? ' ${nameJogador.value} ${nameTime.value} ${numberShirt.value}`)
  if(scale){
    const screen = document.querySelector('#screen')
    const list = document.createElement('li')
    list.id = 'tartaruga' + numberShirt.value 
    list.innerText = nameJogador.value + ' ' + nameTime.value + ' ' + numberShirt.value
      screen.appendChild(list)
    
    clear.forEach( remove => remove.value = '' )
  }
}

function removeTartaruga(event){
  event.preventDefault()
 const numberShirt = document.querySelector('#number')
 const numberIdShirt = document.querySelector('#tartaruga' + numberShirt.value)
 const removeIdShirt = prompt(`Confirma a exclusão do jogador: ${numberIdShirt.innerText}`)
 if(removeIdShirt){
  const screen = document.querySelector('#screen')
  screen.removeChild(numberIdShirt)
 }
}