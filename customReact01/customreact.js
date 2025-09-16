
function customRender(reactElement , mainContainer){
    // const domElement = document.createElement(reactElement.key)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href' , reactElement.props.href)
    // domElement.setAttribute('target' , reactElement.props.target)
    // mainContainer.appendChild(domElement)


    const domElement = document.createElement(reactElement.key)
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        domElement.setAttribute(prop , reactElement.props[prop])
    }

    mainContainer.appendChild(domElement)
}


const reactElement = {
    key : 'a' , 
    props : {
        href: 'https://google.com' ,
        target : '_blank'
    },
    children: 'Click here to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement , mainContainer)