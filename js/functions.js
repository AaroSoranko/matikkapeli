'use strict'

let rand_num1 = 0
let rand_num2 = 0
let correctCount = 0
let incorrectCount = 0


const getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}


const randomizeNumbers = () => {
    rand_num1 = getRandomIntNumberInRange(1, 10)
    rand_num2 = getRandomIntNumberInRange(1, 10)
    document.getElementById('num1').textContent = rand_num1
    document.getElementById('num2').textContent = rand_num2
}


const updateCounters = () => {
    document.getElementById('correctCount').textContent = correctCount
    document.getElementById('incorrectCount').textContent = incorrectCount
}


document.addEventListener("DOMContentLoaded", () => {
    randomizeNumbers()
})


document.getElementById('calculate').addEventListener('click', () => {
    const answer = Number(document.getElementById('answer').value)
    const correctAnswer = rand_num1 + rand_num2;

    if (answer === correctAnswer) {
        alert('Oikein!')
        correctCount++
    } else {
        alert('Väärin!')
        incorrectCount++ 
    }

    
    updateCounters();

    
    randomizeNumbers();
    document.getElementById('answer').value = ''
})
