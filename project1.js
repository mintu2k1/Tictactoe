// TIC TAC TOE GAMING PROJECT.
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let t0 = true;
let count=0;
const winPatterns =[
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [3, 4, 5],
    [6, 7, 8],
    [2, 5, 8],
    [2, 4, 6],
];
const restart = () => {
    t0=true;
    enablebox();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        console.log("clicked the button");
        if(t0)
        {
            box.innerHTML= "O";
            box.style.backgroundColor = "darkgreen";
            box.style.color = "pink";
            t0 = false;
        }
        else{
            box.innerHTML="X";
            box.style.backgroundColor = "red";
            box.style.color = "gray";
            t0 = true;
        }
        count++;
        box.disabled = true;
        checkwinner();
    });
});

const checkwinner = () => {
    for(pattern of winPatterns)
    {
        let p1 = boxes[pattern[0]].innerHTML;
        let p2 = boxes[pattern[1]].innerHTML;
        let p3 = boxes[pattern[2]].innerHTML;
        if(p1!="" && p2!="" && p3!="")
        {
            if(p1===p2 && p2===p3)
            {
                console.log("Winner", p1);
                showwinner(p1);
            }
            else{
                if(count===9)
                {
                    console.log("draw");
                    draw("Draw");
                }
            }
        }
    }
}
const disablebox = () => {
    for(let box of boxes)
        box.disabled=true;
}
const enablebox = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText = "";
    }
}
const showwinner = (winner) => {
    msg.innerText =`Conguralation winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();
}
const draw = (d) => {
    msg.innerText =`The match is ${d}`;
    msgcontainer.classList.remove("hide");
    disablebox();
}
newgamebtn.addEventListener("click",restart);
reset.addEventListener("click",restart);