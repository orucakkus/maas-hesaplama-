function hesaplama(){
    let sonuc
    let topvr
    let brt=document.getElementById("sayımass").value
    let gelir= 0
    let sgk=700
    let damga=0
    let issizkik=0
    console.log(sonuc)
    sonuc=(Number(brt)-(gelir)-(sgk)-(damga)-(issizkik))
    topvr=(Number(gelir)+(sgk)+(damga)+(issizkik))
    document.getElementById("gelirvr").innerHTML="Gelir Vergisi :"+gelir
    document.getElementById("sskvr").innerHTML="Sosyal Güvenlik Kurumu Vergisi :"+sgk
    document.getElementById("damagavr").innerHTML="Damga Vergisi :"+damga
    document.getElementById("issizkikvr").innerHTML="İşsizlik Vergisi  :"+issizkik
    document.getElementById("netmass").innerHTML="Net  Maşını :" + sonuc.toFixed(2)
    document.getElementById("top").innerHTML="Toplam Kesintiler :" + topvr



}
