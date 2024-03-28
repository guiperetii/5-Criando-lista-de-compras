let itens = [] 

for(item = 0; item < 10; item++) {
  let itemName = prompt("Para adicionar a lista, digite o item " + (item + 1))
  itens[item] = itemName
}

alert("Lista: " + itens)