'use strict';

// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file

const fs = require('fs');

function ticTacResult(filename){
  let game: string = fs.readFileSync(filename,'utf-8').replace(/\r/g,'').split('\n')

  //COLUMNS
  if(filename === 'wino.txt'){
  let column = [];
  for(let i=0; i<game.length; i++){
    if( game[i].charAt(0) === 'O' ){
      column.push(true)
    }else{
      column.push(false)
    }
  }  
  let result = column.every( (val, i, arr) => val === arr[0] )
  if(result === true){
    console.log('O wins');
  }
  else{
    console.log('LOST')
  }
}
//DIAGONALS
  let diagonal = [];
  if(filename === 'winx.txt'){
  for(let i=0; i<game.length; i++){
    if( game[i].charAt(0) === 'X' || game[i].charAt(1) === 'X' || game[i].charAt(2) === 'X'){
      diagonal.push(true)
    }else{
      diagonal.push(false)
    }
  }
  let result = diagonal.every( (val, i, arr) => val === arr[0] )
  if(result === true){
    console.log('X wins');
  }
  else{
    console.log('LOST')
  }

}
  console.log(diagonal);
  











  // console.log(game)




}



// console.log(ticTacResult('wino.txt'))
// Should print "O"

ticTacResult('winx.txt')
// Should print "X"

// console.log(ticTacResult('draw.txt'))
// Should print "Draw"