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
menu[3].firstChild.addEventListener("click", function(){
    for(var i = 0; i < menu.length;i++){
        menu[i].firstChild.style.color = '#797a7e';
    }
    menu[3].firstChild.style.color = '#c4a358';
    for(var i = 0; i < main.length;i++){
        main[i].style.display = 'none';
    }
    main[3].style.display = 'block';
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
//mapa
let mapka = document.getElementById("mapka");
mapka.style.scale = 0.1373;
let y = -6217;
let miny = -6217;
let maxy = -5046;
let x = -1816;
let maxx = -1816;
let minx = -1816;
let pow = 200;
mapka.style.transition = '250ms';
function plus(){
    if(mapka.style.scale == 0.1373){
        mapka.style.scale = 0.1873;
        y -= pow;
        miny -= 273;
        maxy += 273;
        minx -= 100;
        maxx += 100;
        mapka.style.top = y + 'px';
    }
    else if(mapka.style.scale == 0.1873){
        mapka.style.scale = 0.2373;
        y -= pow;
        miny -= 273;
        maxy += 273;
        minx -= 100;
        maxx += 100;
        mapka.style.top = y + 'px';
    }
    else if(mapka.style.scale == 0.2373){
        mapka.style.scale = 0.2873;
        y -= pow;
        miny -= 273;
        maxy += 273;
        minx -= 100;
        maxx += 100;
        mapka.style.top = y + 'px';
    }
    else if(mapka.style.scale == 0.2873){
        mapka.style.scale = 0.3373;
        y -= pow;
        miny -= 273;
        maxy += 273;
        minx -= 100;
        maxx += 100;
        mapka.style.top = y + 'px';
    }
    else if(mapka.style.scale == 0.3373){
        mapka.style.scale = 0.3873;
        y -= pow;
        miny -= 273;
        maxy += 273;
        minx -= 100;
        maxx += 100;
        mapka.style.top = y + 'px';
    }
    else if(mapka.style.scale == 0.3873){
        mapka.style.scale = 0.4373;
        y -= pow;
        miny -= 273;
        maxy += 273;
        minx -= 100;
        maxx += 100;
        mapka.style.top = y + 'px';
    }
    else if(mapka.style.scale == 0.4373){
        mapka.style.scale = 0.4873;
        y -= pow;
        miny -= 273;
        maxy += 273;
        minx -= 100;
        maxx += 100;
        mapka.style.top = y + 'px';
    }
    document.getElementById("plus").removeEventListener("click", plus)
    setTimeout(function(){document.getElementById("plus").addEventListener("click", plus)}, 250);
}
function minus(){
    if(mapka.style.scale == 0.4873){
        mapka.style.scale = 0.4373;
        miny += 273;
        maxy -= 273;
        minx += 100;
        maxx -= 100;
        y+=pow
        if(y> maxy ){
            y = maxy
        }
        else if(y < miny ){
            y = miny
        }
        if (x > maxx){
            x = maxx
            mapka.style.left = x + 'px';
        }
        else if (x < minx){
            x = minx
            mapka.style.left = x + 'px';
        }
        mapka.style.top = y + 'px';
    }
    else if(mapka.style.scale == 0.4373){
        mapka.style.scale = 0.3873;
        miny += 273;
        maxy -= 273;
        minx += 100;
        maxx -= 100;
        y+=pow
        if(y> maxy ){
            y = maxy
            pow = -269
        }
        else if(y < miny ){
            y = miny
            pow = 266.5
        }
        if (x > maxx){
            x = maxx
            mapka.style.left = x + 'px';
        }
        else if (x < minx){
            x = minx
            mapka.style.left = x + 'px';
        }
        mapka.style.top = y + 'px';
    }
    else if(mapka.style.scale == 0.3873){
        mapka.style.scale = 0.3373;
        miny += 273;
        maxy -= 273;
        minx += 100;
        maxx -= 100;
        y+=pow
        if(y> maxy ){
            y = maxy
            pow = -265.5
        }
        else if(y < miny ){
            y = miny
            pow = 263
        }
        if (x > maxx){
            x = maxx
            mapka.style.left = x + 'px';
        }
        else if (x < minx){
            x = minx
            mapka.style.left = x + 'px';
        }
        mapka.style.top = y + 'px';
    }
    else if(mapka.style.scale == 0.3373){
        mapka.style.scale = 0.2873;
        miny += 273;
        maxy -= 273;
        minx += 100;
        maxx -= 100;
        y+=pow
        if(y> maxy ){
            y = maxy
            pow = -258.5
        }
        else if(y < miny ){
            y = miny
            pow = 256
        }
        if (x > maxx){
            x = maxx
            mapka.style.left = x + 'px';
        }
        else if (x < minx){
            x = minx
            mapka.style.left = x + 'px';
        }
        mapka.style.top = y + 'px';
    }
    else if(mapka.style.scale == 0.2873){
        mapka.style.scale = 0.2373;
        miny += 273;
        maxy -= 273;
        minx += 100;
        maxx -= 100;
        y+=pow
        if(y> maxy ){
            y = maxy
            pow = -248
        }
        else if(y < miny ){
            y = miny
            pow = 245.5
        }
        if (x > maxx){
            x = maxx
            mapka.style.left = x + 'px';
        }
        else if (x < minx){
            x = minx
            mapka.style.left = x + 'px';
        }
        mapka.style.top = y + 'px';
    }
    else if(mapka.style.scale == 0.2373){
        mapka.style.scale = 0.1873;
        miny += 273;
        maxy -= 273;
        minx += 100;
        maxx -= 100;
        y+=pow
        if(y >  maxy ){
            y = maxy
            pow = -234
        }
        else if(y < miny ){
            y = miny
            pow = 228
        }
        if (x > maxx){
            x = maxx
            mapka.style.left = x + 'px';
        }
        else if (x < minx){
            x = minx
            mapka.style.left = x + 'px';
        }
        mapka.style.top = y + 'px';
    }
    else if(mapka.style.scale == 0.1873){
        mapka.style.scale = 0.1373;
        miny += 273;
        maxy -= 273;
        minx += 100;
        maxx -= 100;
        y+=pow
        if(y> maxy ){
            y = maxy
            pow = -213
        }
        else if(y < miny){
            y = miny
            pow = 200
        }
        if (x > maxx){
            x = maxx
            mapka.style.left = x + 'px';
        }
        else if (x < minx){
            x = minx
            mapka.style.left = x + 'px';
        }
        mapka.style.top = y + 'px';
    }
    document.getElementById("minus").removeEventListener("click", minus)
    setTimeout(function(){document.getElementById("minus").addEventListener("click", minus)}, 250);
}
document.getElementById("plus").addEventListener("click", plus)
document.getElementById("minus").addEventListener("click", minus)
document.getElementById("polnoc").addEventListener("mousedown", function(){
    let ruch = setInterval(function(){
        if(y != maxy){
            pow -= 3.5;
        }
        y += 10;
        if (y > maxy){
            y = maxy
        }
        mapka.style.top = y + 'px';
    }, 35)
    document.getElementById("polnoc").addEventListener("mouseup", function(){
        clearInterval(ruch)
    })
})
document.getElementById("poludnie").addEventListener("mousedown", function(){
    let ruch = setInterval(function(){
        if(y != miny){
            pow += 3.5;
        }
        y -= 10;
        if (y < miny){
            y = miny
        }
        mapka.style.top = y + 'px';
    }, 35)
    document.getElementById("poludnie").addEventListener("mouseup", function(){
        clearInterval(ruch)
    })
})
document.getElementById("zachod").addEventListener("mousedown", function(){
    let ruch = setInterval(function(){
        x += 10;
        if (x > maxx){
            x = maxx
        }
        mapka.style.left = x + 'px';
    }, 35)
    document.getElementById("zachod").addEventListener("mouseup", function(){
        clearInterval(ruch)
    })
})
document.getElementById("wschod").addEventListener("mousedown", function(){
    let ruch = setInterval(function(){
        x -= 10;
        if (x < minx){
            x = minx
        }
        mapka.style.left = x + 'px';
    }, 35)
    document.getElementById("wschod").addEventListener("mouseup", function(){
        clearInterval(ruch)
    })
})
document.getElementById("napis").addEventListener('click', function(){
    let napisy = document.querySelectorAll('#xd2 #mapka span');
    if (napisy[0].style.opacity == 1){
        for(let i = 0; i < napisy.length;i++){
            console.log('xd')
            napisy[i].style.opacity = 0;
        }
    }
    else{
        for(let i = 0; i < napisy.length;i++){
            console.log('jd')
            napisy[i].style.opacity = 1;
        }
    }
})
document.getElementById("skala").addEventListener('click', function(){
    let xd = mapka.style.scale;
    let xdd = (xd - 0.1373)/0.05
    for(var i = 0; i<xdd; i++){
        mapka.style.scale -=0.05;
        miny += 273;
        maxy -= 273;
        minx += 100;
        maxx -= 100;
        y+=pow
        if(y >  maxy ){
            y = maxy
            pow = -234
        }
        else if(y < miny ){
            y = miny
            pow = 228
        }
        if (x > maxx){
            x = maxx
            mapka.style.left = x + 'px';
        }
        else if (x < minx){
            x = minx
            mapka.style.left = x + 'px';
        }
        mapka.style.top = y + 'px';
    }
})
