function getShortMessages(array) {
    array = array.filter(function(a){
        if (a.message.length < 50) {
            return true;
        }
        return false;
    });

    array = array.map(function(a) {
        return a.message;
    });

    return array;
}

function countWord(array) {
    return array.reduce(function(a, b){
        a[b] = ++a[b] || 1;
        return a;
    }, {});
}

var num = 0;

//my solution
// function reduce(arr, fn, initial) {
//
//     initial = fn(initial, arr[0], num++, arr);
//
//     if (arr.length > 1) {
//         return reduce(arr.slice(1), fn, initial);
//     } else {
//         return initial;
//     }
// }

//official solution
function reduce(arr, fn, initial) {
    return (function reduceOne(index, value) {
        if (index > arr.length - 1) {
            return value; // end condition
        }
        return reduceOne(index + 1, fn(value, arr[index], index, arr)); // calculate & pass values to next step
    })(0, initial); // IIFE. kick off recursion with initial values
}



//module.exports = reduce;

function duckCount() {
    return Array.prototype.slice.call(arguments)
    .filter(function(item){
        return Object.prototype.hasOwnProperty.call(item, 'quack');
    }).length;
}

//module.exports = duckCount;

//everysome
module.exports = function(validList) {
    return function(anotherList){
        return anotherList.every(function(item){
            return validList.some(function(it) {
                return it.id == item.id;
            });
        });
    };
};
