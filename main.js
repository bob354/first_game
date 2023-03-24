const problemElement = document.querySelector(".problem")
const ourForm = document.querySelector(".our-form")
const ourField = document.querySelector(".our-field")
const pointsNeeded = document.querySelector(".points-needed")
const mistakesAllowed = document.querySelector(".mistakes-allowed")


let state = {
    score: 0,
    wrongAns: 0,
}

function updProb(){
    state.currentProb = genProb()
    problemElement.innerHTML = `${state.currentProb.numOne} ${state.currentProb.opOne} ${state.currentProb.numTwo}`
    ourField.value = ""
    ourField.focus()
}
updProb()

function getRan(max){
    return Math.ceil(Math.random() * (max))
}

function genProb(){
    return {
        numOne: getRan(10),
        numTwo: getRan(10),
        numThree: getRan(10),
        opOne: ['+', '-', 'x'] [getRan(2)],
        opTwo: ['+', '-', 'x'] [getRan(2)],
    }
}

ourForm.addEventListener("submit", handleSubmit)

// let correctAnswer
// const p = state.currentProb

function handleSubmit(e){
    e.preventDefault()
    
    let correctAnswer
    const p = state.currentProb
    if (p.opOne == "+") correctAnswer = p.numOne + p.numTwo
    if (p.opOne == "-") correctAnswer = p.numOne - p.numTwo
    if (p.opOne == "x") correctAnswer = p.numOne * p.numTwo

    // if (p.opTwo == "+") correctAnswer = p.numTwo + p.numThree
    // if (p.opTwo == "-") correctAnswer = p.numTwo - p.numThree
    // if (p.opTwo == "x") correctAnswer = p.numTwo * p.numThree

    if (parseInt(ourField.value, 10) === correctAnswer){
        state.score++
        pointsNeeded.textContent = 10 - state.score
        updProb()
        // alert("HOORAY!")
    }
    else{
        state.wrongAns++
        mistakesAllowed.textContent = 3 - state.wrongAns
        // alert("SKILL ISSUE")
    }
    checkLogic()
}

function checkLogic(){
    // if won
    if (state.score === 10){
        alert("*Insert EPIC FORTNITE DANCE")
        resetGame()
    }
    // if loss
    if (state.wrongAns === 4){
        alert("SKILL ISSUES")
        resetGame()
    }
}

function resetGame(){
    updProb()
    state.score = 0
    state.wrongAns = 0
    pointsNeeded.textContent = 10
    mistakesAllowed.textContent = 3
}

// function print(){
//     return p.numOne + p.numTwo
// }
// print()