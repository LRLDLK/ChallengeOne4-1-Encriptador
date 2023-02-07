let msgCifrar = document.getElementById('input')
let msgDescifrar = document.getElementById('msgDes')
const square = document.getElementById('square')
const copiarBtn = document.getElementById('copiar')
let copiado = document.getElementById('copiado')
let alerta = document.getElementById('alerta')
let titulo = document.getElementById('tituloEn')

function limpiar() {
  msgCifrar.value = ''
  msgDescifrar.value = ''
  location.reload()
}

function copiar() {
  navigator.clipboard.writeText(msgDescifrar.value)
  copiado.style.display = 'block'
  copiado.style.opacity = 1
  copiado.style.transition = 'opacity .35s'
  setTimeout(() => {
    copiado.style.display = 'none'
    copiado.style.transition = 'opacity .35s'
    copiado.style.opacity = 0
    square.style.backgroundImage = "url('img/nene.png')"
    document.getElementById('vacio').style.display = 'inline'
    copiarBtn.style.display = 'none'
  }, 1000)
  msgDescifrar.value = '';
  titulo.style.display = 'none'
  msgDescifrar.style.opacity = 0;


}

function encriptar() {
    msgDescifrar.style.opacity = 0;
  let texto = msgCifrar.value
  textoDos = texto.replace(/^\s+|\s+$|\s+(?=\s)/g, '')
  let reg = /^[a-z\s\u00f1]*$/
  let textoValidado = textoDos.match(reg)
  console.log(textoValidado)
  if (!textoValidado || textoValidado === 0 || textoValidado.input === '') {
    alerta.style.color = '#fa4700'
    alerta.style.fontWeight = '600'

    setTimeout(() => {
      alerta.style.color = '#0A3871'
      alerta.style.transition = 'color 0.2s linear 0.2s'

      msgCifrar.value = ''
    }, 2000)
  } else {
    msgDescifrar.style.display = 'inline'
    setTimeout(() => {
        msgDescifrar.style.opacity = 1;
    },300)
    const textoTres = encripta(msgCifrar.value)
    const textoEncriptado = textoTres.replace(/^\s+|\s+$|\s+(?=\s)/g, '')
    msgDescifrar.value = textoEncriptado
    document.getElementById('vacio').style.display = 'none'
    square.style.backgroundImage = 'none'
    msgCifrar.value = ''
    titulo.style.display = 'block'
    titulo.textContent = 'Mensaje Encriptado: '
    titulo.style.transition = '3s'
    copiarBtn.style.display = 'block'
  }
}

function encripta(textoEncriptar) {
  
  let matrizCodificacion = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
  ]
  textoEncriptar = textoEncriptar.toLowerCase()

  for (let i = 0; i < matrizCodificacion.length; i++) {
    if (textoEncriptar.includes(matrizCodificacion[i][0])) {
      textoEncriptar = textoEncriptar.replaceAll(
        matrizCodificacion[i][0],
        matrizCodificacion[i][1],
      )
    }
  }
  return textoEncriptar
}

function desencriptar() {
    msgDescifrar.style.opacity = 0;
  let texto = msgCifrar.value
  textoDos = texto.replace(/^\s+|\s+$|\s+(?=\s)/g, '')
  let reg = /^[a-z\s\u00f1]*$/
  let textoValidado = textoDos.match(reg)
  if (!textoValidado || textoValidado === 0 || textoValidado.input === '') {
    alerta.style.color = '#fa4700'
    alerta.style.fontWeight = '600'
    setTimeout(() => {
      alerta.style.color = '#0A3871'
      alerta.style.transition = 'color 0.2s linear 0.2s'
      msgCifrar.value = ''
    }, 2000)
  } else {
    msgDescifrar.style.display = 'inline'
    setTimeout(() => {
        msgDescifrar.style.opacity = 1;
    },300);
    const textoTres = desencripta(msgCifrar.value)
    const textoDesencriptado = textoTres.replace(/^\s+|\s+$|\s+(?=\s)/g, '')
    msgDescifrar.value = textoDesencriptado
    document.getElementById('vacio').style.display = 'none'
    square.style.backgroundImage = 'none'
    titulo.style.display = 'block'
    titulo.textContent = 'Mensaje Desencriptado: '
    msgCifrar.value = ''
    copiarBtn.style.display = 'block'
  }
}

function desencripta(textoDesencriptar) {
   
  let matrizCodificacion = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
  ]
  textoDesencriptar = textoDesencriptar.toLowerCase()

  for (let i = 0; i < matrizCodificacion.length; i++) {
    if (textoDesencriptar.includes(matrizCodificacion[i][1])) {
      textoDesencriptar = textoDesencriptar.replaceAll(
        matrizCodificacion[i][1],
        matrizCodificacion[i][0],
      )
    }
  }
  return textoDesencriptar
}
