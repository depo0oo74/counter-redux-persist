import React from 'react'
import IncrementBtn from './components/IncrementBtn'
import DecrementBtn from './components/DecrementBtn'
import Counter from './components/Counter'
import ResetPersist from './components/ResetPersist'

function App() {
  return (
    <div>
      <IncrementBtn />
      <Counter />
      <DecrementBtn />
      <ResetPersist />
    </div>
  )
}

export default App