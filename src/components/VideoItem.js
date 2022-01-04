import React from 'react'
import {Link} from 'react-router-dom'
import {Card, CardContent, CardMedia, Typography} from '@mui/material'

const VideoItem = ({video, id}) => {
  return (
    <Link 
      to={video?.snippet?.thumbnails?.high.url
      ? `/video-details/${id}`
      : `/video-details/cV2gBU6hKfY`
      }
    >
      <Card
        sx={{
          width: 300,
          height:252.5,
          boxShadow: 'none',
          borderRadius: 0,
        }}
      >
        <CardMedia
          component='img'
          height='70%'
          image={video?.snippet?.thumbnails?.high.url ||
            'https://i.pinimg.com/474x/30/88/a3/3088a3ebaf713600adacd00397ee410d.jpg'}
          alt='green iguana'
          sx={{borderRadius: 2}}
        />
        <CardContent>
          <Typography sx={{fontSize: 13, fontWeight: 600}}>
            {video?.snippet?.title + " " + id}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
}

export default VideoItem
