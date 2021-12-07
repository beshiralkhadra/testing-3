import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landingpage from "./components/landingPage/Landingpage";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Landingpage />
      </Route>
    </Router>
  );
}

export default App;
