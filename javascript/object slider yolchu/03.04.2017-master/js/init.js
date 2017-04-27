var gallery = new Slider('gallery', {
    img_width: 60,
    img_height: 60
});


Slider.prototype.salam = function() {
    console.log('salam necesen?');
}

Slider.prototype.start_element = 18;

// gallery.salam();

// console.log(gallery.start_element);
Array.prototype.salam = function() {
    console.log('salam');
}

function yaz() {
    console.log('salam');
}

var yaslar = [1, 3, 6, 8];

var adlar = ['Isa', 'Seymur'];

yaz(yaslar);
adlar.salam();


// var gallery1 = new Slider('gallery1', {
//     img_width: 70,
//     img_height: 70
// });


// console.log(g);