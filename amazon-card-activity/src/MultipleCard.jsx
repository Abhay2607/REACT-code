import Card from './Card.jsx'

function MultipleCard() {
    let styles = {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItem:"center"
    }
    let heading = {
        display: "flex",
        justifyContent: "center",
        alignItem:"center"
    }
    return (
        <>
        <h1 style={heading}>Blockbuster Deals | Show now </h1>
        <div style={styles}>
            <Card heading="IPHONE" Discription={0} idx={0}/>
            <Card heading="Samsung Galaxy Fold 10" Discription={1} idx={1}/>
            <Card heading="Boat Alpha " Discription={2} idx={2}/>
        </div>
        </>
    )
}

export default MultipleCard
