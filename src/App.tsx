import { useState } from 'react'
import Features from './components/Features';
import Openings from './components/Openings';
import CollectCv from './screens/cvCollect';
import EntryPoint from './screens/EntryPoint';
function App() {

  return (
    <div className="bg-red-900 h-screen">
      <EntryPoint />
      <Features />
      
    </div>
  )
}

export default App
