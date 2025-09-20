import React from 'react'
import { useState } from 'react'

function Player({ playerName, playerNumber, playerColor }) {
    let [moves, setMoves] = useState(0)

    let updateScore = () => {
        setMoves(prev => { 
            const score = prev + 1
            console.log(`Score Updated for ${playerName} : ${score}` )
            return score;
        })
    }
    return (
        <>
            <p>Player {playerName} : {playerNumber}  </p>
            <button onClick={updateScore} style={{ backgroundColor: playerColor }}  >Click : {moves}</button>
        </>
    )
}

export default Player
