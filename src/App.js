import "./App.css";
import Layout from "./containers/Layout";
import AOS from "aos";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  AOS.init();

  return (
    <div className="App">
      <Router>
        <Layout />
      </Router>
    </div>
  );
}

export default App;
