import reactLogo from './assets/react.svg'
import './App.css'
import Timer from './Components/Timer'

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Timer />
    </>
  )
}

export default App
