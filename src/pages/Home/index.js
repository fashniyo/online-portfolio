import Button from 'react-bootstrap/Button'
import ButtonComponent from '../../common/Button/Button'
import { TicTacToe } from '../Games/tictactoe'
import NavBarComponent from '../../common/Navbar'

const Home = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <NavBarComponent />
      <TicTacToe />
      <ButtonComponent text="component" size="lg" variant="secondary" />{' '}
      <Button>Hello</Button>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  )
}

export default Home
