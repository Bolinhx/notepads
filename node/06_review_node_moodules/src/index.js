import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"

const myCart = [];
const myWishList =[];


console.log("Welcome to your Shoppe cart")

const item1 = await createItem("hotwhells ferrari", 20.99, 5);
const item2 = await createItem("hotwhells ford", 39.99, 3);

await cartService.addItem(myCart , item1);
await cartService.addItem(myCart , item2);
await cartService.displayCart(myCart);

console.log("TOTAL:");

// await cartService.removeItem(myCart, 1)
await cartService.removeItemQtd(myCart, item2);
await cartService.removeItemQtd(myCart, item2);
await cartService.removeItemQtd(myCart, item2);
await cartService.removeItemQtd(myCart, item2);
await cartService.removeItemQtd(myCart, item2);

await cartService.displayCart(myCart);


await cartService.calculateTotal(myCart);
//await cartService.calculateTotal(myWishList);

// await cartService.deleteItem(myCart, item1.name)

// await cartService.calculateTotal(myCart);

