import React from 'react'
import {Typography, Box} from '@mui/material'
import {Link} from 'react-router-dom'
import SearchBar from './SearchBar'
import YouTubeIcon from '@mui/icons-material/YouTube';

const Navbar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        p: 2,
        borderBottom: '1px solid #e3e3e3',
        position: 'fixed',
        top: 0,
        left: 0,
        backGroundColor: 'white',
        gap: '10',
        width: '100%',
        zIndex: 100,
        boxSizing: 'border-box',
        opacity: 1,
        
      }}
    >
      <Link to='/' style={{textDecoration: 'none'}}>
        <Typography sx={{fontSize: 25, color: 'red', fontWeight: 800}}>
          <YouTubeIcon />Youtube
        </Typography>
      </Link>
      <SearchBar />
    </Box>
  )
}

export default Navbar
