import { ReactElement } from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DashBoard from './pages/DashBoard'
import WorkingDaysList from './pages/WorkingDaysList'
import Inquiry from './pages/Inquiry'
import WorkingDaysPlan from './pages/WorkingDaysPlan'
import Info from './pages/Info'
import './App.css'
import { Container } from '@material-ui/core'

const App = (): ReactElement => {
  return (
    <Router>
      <NavBar />
      <Container maxWidth="lg">
        <Switch>
          <Route path="/" exact component={DashBoard} />
          <Route path="/dashboard" component={DashBoard} />
          <Route path="/list" component={WorkingDaysList} />
          <Route path="/inquiry" component={Inquiry} />
          <Route path="/plan" component={WorkingDaysPlan} />
          <Route path="/info" component={Info} />
        </Switch>
      </Container>
    </Router>
  )
}

export default App
