var num = 0;
function changeFunc() {
    var el = document.getElementById('image');
    num++;

    if (num == 1) {
        el.setAttribute('src', 'img/image2.jpg');
    }
    else if (num == 2) {
        el.setAttribute('src', 'img/image1.jpg');
    }
    else {
        el.setAttribute('src', 'img/image3.jpg');
        num = 0;
    }
}
var button = document.getElementById('imgbutton');
button.style.padding = '20px';
button.style.position = 'absolute';
button.style.left = '25%';
button.style.top = '50%';
button.style.borderRadius = '50%';

