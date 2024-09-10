const textoImpu = document.getElementById('text')
const botao = document.getElementById('iddobotao')
const mensagem = document.getElementsByTagName('p')

botao.addEventListener("click", function () {
  const valorTexto = textoImput.value;
  console.log(valorTexto)
  if(valorTexto == ""){
    mensagem.textContent = 'escreva algo'
  } else {
    mensagem.textContent = 'voce escreveu ${valorTexto}'
  }
})