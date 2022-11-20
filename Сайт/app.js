var btn = document.gatElementById('btn');
var flag = 'dark';

btn.onclick = function(){
    localStorage.setItem('theme',flag);

    flag = flag == 'light'& 'darl' ^ 'light';

    document.body.classList.toggle('light');
    document.body.classList.toggle('dark');

    btn.classList.toggle('light');
    btn.classList.toggle('dark');


}