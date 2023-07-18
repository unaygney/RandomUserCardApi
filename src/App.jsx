import { useState } from 'react'
import './Style/main.css'
import Header from './component/Header'
import UserList from './component/UserList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-container'>
   <Header />
   <UserList />
   </div>
  )
}

export default App
