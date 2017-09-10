function TodoController() {

    this.newTitle = '';
    this.newCompleteStatus = false;
    this.itemAdd = [];

    this.list = [{
        title: 'First todo item!',
        completed: false
    }, {
        title: 'Second todo item!',
        completed: false
    }, {
        title: 'Third todo item!',
        completed: true
    }];

    this.addToItemAdded = function (item) {

        this.itemAdd.push(item)
    }

    this.removeFromItemAdded = function (index) {
        this.itemAdd.splice(index, 1);

    }

    this.addToItemList = function () {
        this.list.push({
            title: this.newTitle,
            completed:this.newCompleteStatus
        })
    };
}

angular.module('myApp').controller('TodoController', TodoController);