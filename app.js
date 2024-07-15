let boxes=document.querySelectorAll("#box");
let reset=document.querySelector("#reset-btn");
let newbtn=document.querySelector("#new-btn");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container");

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
let turnO=true;

const resetgame=()=>{
    turnO=true;
    enableboxes();
    msgContainer.classList.add("hide");
};


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was Clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        isWinner();
    })
});

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showwinner=(winner)=>{
    msg.innerText=`Winner of the Game is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
};

const isWinner=()=>{
    for(let pattern of winpattern){
        let posval1=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;

        if(posval1!="" && posval2!="" && posval3!=""){
            if(posval1===posval2 && posval2===posval3){
                console.log(`Winner ${posval1}`);
                showwinner(posval1);
            }
        }
        
    }
};

reset.addEventListener("click",resetgame);
newbtn.addEventListener("click",resetgame);