import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './component/Navigation/Navigation'
import ContactHeader from './component/ContactHeader/ContactHeader'
import ContactForm from './component/ContactForm/ContactForm'
import Button from './component/Button/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation />
      <ContactHeader />
      <ContactForm />
    </div>
  )
}

export default App
