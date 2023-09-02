import Home from './screens/Home';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Items from './screens/Items';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/itemsLost" element={<Items type={"lost"}/>} />
          <Route exact path="/itemsFound" element={<Items type={"found"}/>} />
          <Route exact path="/itemsCollected" element={<Items type={"collected"}/>} />
          <Route exact path="/previouslyReportedItems" element={<Items type={"reported"}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
