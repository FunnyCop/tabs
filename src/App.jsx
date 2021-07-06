import Tabs from "./components/Tabs.jsx"

import "./App.css"

const arr = [
  "One",
  "Two",
  "Three"
]

const App = () => {
  return (
    <div className = "App">
      <Tabs arr = { arr } />
    </div>
  )
}

export default App