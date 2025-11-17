import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import ButtonComponent from "./components/ButtonComponent"
import ImageComponent from "./components/ImageComponent"

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <ButtonComponent className="button" type="Premi" />
      <ButtonComponent className="button" type="Schiaccia" />
      <br />
      <ImageComponent className="img" src="https://placecats.com/100/100" />
      <ImageComponent className="img" src="https://placecats.com/150/150" />
      <ImageComponent className="img" src="https://placecats.com/200/200" />
      <ImageComponent className="img" src="https://placecats.com/200/200" />
      <ImageComponent className="img" src="https://placecats.com/150/150" />
      <ImageComponent className="img" src="https://placecats.com/100/100" />
    </>
  )
}

export default App
