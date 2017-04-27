Tab.prototype.changeEvent = function() {
    var self = this;
    self.items = self.tabs.children[2];
    for (var i = 0; i < self.items.childElementCount; i++) {
        self.items.children[i].addEventListener('click', function() {
            this.style.background = '#ccc';
        });
    }
}

var object_name = new Tab("list_tab");
var object_name2 = new Tab("list_tab2");

object_name.changeEvent();

object_name2.changeEvent();