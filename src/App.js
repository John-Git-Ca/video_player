import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {Box} from '@mui/material'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Box>
        <Navbar />
      </Box>
    </Router>
  );
}

export default App;
