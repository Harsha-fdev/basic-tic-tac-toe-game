console.log("Welcome to Tic Tac Toe")

let Audioturn = new Audio("1sec.mp3");//creates new instance of audio object which takes audio url as parameter
let Gameover = new Audio("gameover.mp3");

let Turn = "X"
let isgameover = false

//function to change turn
const Changeturn = ()=>{
    return Turn === "X"?"0":"X";
}

//function to check win

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext");
    wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
           ]
//here e is just a parameter
    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && boxtext[e[0]].innerText !== ""){
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " " +"Won";
            isgameover = true
            document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "200px";
        }
    })
}


//game logic
let Boxes = document.getElementsByClassName("box");
Array.from(Boxes).forEach(element => {//from converts html collections into array so that froeach can traverse
    let boxtext = element.querySelector('.boxtext');//not document.querySelector
    element.addEventListener('click' , ()=>{
        if(boxtext.innerText == ""){
            boxtext.innerText = Turn;
            Turn = Changeturn();//since it returns u hav to capture it somewhere
            Audioturn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + Turn;
            }
        }
    })
})

//add onclick listener for reset button
reset.addEventListener('click' , ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    })
    Turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + Turn;
    document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = "0px";
})
