import React from 'react'
import HookMqtt from './components/Hook/'
// Hook or Class
//import ClassMqtt from './components/Class/'
import './App.css'

function App() {
  return (
    <div className="App">
      <HookMqtt />
      {HookMqtt}
      {/*<ClassMqtt*/}
    </div>
  )
}

export default App
