// import { useState } from "react"
// import reactLogo from "./assets/react.svg"
// import viteLogo from "./assets/vite.svg"
// import heroImg from "./assets/hero.png"
import "./App.css"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hello New</h1>
      <h2>Start editing to see some magic happen!</h2>
      <DisplayNumber></DisplayNumber>
    </div>
  )
}

export default App

function DisplayNumber() {
  return <div>5</div>
}
