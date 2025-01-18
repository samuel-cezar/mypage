import { useState } from 'react'
import './App.css'
import { Greetings } from './components/Greetings'
import { Portfolio } from './components/Portfolio'
import { Menu } from './components/Menu'

function App() {
  const [content, setContent] = useState('home')
  switch (content) {
    case 'home':
      return (
        <>
          <Menu navigateTo={setContent} />
          <Greetings />
        </>
      )
    case 'portfolio':
      return (
        <>
          <Menu navigateTo={setContent} />
          <Portfolio />
        </>
      )
    default:
      return (<><p>Default</p></>)
      break;
  }


}

export default App
