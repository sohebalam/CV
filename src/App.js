import { CssBaseline } from "@material-ui/core"
import "./App.css"
import Home from "./pages/Home"
import { Route } from "react-router-dom"
import Resume from "./pages/Resume"
import TopBar from "./components/TopBar"
import Projects from "./pages/Projects"
import Contacts from "./pages/Contacts"
function App() {
  return (
    <>
      <CssBaseline />

      <TopBar />

      <Route path='/' exact component={Home} />
      <Route path='/resume' exact component={Resume} />
      <Route path='/projects' exact component={Projects} />
      <Route path='/contacts' exact component={Contacts} />
    </>
  )
}

export default App
