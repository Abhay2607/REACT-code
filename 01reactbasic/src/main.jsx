import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'



// const ReactElement = {
//   key: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank'
//   },
//   children: 'Click here to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>CLICK TO VISIT GOOGLE</a>
)

const reactElement = React.createElement(
  'a',
  { href: 'https://youtube.com', target: '_blank' },
  'CLICK TO VISIT YOUTUBE'

)



createRoot(document.getElementById('root')).render(
  reactElement

)
