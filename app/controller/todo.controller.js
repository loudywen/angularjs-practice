// function TodoController(TodoService) {
//     var ctrl = this;
//     ctrl.newTitle = '';
//     ctrl.newCompleteStatus = false;
//     ctrl.itemAdd = [];


//     ctrl.list = [{
//         title: 'First todo item!',
//         completed: false
//     }, {
//         title: 'Second todo item!',
//         completed: false
//     }, {
//         title: 'Third todo item!',
//         completed: true
//     }];

//     ctrl.todoListFromHttp = [];

//     function getToDoFromHttp() {
//         TodoService.retrieve().then(function (response) {
//             ctrl.todoListFromHttp = response;
//         })
//     }

//     ctrl.updateTodo = function updateToDoFromHttp(item, index) {
//         TodoService.update(item);
//     }

//     ctrl.addToItemAdded = function (item) {

//         ctrl.itemAdd.push(item)
//     }

//     ctrl.removeFromItemAdded = function (index) {
//         ctrl.itemAdd.splice(index, 1);

//     }

//     ctrl.addToItemList = function () {
//         ctrl.list.push({
//             title: ctrl.newTitle,
//             completed: ctrl.newCompleteStatus
//         })
//     };

//     getToDoFromHttp();
// }

// angular.module('app').controller('TodoController', TodoController);