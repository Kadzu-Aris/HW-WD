var btn = document.getElementById('btn');
var flag = 'dark';
var flag = localStorage.getItem('theme');

color_change(flag);

function color_change (theme) {
    if (theme == 'light') {
        document.body.classList.add('light');
        document.body.classList.remove('dark');

        btn.classList.add('light');
        btn.classList.remove('dark');  
    }
    else {
        document.body.classList.add('dark');
        document.body.classList.remove('light');

        btn.classList.add('dark');
        btn.classList.remove('light');  
    }
}
btn.onclick = function () {
    flag = flag == 'light' ? 'dark' : 'light';
    
    localStorage.setItem('theme', flag);
color_change(flag);
}
function changeHTML (content) {
    let request = new XMLHttpRequest;
    request.open('GET', './index.html', true)
    request.send()
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.responseText)
            document.body.innerHTML = request.responseText + document.body.innerHTML
        }
    }
}

li[0].onclick = () => {
    changeHTML('index1.html')
}
li[1].onclick = () => {
    changeHTML('index2.html')
}
li[2].onclick = () => {
    changeHTML('index3.html')
}
li[3].onclick = () => {
    changeHTML('index4.html')
}