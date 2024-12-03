
let boxes = document.querySelectorAll(".box");
let rstBtn = document.querySelector("#resetGame");
let newGame = document.querySelector("#newGame");
let winMsg = document.querySelector(".win-msg");
let msg = document.querySelector("#won");

let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    winMsg.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText !== "") return; 
        
        if (turn0 === true) {
            box.innerText = "X";
            turn0 = false;
        } else {
            box.innerText = "O";
            turn0 = true;
        }
        
        box.disabled = true;
        checkWin();
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    winMsg.classList.remove("hide");
    disableBoxes();
};

const checkWin = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                return; // Stop checking once there's a winner
            }
        }
    }
};

newGame.addEventListener("click", resetGame);
rstBtn.addEventListener("click", resetGame);























// let boxes = document.querySelectorAll(".box");
// let rstBtn = document.querySelector("#resetGame");
// let newGame = document.querySelector("#newGame");
// let winMsg = document.querySelector(".win-msg");
// let msg = document.querySelector("#won");

// let turn0 = true;

// const winPatterns = [
//     [0, 1, 2],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 7],
//     [2, 5, 8],
//     [2, 4, 6],
//     [3, 4, 5],
//     [6, 7, 8],
// ];



// const resetGame = () => {
//         turn0 = true;
//         enableBoxes();
//         winMsg.classList.add("hide");
// }; 





// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         console.log("clieck");
//         if(turn0 === true) {
//             box.innerText = "X";
//             turn0 = false   
//         } else {
//             box.innerText = "O";
//             turn0 = true;
//         }
//     box.disabled = true;
    
//     checkWin();
        
//     });
// });

// const disableBoxes = () => {
//     for(let box of boxes) {
//         box.disabled = true;
//     };
// };

// const enableBoxes = () => {
//     for(let box of boxes) {
//         box.disabled = false;
//         box.innerText = "";
//     };
// };

// const showWinner = (winner) => {
//     msg.innerText  = `Congratulation, winner is ${winner}`;
//     winMsg.classList.remove("hide");
//     disableBoxes();
// };


// const checkWin =() => {
//     for(let pattern of winPatterns) {

//         let pos1 = boxes[pattern[0]].innerText;
//         let pos2 = boxes[pattern[1]].innerText;
//         let pos3 = boxes[pattern[2]].innerText;

//         if(pos1 != "" && pos2 != "" && pos3 != "") {
//             if(pos1 === pos2 && pos2 === pos3) {
//                 console.log("WINNER" , pos1);
//                 showWinner(pos1 );
//             }
//         }



        
         
//     }
// };

// newGame.addEventListener("click", resetGame);
// rstBtn.addEventListener("click", resetGame);
