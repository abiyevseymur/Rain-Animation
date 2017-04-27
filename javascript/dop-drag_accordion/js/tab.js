function Tab(className) {
    var self = this;
    self.tabs = document.querySelector("." + className);

    self.main = self.tabs.children[0];

    self.tabs.children[2].addEventListener('click', function(event) {
        var index = event.target.getAttribute('index') - 1;
        for (var i = 0; i < self.main.childElementCount; i++) {
            this.children[i].classList.remove('active');
            self.main.children[i].classList.remove('active');
        }
        this.children[index].classList.add('active');
        self.main.children[index].classList.add('active');
    });
}