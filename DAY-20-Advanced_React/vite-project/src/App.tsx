// import { useState } from "react"
// import Button from "./components/Button"
// import Footer from "./components/Footer"
// import Heading from "./components/Heading"
// import List from "./components/List"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"

import "./App.css"

function App() {
  // const [counter, setCounter] = useState<number>(0)
  const isLogin: boolean = false
  // const increaseCount = () => {
  //   setCounter(counter + 1)
  // }
  // const decreaseCount = () => {
  //   setCounter(counter - 1)
  // }
  return (
    <>
      {isLogin ? <Dashboard></Dashboard> : <Login></Login>}
      {/*<button onClick={increaseCount}>Increase</button>
      <Heading title="ABC" counter={counter}>
        Now Counting = {counter}
      </Heading>
      <Button title="Increase" color="red" updateCount={increaseCount}></Button>
      <Button
        title="Decrease"
        color="grey"
        updateCount={decreaseCount}
      ></Button>
      <h1>Hello World</h1>
      <Footer counter={counter}></Footer>
      <List items={[1, 2, 3]} render={(item) => <h1>{item}</h1>}></List>
      <List items={["a", "b", "c"]} render={(item) => <h2>{item}</h2>}></List>
      <Dashboard></Dashboard>*/}
    </>
  )
}

export default App
