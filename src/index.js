import { createItem } from "./services/item.js"
import * as cartService from "./services/cart.js"

const carts = [];

const item1 = await createItem("Dorflex", 5, 2) 
const item2 = await createItem("Dipirona", 3, 15.44) 

await cartService.addItem(carts, item1);
await cartService.addItem(carts, item2);

//Exclusão de items
await cartService.deleteItem(carts, item2.name)

//Remove a quantidade de itens
await cartService.removeItem(carts, item1);
await cartService.removeItem(carts, item2);
await cartService.removeItem(carts, item2);

const total = await cartService.calculeteTotal(carts)

await cartService.displayCart(carts);

console.log("***************************************")
console.log(`Valor total da compra: ${total}`)
