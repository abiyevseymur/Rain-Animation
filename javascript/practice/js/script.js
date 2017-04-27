var list = document.querySelectorAll('.gallery');
var modal = document.querySelector('.modal');
var close = document.querySelector('.close');
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var img = {};

for (var i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function (ev) {
        ev.preventDefault();
        img = this;
        changeImg(this.getAttribute('href'));
    });
}

right.addEventListener('click', function () {
    var href = '';
    if (img.nextElementSibling !== null) {
        href = img.nextElementSibling.getAttribute('href');
        img = img.nextElementSibling;
    } else {
        href = list[0].getAttribute('href');
        img = list[0];
    }
    removeImg();
    changeImg(href);
});

left.addEventListener('click', function () {
    var href = '';
    if (img.previousElementSibling !== null) {
        href = img.previousElementSibling.getAttribute('href');
        img = img.previousElementSibling;
    } else {
        href = list[list.length - 1].getAttribute('href');
        img = list[list.length - 1]
    }
    removeImg();
    changeImg(href);
});

close.addEventListener('click', function () {
    modal.style.display = 'none';
    removeImg();
})

function changeImg(href) {
    var node = document.createElement("IMG");
    node.src = href;
    modal.children[0].appendChild(node);
    modal.style.display = 'block';
}

function removeImg() {
    modal.children[0].removeChild(modal.children[0].children[3]);
}

document.body.addEventListener('keydown', function (ev) {
    if (ev.which == 27) {
        modal.style.display = 'none';
        removeImg();
    }
});

document.body.addEventListener('click', function (ev) {
    console.log(ev.target.classList);
    if (ev.target.classList[0] == "modal") {
        modal.style.display = 'none';
        removeImg();
    }
});

function modalSlider(className) {


}

var slider = new modalSlider('gallery');