//zegar
setInterval(() => 
    { 
        var data = new Date();
        var a = data.getHours();
        if(data.getMinutes()>9){
            var b = data.getMinutes();
        }
        else{
            var b = '0' + String(data.getMinutes());
        }
        if(data.getDate()>9){
            var c = data.getDate();
        }
        else{
            var c = '0' + String(data.getDate());
        }
        if(data.getMonth()<10){
            var d = '0' + String(data.getMonth()+1);
        }
        else{
            var d = data.getMonth()+1;
        }
        var e = data.getFullYear();
        document.getElementById('czas').innerHTML = a + ':' + b + '  ' + c + '/'+d + '/'+ e;
    }, 50);
//zmiana strony
let menu = document.getElementById("menu").children;
let main = document.querySelectorAll("main");
menu[0].firstChild.addEventListener("click", function(){
    for(var i = 0; i < menu.length;i++){
        menu[i].firstChild.style.color = '#797a7e';
    }
    menu[0].firstChild.style.color = '#c4a358';
    for(var i = 0; i < main.length;i++){
        main[i].style.display = 'none';
    }
    main[0].style.display = 'block';
})
menu[1].firstChild.addEventListener("click", function(){
    for(var i = 0; i < menu.length;i++){
        menu[i].firstChild.style.color = '#797a7e';
    }
    menu[1].firstChild.style.color = '#c4a358';
    for(var i = 0; i < main.length;i++){
        main[i].style.display = 'none';
    }
    main[1].style.display = 'block';
})
menu[2].firstChild.addEventListener("click", function(){
    for(var i = 0; i < menu.length;i++){
        menu[i].firstChild.style.color = '#797a7e';
    }
    menu[2].firstChild.style.color = '#c4a358';
    for(var i = 0; i < main.length;i++){
        main[i].style.display = 'none';
    }
    main[2].style.display = 'block';
})
//frakcje
let frakcje = document.getElementById("listafrakcji").children;
let sekcje = document.querySelectorAll("#frakcje section");
for(let i = 0; i < frakcje.length; i++){
    frakcje[i].addEventListener('click', function(){
        for(var j = 0; j < frakcje.length; j++){
            sekcje[j].style.display = 'none';
            frakcje[j].style.background = 'transparent';
            frakcje[j].style.color = '#329c3a';
        }
        sekcje[i].style.display = 'block';
        frakcje[i].style.background = '#3c3d4f';
        frakcje[i].style.color = 'whitesmoke';
    })
}
//slider
let pozycja = 1;
document.getElementById("prawo").addEventListener("click", function(){
    let slider = document.getElementById("slider");
    switch(pozycja){
        case 1:
            slider.style.left = '-100.1%';
            pozycja++;
            break;
        case 2:
            slider.style.left = '-200.1%';
            pozycja++;
            break;
        case 3:
            slider.style.left = '-300.1%';
            pozycja++;
            break;
    }
})
document.getElementById("lewo").addEventListener("click", function(){
    let slider = document.getElementById("slider");
    switch(pozycja){
        case 2:
            slider.style.left = '-0.1%';
            pozycja--;
            break;
        case 3:
            slider.style.left = '-100.1%';
            pozycja--;
            break;
        case 4:
            slider.style.left = '-200.1%';
            pozycja--;
            break;
    }
})
//wyciemnienie ekranu
document.getElementById("wlacznik").addEventListener("click", function(){
    let obudowa = document.getElementById("obudowa");
    let przyciemnienie = document.getElementById("przyciemnienie");
    if(przyciemnienie.style.opacity == '0'){
        przyciemnienie.style.display = "block"
        obudowa.style.zIndex = 11;
        setTimeout(() => {przyciemnienie.style.opacity = '1';}, 1); 
    }
    else{
        przyciemnienie.style.opacity = '0';
        setTimeout(() => {
            przyciemnienie.style.display = "none";
            obudowa.style.zIndex = 3; 
        }, 100);
    }
})