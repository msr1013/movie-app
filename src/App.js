
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import ApiUsed from "./pages/ApisUsed";

function App() {
  return (

    <BrowserRouter>
      <NavBar />
      <div className="container-fluid">
        <Switch>
          <Route exact path="/movie" component={Home} />
          <Route exact path="/apiused" component={ApiUsed} />
        </Switch>
      </div>

    </BrowserRouter>

  );
}

export default App;
