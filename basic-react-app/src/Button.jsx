function printHello(){
    console.log(`HELLO WORLD`)
}

function Button() {
    return (
        <div>
            <button onClick={printHello} >Click Me!</button>
        </div>
    )
}

export default Button
