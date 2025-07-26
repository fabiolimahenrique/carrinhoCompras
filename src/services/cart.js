async function addItem(userCard, item) {
  userCard.push(item);
}

async function deleteItem(userCard, name) {
  const index = userCard.findIndex((item) => item.name === name);

  if (index != -1) {
    userCard.splice(index, 1);
  }
}

async function removeItem(userCard, item) {
    const index = userCard.findIndex((p) => p.name === item.name)

    if (index == -1) {
        console.log("Item não encontrado")
        return
    }

    if (userCard[index].qtd > 1) {
        userCard[index].qtd -= 1
        return
    }

    if (userCard[index].qtd == 1) {
        userCard.splice(index, 1);
        return
    }
}

async function calculeteTotal(userCard) {
  return userCard.reduce((total, item) => total + item.subTotal(), 0);
}

async function displayCart(userCard) {
  console.log("Lista shopee");
  userCard.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} Qtd: ${item.qtd}X   Preço: ${item.price}   Valor: ${item.subTotal()}`);
  });
}

export { addItem, deleteItem, removeItem, calculeteTotal, displayCart };
