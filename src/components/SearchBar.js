import React, {useState, useContext} from 'react'
import {IconButton, Paper} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from 'react-router-dom'
import { useStateContext } from '../contexts/StateContextProvider';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  const {fetchData} = useStateContext()
  // console.log(searchTerm)

  const handleSubmit= (e) => {
    e.preventDefault()
    navigate('/search')
    fetchData(`search?part=snippet&key=AIzaSyA5PnZEJGNmor7jKnb_LkovRID4xKiKHGw&q=${searchTerm}`)
  }

  return (
    <Paper
      component='form'
      onSubmit = {handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: 5,
      }}
    >
      <input
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e)=>{setSearchTerm(e.target.value)}}
      />
      <IconButton type='submit' sx={{p: '10px'}} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchBar
