
const EventEmitter=require("events");

const eventEmitter= new EventEmitter();


eventEmitter.on("productAdded",(product)=>{
    console.log(`
        Product ID : ${product.id}
        Name       : ${product.name}
        Price      : ${product.price}
        `)
})



const product = {
    id: 101,
    name: "Laptop",
    price: 150000
};


eventEmitter.emit("productAdded",product);