import { Router, Route, Link } from 'nekdev-router'
import SearchPage from './SearchPage'

function App() {
  return (
    <Router>
      <Route
        path='/'
        Component={() => {
          return (
            <>
              <h1>Hello world using NekDev-Router package</h1>
              <div style={{ display: 'flex', flexDirection: 'column'}}>
                <Link to='/search/something'>Go to Search</Link>
                <Link to='/about'>Go to About</Link>
                </div>
            </>
          )
        }}
      />
      <Route
        path='/about'
        Component={() => {
          return (
            <>
              <h1>NekDev-Router package emulate react router</h1>
              <Link to='/'>Go to Home</Link>
            </>
          )
        }}
      />
      <Route
        path='/about'
        Component={() => {
          return (
            <>
              <h1>NekDev-Router package emulate react router</h1>
              <Link to='/'>Go to Home</Link>
            </>
          )
        }}
      />

      <Route
        path='/search/:query'
        Component={ SearchPage }
      />
    </Router>
  )
}

export default App
