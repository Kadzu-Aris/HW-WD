var btn = document.getElementById('button_pos');


btn.onmouseover = function(){
   
    btn.style.top = Math.random()*90 + '%';
    btn.style.left = Math.random()*90 + '%';
}