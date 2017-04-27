// var open = document.querySelectorAll('.open');
// var modal = document.querySelectorAll('.modal');
// var close = document.querySelectorAll('.close');

// var index = 0;

// for (var i = 0; i < open.length; i++) {

//     open[i].addEventListener('click', function() {
//         index = this.getAttribute('index');
//         console.log(index);
//         document.querySelector('.modal[index="' + index + '"]').style.display = 'block';
//     });

//     close[i].addEventListener('click', function() {
//         index = this.getAttribute('index');
//         document.querySelector('.modal[index="' + index + '"]').style.display = 'none';
//     });

// }
// document.body.addEventListener('click', function(ev) {
//     if (ev.target.classList[0] == "modal") {
//         for (var j = 0; j < modal.length; j++) {
//             modal[j].style.display = 'none';
//         }
//     }
// });

// document.body.addEventListener('keydown', function(ev) {
//     if (ev.which == 27) {
//         for (var j = 0; j < modal.length; j++) {
//             modal[j].style.display = 'none';
//         }

//     }
// });

// var list = document.querySelectorAll('.gallery');
// var modal = document.querySelector('.modal');
// var close = document.querySelector('.close');
// var left = document.querySelector('.left');
// var right = document.querySelector('.right');

// var active_img = {};

// for (var i = 0; i < list.length; i++) {
//     list[i].addEventListener('click', function(ev) {
//         ev.preventDefault();
//         active_img = this;
//         changeImg(this.getAttribute('href'));
//     });
// }

// right.addEventListener('click', function() {
//     changeRight();
// });

// left.addEventListener('click', function() {
//     changeLeft();
// });

// close.addEventListener('click', function() {
//     modal.style.display = 'none';
//     removeImg();
// })



// document.body.addEventListener('keydown', function(ev) {
//     if (ev.which == 27 && modal.style.display == 'block') {
//         modal.style.display = 'none';
//         removeImg();
//     }

//     if (ev.which == 39 && modal.style.display == 'block') {
//         changeRight();
//     }

//     if (ev.which == 37 && modal.style.display == 'block') {
//         changeLeft();
//     }
// });

// document.body.addEventListener('click', function(ev) {
//     if (ev.target.classList[0] == "modal") {
//         modal.style.display = 'none';
//         removeImg();
//     }
// });

// function changeImg(href) {
//     var node = document.createElement("IMG");
//     node.src = href;
//     modal.children[0].appendChild(node);
//     modal.style.display = 'block';
// }

// function removeImg() {
//     modal.children[0].removeChild(modal.children[0].children[3]);
// }

// function changeRight() {
//     var href = '';
//     if (active_img.nextElementSibling !== null) {
//         href = active_img.nextElementSibling.getAttribute('href');
//         active_img = active_img.nextElementSibling;
//     } else {
//         href = list[0].getAttribute('href');
//         active_img = list[0];
//     }
//     removeImg();
//     changeImg(href);
// }

// function changeLeft() {
//     var href = '';
//     if (active_img.previousElementSibling !== null) {
//         href = active_img.previousElementSibling.getAttribute('href');
//         active_img = active_img.previousElementSibling;
//     } else {
//         href = list[list.length - 1].getAttribute('href');
//         active_img = list[list.length - 1]
//     }
//     removeImg();
//     changeImg(href);
// }

// function modalSlider(className) {


// }

// var slider = new modalSlider('gallery');