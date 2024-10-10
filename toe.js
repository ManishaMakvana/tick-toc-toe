let boxs = document.querySelectorAll(".box");
let resetbtn  =  document.querySelector("#resetbtn");
let msgcontainer = document.querySelector(".msgcontainer");
let  msg = document.querySelector("#msg");
let newgamebtn = document.querySelector("#newbtn");

let body = document.querySelector("body");

let turnO = true;// palyer O , player X

const winpatterns = [ // Condition winer
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame =  () =>{
    turnO = true;
    anebleboxes();
    msgcontainer.classList.add("hide");
}

boxs.forEach((box) => {
    box.addEventListener("click", () =>{

        if(turnO)
        {
            box.innerText = "O";
            turnO = false;
         box.style.color = "#b0413e";
        }
        else{
            box.innerText = "X";
            turnO = true;
            box.style.color = "#1b4332";
        }
        box.disabled = true;

        checkwinner();
    });
});

const disableboxes = () =>{
    for(let box of boxs)
    {
        box.disabled = true;
    }
}


const anebleboxes = () =>{
    for(let box of boxs)
    {
        box.disabled = false;
        box.innerText= "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation  🥳, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkwinner = () => {
    for(let pattern of winpatterns)
    {
        let pos1val = boxs[pattern[0]].innerText;
        let pos2val = boxs[pattern[1]].innerText;
        let pos3val = boxs[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }

        }
    }
}

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);