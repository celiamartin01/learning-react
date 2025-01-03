import './App.css'
import { useState } from 'react'
import confetti from "canvas-confetti"

import {Square} from './components/Square'
import {WinnerModal} from './components/WinnerModal'
import {TURNS} from "./constants.js"
import {checkWinner, checkEndGame} from "./logic/board.js"

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')     // lo mismo que arriba pero con factor ternario
    return turnFromStorage ? turnFromStorage : TURNS.X
  })

  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if(board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)    

    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    const newWinner = checkWinner (newBoard)
    if (newWinner){
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)){
        setWinner(false)
      
    }
  }

  

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  return (
    <main className='board'>
      <h1> 
        Tic tac toe 
        <button onClick={resetGame}>Empezar de nuevo</button>
      </h1>
      <section className='game'>
        {
          board.map((square, index) => {
            return(
              <Square key = {index} index = {index} updateBoard = {updateBoard}>
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected = {turn === TURNS.X} >
          {TURNS.X}
        </Square>
        <Square isSelected = {turn === TURNS.O} >
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner}/>

    </main>
  )
}

export default App
