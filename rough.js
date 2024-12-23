class house {
    constructor(price, colour, ower) {
        this.price = price;
        this.colour = colour;
        this.ower = ower;
    }// this is how we use consturctor in js

    // now to define method here is how we do it
    famaily() {
        console.log("this is family of 4");
        return 1;
    }
}
// create a instance of class
const instance = new house(3400, "pink", "singh");
console.log(instance.colour);
instance.famaily();
const something = new Promise(
    (resolve, reject) => {
        if (instance.famaily()) {
            return resolve("got the return type one");
        }
        else {
            return reject("this is not accepted");
        }
    }
)
something
    .then((res) => {
        console.log(res);
    })


function add(reject) {
    reject("");
}
let b = new Promise(add);
console.log(b);

