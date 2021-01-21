import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { TodoPage } from './page/TodoPage'
import { HomePage } from './page/HomePage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/todo" component={TodoPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
