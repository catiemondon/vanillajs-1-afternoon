let cardId= document.getElementById('idInput')
let cardColor= document.getElementById('colorInput')



function setCard(){
    const card= document.getElementById(cardId.value);
    
    card.style.color= cardColor.value;
}
