import Home from './screens/Home';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LostItems from './screens/LostItems';
import FoundItems from './screens/FoundItems';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/itemsLost" element={<LostItems/>}/>
          <Route exact path="/itemsFound" element={<FoundItems/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
