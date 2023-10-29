const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const dosa = {
    name: 'masala dosa',
    price: 70,
    isAvailable: true,

    orderDosa : function(){
        console.log("dosa nahi mila");
    }
}

// console.log(Object.getOwnPropertyDescriptor(dosa ,"name"));

// Object.defineProperty(dosa, 'name', {
//     writable : false,
//     enumerable: false

// })

// console.log(Object.getOwnPropertyDescriptor(dosa ,"name"));


for (const [key,value] of Object.entries(dosa)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}