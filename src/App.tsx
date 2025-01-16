import { useState } from 'react'
import './App.css'
import { Greetings } from './components/Greetings'
import Portfolio from './components/Portfolio'

function App() {
  const [content, setContent] = useState('home')

  switch (content) {
    case 'home':
      return (
        <>
          <Greetings />
        </>
      )
    case 'portfolio':
      return (
        <>
          <Portfolio />
        </>
      )
    default:
      return (<></>)
      break;
  }


}

export default App
