

//adicionar item

async function addItem(userCart, item) {
    userCart.push(item);
}

//calcular total

async function calculateTotal(userCart) {
    console.log(userCart.reduce((total, item) => total + item.subtotal(), 0));

}

//deletar item

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item)=> item.name === name);

    if(index !== -1){
        userCart.splice(index, 1);
    }
}

//remover quantidade item
async function removeItemQtd(userCart, item) {
    const indexFound = userCart.findIndex((item) => item.name === item.name);

    if(indexFound == -1){
        console.log("item nao encontrado")
        return;
    }

    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -=1;
        return
    }

    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound,1);
        return
    }
}


async function removeItem(userCart, index) {
    const deleteItem = index -1
    
    if( index >= 0 && index < userCart.length ){
        userCart.splice(deleteItem, 1);
    }; 

    
}

async function displayCart(userCart) {
    console.log("Shoppe cart list")
    userCart.forEach((item, index) =>{
        console.log(`${index+1}. ${item.name} - R$ ${item.price} |
            ${item.quantity} | Subtotal = ${item.subtotal()}`);
    });
}


export {addItem,deleteItem,removeItem,calculateTotal,displayCart,removeItemQtd};