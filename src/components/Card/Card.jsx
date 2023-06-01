import React from 'react'

const Card = ({ inde, go, setGo, cell, setCells, cells }) => {
  
  const onCardClick = (e) => {
    const taken = e.target.firstChild.classList.contains('circle') || e.target.firstChild.classList.contains('cross')
    console.log(e.target, taken);
    if(!taken){
      if(go ==='circle'){
        e.target.firstChild.classList.add("circle")
        setGo("cross")
        handleCellChange('circle')
      }
      if(go ==='cross'){
        e.target.firstChild.classList.add("cross")
        setGo("circle")
        handleCellChange('cross')
      }
    }
  }

  const handleCellChange = (className) => {
    const newSell = cells?.map((cel, ind) => {
      if(ind === inde){
        return className
      } else {
        return cel
      }
    })
    setCells(newSell)
  }

  return (
    <div className='card' id={inde} onClick={onCardClick}>
      <div className={cell}></div>
    </div>
  )
}

export default Card