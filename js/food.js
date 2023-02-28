import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

export var score = 0
let food = getRandomFoodPosition()
const EXPANSION_RATE = 3

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    updateScore()
    food = getRandomFoodPosition()
  }
}


export function updateScore() {
  score++;   score++;   score++;
  document.getElementById("score").innerHTML = score; 
}


export function draw(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}
