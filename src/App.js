import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Box} from '@mui/material'
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import SearchFeed from './components/SearchFeed'
import VideoDetails from './components/VideoDetails'

function App() {
  return (
    <Router>
      <Box sx={{p: 1}}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/search' element={<SearchFeed />} />
          <Route path='video-details/:id' element={<VideoDetails />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
