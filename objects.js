var pizza = {
    toppings: ["cheese", "sauce", "pepperoni"],
    crust: "deep dish",
    serves: 2,
    changeServes: function(a) {
        this.serves = a;
    }
};
console.log(pizza);

pizza.changeServes(3);

console.log(pizza);
