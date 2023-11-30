import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import BoardPage from './pages/BoardPage'
function App() {

  return (
    <div className='h-screen w-screen overflow-y-clip overflow-x-auto'>
    <BoardPage></BoardPage>
    </div>
  )
}

export default App