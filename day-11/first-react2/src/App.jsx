import { useState } from 'react'
import TodoWrap from './components/TodoWrap'
 

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <TodoWrap/>
      </div>
  )
}

export default App
