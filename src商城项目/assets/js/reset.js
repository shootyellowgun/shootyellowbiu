window.onload = window.onresize = function(){
    var deviceW = document.documentElement.clientWidth;
    if(deviceW > 750){
        document.documentElement.style.fontSize = 100 + 'px';
    }else{
        document.documentElement.style.fontSize = deviceW/750 * 100 + 'px';
    }
}