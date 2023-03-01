// Data una lista della spesa in formato array
const shoppingList = ["latte", "uova", "cereali", "pane"];
console.log(shoppingList);

// Leggo e salvo il riferimento alla shopping-list presente nel documento
const listEl = document.getElementById("shopping-list");
console.log(listEl);

// Inizializzo index a 0 e itero finchè index resta minore di shoppingList.length:
//  - Creo un nuovo elemento li
//  - Inserisco nel nuovo elemento li il valore di shoppingList[index]
//  - Appendo il nuovo elemento li alla shopping-list
//  - Incremento index
let index = 0;

while(index < shoppingList.length) {
    console.log(shoppingList[index]);

    const listPointEl = document.createElement("li");
    console.log(listPointEl);
    listPointEl.innerText = shoppingList[index];
    listEl.append(listPointEl);

    index++;
}