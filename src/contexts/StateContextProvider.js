import React, {useState, createContext, useContext} from 'react'
import axios from 'axios'

const StateContext = createContext()
const baseUrl = 'https://www.googleapis.com/youtube/v3'

export const StateContextProvider = ({children}) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])

  const fetchData = async (url) => {
    setLoading(true)
    const data = await axios.get(`${baseUrl}/${url}`, {
      params: {
        key: process.env.REACT_APP_API_KEY,
        maxResults: 50
      }
    })
    console.log(data)
    setData(data?.data?.items)
    setLoading(false)
  }

  return (
    <StateContext.Provider
      value={{
        fetchData,
        data,
        loading,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}



export const useStateContext = () => useContext(StateContext)
