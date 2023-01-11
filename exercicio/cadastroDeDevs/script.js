/**# Exercício 12

## Cadastro de Devs

Construa uma página web que permita cadastrar desenvolvedores, suas tecnologias e tempos de experiência. 

- A página deve ter um input para o nome completo do desenvolvedor e um botão para adicionar uma nova tecnologia.
- Ao clicar no botão um evento deve ser disparado criando no formulário uma nova linha de inputs contendo:
    - um campo de texto para o nome da tecnologia
    - um grupo de botões tipo “radio” com opções de tempo de experiência (por exemplo, “0-2 anos”, “3-4 anos” e “5+ anos”)
    - um botão de remover que deve excluir essa linha.
- O formulário também deve ter um botão de cadastrar que salva as informações do dev em um array e limpa o formulário. Para testar o funcionamento você pode utilizar um simples console.log()

Para esse exercício você deve utilizar apenas eventos adicionados via javascript e a página deve funcionar sem acionar um recarregamento.
 * 
 */
const enviar = document.querySelector('#env')


function casdastroDev(ev){
  ev.preventDefault()
  const formCadastro = document.querySelector('#cdvs')
  const inp = document.createElement('input')
  const lab = document.createElement('label')
  lab.innerText = 'Tecnología'
  inp.type = "text"
  inp.id= "nameInput"
  inp.name= "name"
  let radios = ['0-2 anos', '3-4 anos' , '5 + anos']
  for(let value in radios){
    formCadastro.appendChild(document.createElement('br'))
    // console.log(`${radios[value]}`)
    let label = document.createElement('label')
    label.innerText = radios[value]
    let input = document.createElement('input')
    input.type = "radio"
    formCadastro.appendChild(label)
    formCadastro.appendChild(input)
 
  }
  formCadastro.appendChild(document.createElement('br'))
  const btnExcluir = document.createElement('button')
  btnExcluir.innerText = 'Excluir'
  formCadastro.appendChild(btnExcluir)
  btnExcluir.removeChild()
  formCadastro.appendChild(document.createElement('br'))
  formCadastro.appendChild(document.createElement('br'))
  formCadastro.appendChild(lab)
  formCadastro.appendChild(inp)  
}

enviar.addEventListener('click', casdastroDev)
