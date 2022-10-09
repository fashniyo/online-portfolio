import logo from './logo.svg'
import './App.css'
import Button from 'react-bootstrap/Button'
import ButtonComponent from './common/Button'
import { TicTacToe } from './games/tictactoe/indx'

const App = () => {
  return (
    <div className="App">
      <TicTacToe />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ButtonComponent text="component" size="lg" variant="secondary" />{' '}
        <Button>Hello</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
