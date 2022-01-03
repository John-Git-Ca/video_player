import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { useStateContext } from '../contexts/StateContextProvider'
import ReactPlayer from 'react-player'
import {Box} from '@mui/material'


const VideoDetails = () => {
  const {id} = useParams()
  console.log('usepARAMS  ' + id)
  const {data, fetchData, fetchOtherData, results} = useStateContext()

  // const [videoDetail, setVideoDetail] = useEffect()
  // console.log(videoDetail)
  
  useEffect(() => {
    console.log('id' + id)
    fetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    // fetchOtherData(`videos?part=snippet,statistics&id=${id}`)
  }, [])

  useEffect(()=>{
    // setVideoDetail(results[0])
  },[results])
  return (
    <>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: 10,
      }}
    >

      <ReactPlayer
        controls
        url={`https://www.youtube.com/watch?v=${id}`}
      />
    </Box>
    </>
  )
}

export default VideoDetails
