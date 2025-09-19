import Product from "./Product"

function ProductList() {
    let options = ["FAST", "HITECT", "SLIM"]
    // let options = [<li>FAST</li> , <li>HITECT</li> , <li>SLIM</li>]


    return (
        <>
            <Product title="Phone" price={10000} features={options} />
            <Product title="Laptop" price={500000} features={options} />
            <Product title="Pen" price={10} features={options} />
            <Product title="Paper" />
        </>
    )
}

export default ProductList
