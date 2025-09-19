import "./Product.css"

function Product({ title, price = 5, features }) {
    let isDiscount = price >= 30000
    let backgroundChange = {backgroundColor: isDiscount ? "pink" : ""};
    // console.log(feature)
    // const list = features.map((feature) => <li>{feature}</li> )

    return (
        <>
            <div className="Product" style={backgroundChange}>
                <i className="fa-brands fa-product-hunt"></i>
                <h3>{title}</h3>
                <h4> PRICE : {price}</h4>
                {/* {price >= 10000 ? <p>"Discount of 5%"</p> : null } */}
                {isDiscount && <p>Discount of 5%</p> }
                {/* <p>Features of the Product:{features.map((feature) => <li>{feature}</li>)}</p> */}
            </div>
        </>
    )
}

export default Product