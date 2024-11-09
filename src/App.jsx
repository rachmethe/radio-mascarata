import { useState } from 'react'
import reactLogo from './assets/android-chrome-512x512.png'
import viteLogo from './assets/logo-v3.png'
import './App.css'
import RadioPlayer from './components/RadioPlayer'

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>RADIO MASCARATA</h1>
      <RadioPlayer />
    </>
  )
}

export default App
