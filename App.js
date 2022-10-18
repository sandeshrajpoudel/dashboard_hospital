import './App.css';
import Masterpage from './Pages/Masterpage';
// import Table from './Components/Table/Table';
import { BrowserRouter as Router,  } from "react-router-dom";

const App=()=> {
  return (
    <div className="App">
      <Router>
     <Masterpage/>
     </Router>
</div>
  );
}

export default App;
