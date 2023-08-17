import Home from './screens/Home';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LostItems from './screens/LostItems';
import FoundItems from './screens/FoundItems';
import CollectedItems from './screens/CollectedItems';
import UserProfile from './screens/UserProfile';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/itemsLost" element={<LostItems/>}/>
          <Route exact path="/itemsFound" element={<FoundItems/>}/>
          <Route exact path="/itemsCollected" element={<CollectedItems/>} />
          <Route exact path="/userProfile" element={<UserProfile/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
