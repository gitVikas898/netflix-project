import React from 'react'
import Gptsearchbar from './Gptsearchbar'
import Gptsuggestions from './Gptsuggestions'
import { BACKGROUND_URL } from '../utils/constants'

const Gptsearch = () => {
  return (
    <div className={`bg-[url(${BACKGROUND_URL})] min-h-screen grid`}>
      <Gptsearchbar></Gptsearchbar>
      <Gptsuggestions></Gptsuggestions>
    </div>
  )
}

export default Gptsearch