import { useState } from 'react'
import './App.css'
import Users from './user'

function App() {

  const [count, setCount] = useState(1)
 
 const hendelClick = () => {
  const newCount = count + 1;
  setCount(newCount);
 }
 const hendelClick2 = () => {
  const newCount = count - 1 ;
  setCount(newCount);
 }


  return (
    <>
    <h3>react core concept </h3>
    <Users></Users>
    <h1>players: {count} </h1>
    <button onClick={hendelClick}>add</button>
    <button onClick={hendelClick2}>remove</button>
    </>
  )
}




export default App
