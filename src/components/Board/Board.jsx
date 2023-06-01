import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'

const Board = ({ setWinMessage }) => {
  const [cells, setCells] = useState(["","","","","","","","",""])
  const [go, setGo] = useState('circle')
  
  const checkScrore = () => {
    const winningPattern = [
      [0,1,2],[0,3,6],[0,4,8],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[2,4,6]
    ]
    winningPattern.forEach(arr => {
      let circleWins = arr.every(cell => cells[cell] === 'circle')
      if(circleWins){
        setWinMessage("Circle Player Wins")
      }
      let crossWins = arr.every(cell => cells[cell] === 'cross')
      if(crossWins){
        setWinMessage("Cross Player Wins")
      }
    })
  }

  useEffect(() => {
    checkScrore()
  },[cells])

  return (
    <div className='board'>
      {
        cells?.map((cell, index) => <Card inde={index} cell={cell} key={index} go={go} setGo={setGo} setCells={setCells} cells={cells}/>)
      }
    </div>
  )
}

export default Board