
function Relogio() {
    hora = document.getElementById('relogio')
    data = new Date()
    agora = data.getHours()
    min = data.getMinutes()
    sec = data.getSeconds()
    dia = data.getDate()
    dias = data.getDay()
    mes = data.getMonth()
    if(min < 10){
        min ='0'+ min
    } if(sec < 10){
        sec = '0' + sec
    } if(agora == 0){
        agora = 12
    }
    {
        
    hora.innerHTML = ` ${agora} : ${min} :${sec} `
    hora.style.textAlign = 'center'
    hora.style.paddingTop ='30px' 
    
    hora.style.color = 'red'
    hora.style.fontWeight = 'bold'
    hora.style.fontFamily = 'monospace'
    hora.style.fontSize = '30pt'

    
    
    timer = setInterval(Relogio,1000)


}
hoj = document.getElementById('datah')

switch (dias) {
    case 0 : 
        dias = 'Domingo'
        break
    case 1 : 
        dias = 'Segunda'
        break
    case 2 : 
        dias = 'Terça'
        break
    case 3 : 
        dias = 'Quarta'
        break
    case 4 : 
        dias = 'Quinta'
        break
    case 5 : 
        dias = 'Sexta'
        break
    case 6 :
        dias = 'Sabado'
        break
    default :
        dias = 'ERROR'
        break
}
switch(mes){
    case 0 : 
        mes = 'Janeiro'
        break
    case 1 : 
        mes = 'Fevereiro'
        break
    case 2 : 
        mes = 'Março'
        break
    case 3 :
        mes = 'Abril'
        break
    case 4 : 
        mes = 'Maio'
        break
    case 5 :
        mes = 'Junho'
        break
    case 6 : 
        mes =  'Julho'
        break
    case 7 : 
        mes = 'Agosto'
        break
    case 8 : 
        mes = 'Setembro'
    case 9 : 
        mes = 'Outubro'
        break
    case 10 : 
        mes = 'Novembro'
        break
    case 11 : 
        mes = 'Dezembro'
        break
    default :
        mes = ERROR

}
{
hoj.innerHTML = `${dias}, ${dia} ${mes}`
hoj.style.textAlign = 'center'
hoj.style.paddingTop ='5px'

hoj.style.color = 'white'
hoj.style.fontFamily = 'courier'
hoj.style.fontSize = '15pt'
}

tex = document.getElementById('txt')
{
if(agora >= 6 && agora < 12){
    good = 'Bom Dia'
}else if(agora >= 12 && agora < 18) {
    good = 'Boa Tarde'
}else if(agora >= 18 && agora)
    good = 'Boa Noite'

tex.innerHTML = `${good}, Kayke`
tex.style.paddingTop = '40px'

tex.style.fontFamily = 'courier'
tex.style.fontSize = '12pt'
}
}