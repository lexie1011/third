function byId(id)
    {
        return document.getElementById(id);
    }
var cont = byId('contbox').getElementsByTagName('div');
var nav = byId('btphoto').getElementsByTagName('li');
var arr = byId('arrow');
var getCurIndex = function(){
    for(var i = 0; i < nav.length; i++){
        if(nav[i].className.indexOf('selected')!=-1)
            return i;
    }
}
var index = 0;
var move = function(flag){
    index = getCurIndex();
    if(flag){
        index++;
        if(index >= cont.length)
            index = 0;
    }
    else{
        index--;
        if(index < 0)
        index = cont.length-1;
    }
    display(index);
}

var display = function(index){
    for (var i = 0; i < cont.length; i++) {
        cont[i].className = '';
        nav[i].className = '';
    }
    cont[index].className = 'show';
    nav[index].className = 'selected';
}
var Timehand;
var autoTabStart = function(){
    Timehand = setInterval(function(){move(true);},2000);
}
var autoTapStop = function(){
    clearInterval(Timehand);
}
var showOrHidden = function(flag) {
    flag ? arr.style.display = 'block': arr.style.display = 'none';             
}
var showAndStop = function(){
    showOrHidden(true);
    autoTapStop();
}
var hiddenAndStart = function(){
    showOrHidden(false);
    autoTabStart();
}
