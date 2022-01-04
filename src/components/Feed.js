import React, {useEffect} from 'react'
import {Box, Typography, Button, Grid} from '@mui/material'
import { useStateContext } from '../contexts/StateContextProvider'
import VideoItem from './VideoItem'
import Loader from './Loader'
import HorizontalScroll from 'react-scroll-horizontal'

const Feed = () => {

  const {fetchData, loading, data, fetchOtherData, results} = useStateContext()

  useEffect(() => {
    fetchData(`videos?part=snippet&chart=mostPopular`)
    fetchOtherData('videoCategories?part=snippet')
    document.title = 'Youtube';
  }, [])

  if(loading){
    return (
      <Loader />
    )
  }

  return (
    <Grid container spacing={0} sx={{mt: 10, pl: 1}}>

      <Grid item xs={1} md={1} sx={{mt: 13}}>
          {results?.map(category => (
            <Button
            variant='contained'
            sx={{
              width: '100%',
              height: '52px',
              m: 0.5,
              opacity: 0.7,
              p: 0.2
            }}
            >{category?.snippet?.title}</Button>
          ))
          }
      </Grid>
      <Grid item xs={11} md={11}>

        <Box
          className='categories'
          sx={{
            display: 'flex',
            gap: 5,
            overflow: 'auto',
            width: '100%',
            height: '100px',
          }}
        >
          <Typography
            sx={{
              fontSize: 25,
              fontWeight: 900,
              p: 3,
            }}
          >Recommand Videos </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 2,
            p: 1,
            pl: 3,
          }}
        >
          {data?.map(video=>(

            <VideoItem
              video={video}
              id={(video.id.videoId && video.id.videoId) || video.id}
              key={(video.id.videoId && video.id.videoId) || video.id}
            ></VideoItem>
          )
          )}
        </Box>
      </Grid>
    </Grid>
  )
}

export default Feed
