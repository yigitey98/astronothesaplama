function notlarıAl() {
    var not1 = document.getElementById("krm1").value
    console.log(not1)

    var not2 = document.getElementById("krm2").value
    
    var not3 = document.getElementById("krm3").value

    var not4 = document.getElementById("krm4").value

    var not5 = document.getElementById("abd1").value

    var not6 = document.getElementById("abd2").value

    var not7 = document.getElementById("abd3").value

    var not8 = document.getElementById("abd4").value

    console.log(not1)
    
    var abd_ort = (((Number(not5) + Number(not6) + Number(not7) + Number(not8))/4)*5)/100

    var krl_ort = (((Number(not1) + Number(not4) + Number(not3) + Number(not2))/4)*9)/10

    var ocm_ort = document.getElementById("ocm_"),
    
    ocm_ort_value = ocm_ort.value;
    
    var genel_ortalama = Number(abd_ort) + Number(krl_ort) + Number(ocm_ort_value)

    setTimeout(function(){ document.getElementById("times").innerHTML =  "Ortalamanız Hesaplanıyor."; }, 500); 

    setTimeout(function(){ document.getElementById("times").innerHTML =  "Ortalamanız Hesaplanıyor.."; }, 1000); 

    setTimeout(function(){ document.getElementById("times").innerHTML = "Ortalamanız Hesaplanıyor..."}, 2000); 

    setTimeout(function(){ document.getElementById("times").innerHTML =  "Ortalamanız Hesaplanıyor...."; }, 2500); 

    setTimeout(function(){ document.getElementById("times").innerHTML = ""}, 3000);

    setTimeout(function(){ document.getElementById("sonuc1").innerHTML = "Dönem Sonu Ortalamanız : " + Number(genel_ortalama); }, 3000);  
    
    function gecmek80(){
        setTimeout(function(){document.getElementById("sonuc2").innerHTML = "Durumunuz : Tebrikler finalsiz geçtiniz."},3000)
    }

    function kalmak50() {
        setTimeout(function(){document.getElementById("sonuc2").innerHTML = "Durumunuz : Malesef Sınıfta Kaldınız."},3000)
    }
    function kalmakfinal() {
        setTimeout(function(){document.getElementById("sonuc2").innerHTML = "Durumunuz : Finale girmeniz gerekmektedir."},3000)

    }

    if (genel_ortalama > 79.49) {
        gecmek80()
    }

    else if (genel_ortalama < 50) {
        kalmak50()
    }

    else if (genel_ortalama < 80) {
        if (genel_ortalama > 50){
            kalmakfinal()
        }
    }

}
