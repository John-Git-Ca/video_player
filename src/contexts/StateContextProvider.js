import React, {useState, createContext, useContext} from 'react'
import axios from 'axios'

const StateContext = createContext()
const baseUrl = 'https://www.googleapis.com/youtube/v3'

export const StateContextProvider = ({children}) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [results, setResults] = useState([])

  const fetchData = async (url) => {
    console.log('fetch called')
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

  const fetchOtherData = async (url) => {
    const data1 = await axios.get(`${baseUrl}/${url}`, {
      params:{
        key: process.env.REACT_APP_API_KEY,
        maxResults: 50,
        regionCode: 'IN',
      }
    })
    console.log('data1' + data1.data.items)
    setResults(data1?.data?.items)
  }

  return (
    <StateContext.Provider
      value={{
        fetchData,
        fetchOtherData,
        results,
        data,
        loading,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}



export const useStateContext = () => useContext(StateContext)
