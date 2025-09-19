import "./Card.css"

function Card({ heading, idx }) {
    let oldPrice = ["71,999", "1,25,999", "999"]
    let newPrice = ["65,999", "1,00,999", "799"]
    let Discription = [
        ["New IPHONE that ironically is not new", "Lowest price of all time"],
        ["Samsungs new tech", "Lowest price of all time"],
        ["Half ear Earbuds", "Lowest price of all time"]]
    let strike = {
                textDecorationLine: "line-through"
            }
    let bold = {
                fontWeight: "bold"
            }

    return (
        <>
            <div className="container">
                <div className="upperBox">
                    <h3>{heading}</h3>
                    <p>{Discription[idx][0]}</p>
                    <p>{Discription[idx][1]}</p>

                    <div className="priceBox">
                        <span style={strike}>{oldPrice[idx]}</span>
                        &nbsp;&nbsp;&nbsp;
                        <span style={bold}>Price:{newPrice[idx]} </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
