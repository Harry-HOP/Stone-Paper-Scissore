const stone = document.querySelector(".Stone");
const paper = document.querySelector(".paper");
const scissore = document.querySelector(".scissore");
const you = document.querySelector(".you");
const comp = document.querySelector(".comp");
const action = document.querySelector(".action");
var score_u = 0;
var score_c = 0;

stone.addEventListener('click' ,() => {
    console.log("clicked");
    var variables = [paper, scissore];
    var randomIndex = Math.floor(Math.random() * variables.length);
    var chosenVariable = variables[randomIndex];

    if(chosenVariable==paper){
        score_c++;
        action.innerText = "Its paper, Computer Win";
        comp.innerText = score_c;

    }
    else{
        score_u++;
        action.innerText = "its scissore, You win";
        you.innerText = score_u;
    }
})

paper.addEventListener('click' ,() => {
    console.log("clicked");
    var variables = [stone, scissore];
    var randomIndex = Math.floor(Math.random() * variables.length);
    var chosenVariable = variables[randomIndex];

    if(chosenVariable==scissore){
        score_c++;
        action.innerText = "Its scissore, Computer Win";
        comp.innerText = score_c;

    }
    else{
        score_u++;
        action.innerText = "its stone, You win";
        you.innerText = score_u;
    }
})

scissore.addEventListener('click' ,() => {
    console.log("clicked");
    var variables = [paper, stone];
    var randomIndex = Math.floor(Math.random() * variables.length);
    var chosenVariable = variables[randomIndex];

    if(chosenVariable==stone){
        score_c++;
        action.innerText = "Its stone, Computer Win";
        comp.innerText = score_c;

    }
    else{
        score_u++;
        action.innerText = "Its paper, You win";
        you.innerText = score_u;
    }
})
