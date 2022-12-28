
function carregar() {
var res=document.getElementById('resposta')
var foto=document.getElementById('imagem')
var res2=document.getElementById('resposta2')
var corpo=document.getElementById('co')
var data= new Date()
var hora= data.getHours()
//var hora=12// 
    if (hora<12 && hora>=7) {
        res.innerHTML=`Agora são ${hora} horas.`
        res2.innerHTML=`Bom Dia`
        corpo.style.background='blue'
        foto.src="imagens/Foto Manhã - Editado.png"  
    } else if (hora>=12 && hora<20) {
        res.innerHTML=`Agora são ${hora} horas.`
        res2.innerHTML=`Boa Tarde`
        corpo.style.background='yellow'
        foto.src="imagens/Foto Tarde - Editado.png"  
    } else if(hora>=20 && hora<=24) {
        res.innerHTML=`Agora são ${hora} horas.`
        res2.innerHTML=`Bom Noite`
        corpo.style.background='gray'
        foto.src="imagens/Foto Noite - Editado.png"  
    } else {
        res.innerHTML=`Agora são ${hora} horas.`
        res2.innerHTML=`Bom Noite`
        corpo.style.background='gray'
        foto.src="imagens/Foto Noite - Editado.png" 
    }
}