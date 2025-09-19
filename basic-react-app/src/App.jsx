import Title from "./Title"
import ProductList from "./ProductList.jsx"

import MsgBox from "./MsgBox.jsx"



function App() {

  return (
    <>
      <h1>Hello World</h1>
      <p>2+2 = JS LOGIC ({2 - 2} , {2 + 2} ,  {2 / 2})</p>
      <Title />
      <ProductList />


        <MsgBox username="Abhay" textColor="red"/>
        <MsgBox username="React" textColor="blue"/>


    </>
  )
}

export default App
