import { useState } from 'react'
import Portfolio from './Portfolio'
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Portfolio />
    </main>
  )
}

export default App
