async function createItem(name, qtd, price) {
    return {
       name,
       qtd,
       price,
       subTotal: () => qtd * price 
    }
}

export {
  createItem,
} 