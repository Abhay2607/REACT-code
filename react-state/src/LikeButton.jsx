import { useState } from "react"

function LikeButton() {
    let [heart, setHeart] = useState(false)
    let [click, setClick] = useState(0)


    let togglelike = () => {
        heart = !heart
        setHeart(heart)
        console.log(heart)
    }

    let count = () => {
        click += 1
        setClick(click)
        console.log(click)
    }


let redHeart = {
    color: "red"
}
return (
    <>
        <p>Liked : {click}</p>
        <p onClick={togglelike}>{heart ? <i className="fa-solid fa-heart" style={redHeart}></i> : <i className="fa-regular fa-heart" onClick={count}></i>} </p>

    </>
)
}

export default LikeButton
