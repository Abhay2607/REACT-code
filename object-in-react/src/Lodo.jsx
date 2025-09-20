import React from 'react'
import Player from './Player.jsx'


function Lodo() {
    let username = ["Abhay", "Ayush", "Aman", "Jassu"]
    let number = [1, 2, 3, 4]
    let colors = ["red", "green", "blue", "#6f6f00ff"]
    return (
        <>
            <Player playerNumber={number[0]} playerName={username[0]} playerColor={colors[0]}/>
            <Player playerNumber={number[1]} playerName={username[1]} playerColor={colors[1]}/>
            <Player playerNumber={number[2]} playerName={username[2]} playerColor={colors[2]}/>
            <Player playerNumber={number[3]} playerName={username[3]} playerColor={colors[3]}/>
           

        </>
    )
}

export default Lodo
