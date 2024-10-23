
const getStrogeCard = () =>{
    const cardStringfy = localStorage.getItem('cart');
    if(cardStringfy){
        return JSON.parse(cardStringfy)
    }

     return [] ;
}

const addToLocalStroge = (id)=>{
    const card = JSON.stringify(id);
    localStorage.setItem('cart' , card)
}

const removeLocalStroge = (id)=>{
    const card = getStrogeCard();
    const remainingItems = card.filter(cadx => cadx !==id)
    addToLocalStroge(remainingItems)
}
const setCardLocalStroge = (cart) =>{
    const card = getStrogeCard();
        card.push(cart);
        addToLocalStroge(card);
}

export {setCardLocalStroge , getStrogeCard ,removeLocalStroge}