import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Box} from '@mui/material'
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import SearchFeed from './components/SearchFeed';

function App() {
  return (
    <Router>
      <Box sx={{p: 1}}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/search' element={<SearchFeed />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
