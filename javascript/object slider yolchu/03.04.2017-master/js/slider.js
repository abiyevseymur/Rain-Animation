function Slider(className, setting) {

    var self = this;

    this.list = document.querySelectorAll('.' + className);
    this.modal = document.querySelector('.modal');
    this.close = document.querySelector('.close');
    this.left = document.querySelector('.left');
    this.right = document.querySelector('.right');
    this.active_img = {};
    this.href = '';


    for (var i = 0; i < this.list.length; i++) {
        this.list[i].addEventListener('click', function (ev) {
            ev.preventDefault();
            self.active_img = this;
            self.changeImg(this.getAttribute('href'));
        });
    }


    this.right.addEventListener('click', function () {
        self.changeRight();
    });

    this.left.addEventListener('click', function () {
        self.changeLeft();
    });

    this.close.addEventListener('click', function () {
        self.modal.style.display = 'none';
        self.removeImg();
    })

    document.body.addEventListener('keydown', function (ev) {
        if (ev.which == 27 && self.modal.style.display == 'block') {
            self.modal.style.display = 'none';
            self.removeImg();
        }

        if (ev.which == 39 && self.modal.style.display == 'block') {
            self.changeRight();
        }

        if (ev.which == 37 && self.modal.style.display == 'block') {
            self.changeLeft();
        }
    });

    document.body.addEventListener('click', function (ev) {
        if (ev.target.classList[0] == "modal") {
            self.modal.style.display = 'none';
            self.removeImg();
        }
    });


    this.changeImg = function (href) {
        var node = document.createElement("IMG");
        node.src = href;
        this.modal.children[0].appendChild(node);
        this.modal.style.display = 'block';
    }

    this.removeImg = function () {
        this.modal.children[0].removeChild(this.modal.children[0].children[3]);
    }

    this.changeRight = function () {
        if (self.active_img.nextElementSibling !== null) {
            this.href = self.active_img.nextElementSibling.getAttribute('href');
            self.active_img = self.active_img.nextElementSibling;
        } else {
            this.href = this.list[0].getAttribute('href');
            self.active_img = this.list[0];
        }

        this.removeImg();
        this.changeImg(this.href);
        if (setting.img_height !== 'undefined') {
            this.modal.children[0].children[3].style.width = setting.img_width + '%';
            this.modal.children[0].children[3].style.height = setting.img_height + '%';
        }
    }

    this.changeLeft = function () {

        if (self.active_img.previousElementSibling !== null) {
            this.href = self.active_img.previousElementSibling.getAttribute('href');
            self.active_img = self.active_img.previousElementSibling;
        } else {
            this.href = this.list[this.list.length - 1].getAttribute('href');
            self.active_img = this.list[this.list.length - 1]
        }
        this.removeImg();
        this.changeImg(this.href);
    }
}