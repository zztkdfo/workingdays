import { ReactElement } from 'react'
import ResponsiveDrawer from './components/ResponsiveDrawer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DashBoard from './pages/DashBoard'
import WorkingDaysList from './pages/WorkingDaysList'
import Inquiry from './pages/Inquiry'
import WorkingDaysPlan from './pages/WorkingDaysPlan'
import Info from './pages/Info'

const App = (): ReactElement => {
  return (
    <Router>
      <ResponsiveDrawer />

      <Switch>
        <Route exact path="/" component={DashBoard} />
        <Route path="/dashboard" component={DashBoard} />
        <Route path="/list" component={WorkingDaysList} />
        <Route path="/inquiry" component={Inquiry} />
        <Route path="/plan" component={WorkingDaysPlan} />
        <Route path="/info" component={Info} />
      </Switch>
    </Router>
  )
}

export default App
