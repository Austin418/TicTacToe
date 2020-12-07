"use strict";

let turn = 0
let score
let wins
let mark = "X";
let usedPosition
let position = []
let xWin = 0
let oWin = 0 


function placeMark(position) {
    if(document.getElementById(position).textContent == " "){
        if(mark == "X"){
            document.getElementById(position).textContent = 'X'
            mark = "O"
        }else{
            document.getElementById(position).textContent = 'O'
            mark = 'X'
        }
        turn++
        document.getElementById('turn').textContent = `Turn: ${turn}`
        
    }else{
        alert('Space already used.')
    }
    if(document.getElementById('head').textContent != "Tic-Tac-Toe"){
            document.getElementById('a1').textContent = `${mark} `
            document.getElementById('a2').textContent = `${mark} `
            document.getElementById('a3').textContent = `${mark} `
            document.getElementById('b1').textContent = `${mark} `
            document.getElementById('b2').textContent = `${mark} `
            document.getElementById('b3').textContent = `${mark} `
            document.getElementById('c1').textContent = `${mark} `
            document.getElementById('c2').textContent = `${mark} `
            document.getElementById('c3').textContent = `${mark} `
    }
    youWin()
    document.getElementById('player').textContent = `Player: ${mark}`
}

function youWin(){
    let a1 = document.getElementById('a1').textContent
    let a2 = document.getElementById('a2').textContent
    let a3 = document.getElementById('a3').textContent
    let b1 = document.getElementById('b1').textContent
    let b2 = document.getElementById('b2').textContent
    let b3 = document.getElementById('b3').textContent
    let c1 = document.getElementById('c1').textContent
    let c2 = document.getElementById('c2').textContent
    let c3 = document.getElementById('c3').textContent



    // I use the string created by adding the ID's values to check the 3 cordinates for a win 
    // O
    if( (`${a1 + a2 + a3}`) == 'OOO'){
        document.getElementById('head').textContent = 'O WINS!!!'
        oWin++
    }
    if( (`${a1 + b2 + c3}`) == 'OOO'){
        document.getElementById('head').textContent = 'O WINS!!!'
        oWin++
    }
    if( (`${c1 + b2 + a3}`) == 'OOO'){
        document.getElementById('head').textContent = 'O WINS!!!'
        oWin++
    }
    if( (`${b1 + b2 + b3}`) == 'OOO'){
        document.getElementById('head').textContent = 'O WINS!!!'
        oWin++
    }
    if( (`${c1 + c2 + c3}`) == 'OOO'){
        document.getElementById('head').textContent = 'O WINS!!!'
        oWin++
    }
    if( (`${a1 + b1 + c1}`) == 'OOO'){
        document.getElementById('head').textContent = 'O WINS!!!'
        oWin++
    }
    if( (`${a2 + b2 + c2}`) == 'OOO'){
        document.getElementById('head').textContent = 'O WINS!!!'
        oWin++
    }
    if( (`${a3 + b3 + c3}`) == 'OOO'){
        document.getElementById('head').textContent = 'O WINS!!!'
        oWin++
    }
    checkWin()


    //X
    if( (`${a1 + a2 + a3}`) == 'XXX'){
        document.getElementById('head').textContent = 'X WINS!!!'
        xWin++
    }
    if( (`${a1 + b2 + c3}`) == 'XXX'){
        document.getElementById('head').textContent = 'X WINS!!!'
        xWin++
    }
    if( (`${c1 + b2 + a3}`) == 'XXX'){
        document.getElementById('head').textContent = 'X WINS!!!'
        xWin++
    }
    if( (`${b1 + b2 + b3}`) == 'XXX'){
        document.getElementById('head').textContent = 'X WINS!!!'
        xWin++
    }
    if( (`${c1 + c2 + c3}`) == 'XXX'){
        document.getElementById('head').textContent = 'X WINS!!!'
        xWin++
    }
    if( (`${a1 + b1 + c1}`) == 'XXX'){
        document.getElementById('head').textContent = 'X WINS!!!'
        xWin++
    }
    if( (`${a2 + b2 + c2}`) == 'XXX'){
        document.getElementById('head').textContent = 'X WINS!!!'
        xWin++
    }
    if( (`${a3 + b3 + c3}`) == 'XXX'){
        document.getElementById('head').textContent = 'X WINS!!!'
        xWin++
    }
    checkWin()
}

// function resetGame (){
//     if(document.getElementById('head').textContent = ('O WINS!!!')){
//         oWin++
//         document.getElementById('xWin').textContent = (`O - Wins: ${oWin}`)
//         alert(`O Won, To Continue Playing Press OK, To End the Game Press Cancel`)
//         resetGame()
//     }
// if(document.getElementById('head').textContent = ('X WINS!!!')){
//         xWin++
//         document.getElementById('xWin').textContent = (`X - Wins: ${xWin}`)
//         alert(`O Won, To Continue Playing Press OK, To End the Game Press Cancel`)
//         resetGame()
    
    
// }


function checkWin(){
    if(document.getElementById('head').textContent == 'X WINS!!!'){
        document.getElementById('xWin').textContent = `X - Wins: ${xWin}`
        let mark = "X";
        let turn = 0
        document.getElementsByClassName('square').textContent = ""
    }
    if(document.getElementById('head').textContent == 'O WINS!!!'){
        document.getElementById('oWin').textContent = `O - Wins: ${oWin}`
    }
    
}

function resetGame(){
    let mark = "X"
    turn = 0
    document.getElementById('a1').textContent = " "
    document.getElementById('a2').textContent = " "
    document.getElementById('a3').textContent = " "
    document.getElementById('b1').textContent = " "
    document.getElementById('b2').textContent = " "
    document.getElementById('b3').textContent = " "
    document.getElementById('c1').textContent = " "
    document.getElementById('c2').textContent = " "
    document.getElementById('c3').textContent = " "

    document.getElementById('head').textContent = "Tic-Tac-Toe"

}