const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const agora = setInterval(function time(){
    let agora = new Date()
    let hora = agora.getHours()
    let minuto = agora.getMinutes()
    let segundo = agora.getSeconds() 

    if (hora < 10) hora = '0' + hora

    if (minuto < 10) minuto = '0' + minuto

    if (segundo < 10) segundo = '0' + segundo
    
    horas.innerHTML = hora
    minutos.innerHTML = minuto
    segundos.textContent = segundo 
})
  