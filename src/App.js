import logo from "./logo.svg";
import "./App.css";
import Leftnav from "./Leftnav";
import Topnav from "./Topnav";
import Rightnav from "./Rightnav";
import Control from "./Control";


function App() {
  

  return (
    <div className="App">
      <Topnav/>
      <Leftnav/>
      <Control/>
      <Rightnav/>
    </div>
  );
}

export default App;
