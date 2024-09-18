import { BrowserRouter as Router, Routes, Route} from  'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExercisesDetails from './pages/ExercisesDetails';

function App() {
  return (
   <Router>
   <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/exercises/:id' element={<ExercisesDetails />}/>
    </Routes>
   </Router>
  );
}

export default App;
