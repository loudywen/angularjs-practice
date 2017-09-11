function TodoService($http) {

    var API ='//jsonplaceholder.typicode.com/todos/';

    function create() {
        
    }
    
    function retrieve() {

        return $http.get(API).then(function (response) {
            console.log(response)
            return response.data.slice(0,10);
        })
    }
    function update(todoItem) {
        return $http.put(API + todoItem.id,todoItem).then(function (response) {
            console.log(response)
            return response.data
        })
    }
    
    function remove() {
        
    }

    return{
        create:create,
        retrieve:retrieve,
        update:update,
        remove:remove
    };
}

angular.module('myApp').factory('TodoService',TodoService);