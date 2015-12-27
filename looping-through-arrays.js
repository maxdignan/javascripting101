var _ = require('lodash');

var pets = ["cat", "dog", "rat"];

// pets.forEach(function(a, i, p) {
//     p[i] = a + "s";
// });


for (var i = 0; i < pets.length; i++) {
    pets[i] = pets[i] + "s";
}

 console.log(pets);
