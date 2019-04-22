const board= [];

function play(clickedId){
   let playerSpan= document.getElementById('player')
   let clickedElement= document.getElementById(clickedId)
   if(playerSpan.innerText === 'x'){
       playerSpan.innerText= 'o'
       clickedElement.innerText = 'x'
       board[clickedId]='x'
   }
   else{ playerSpan.innerText ='x'
        clickedElement.innerText = 'o'
        board[clickedId]='o'
}
if(board[2] !== undefined && board[2] === board[1] && board[2] === board[0]){
    alert(`${board[2]} is the winner`);
    
}
if(board[5] !== undefined && board[5] === board[4] && board[5] === board[3]){
    alert(`${board[5]} is the winner`);
    
}
if(board[8]!== undefined && board[8] === board[7] && board[8] === board[6]){
    alert(`${board[6]} is the winner`)
    
}
if(board[2] !==undefined && board[2] === board[5] && board[2]=== board[8]){
    alert(`${board[2]} is the winner`)
    
}
if(board[1] !== undefined && board[1] === board[4] && board[1] === board[7]){
    alert(`${board[1]} is the winner`)
    
}
if(board[0] !== undefined && board[0]=== board[3] && board[0]===board[6]){
    alert(`${board[0]} is the winner`)
    
}
if(board[2] !==undefined && board[2] === board[4] && board[2] === board[6]){
    alert(`${board[2]} is the winner`)
    
}
if(board[0] !== undefined && board[0] === board[4] && board[0] === board[8]){
    alert(`${board[0]} is the winner`)
    
}
let boardFull= true;
for(var i=0; i<= 8; i++){
    if(board[i]=== undefined){
        boardFull=false;
    }

}
if(boardFull=== true){
    alert(`Cats game`)
}

}






