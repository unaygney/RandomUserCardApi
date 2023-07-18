import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios'
import User from './User'

function UserList() {
    const [Users, setUsers] = useState([])
    const fetchUsers =  async () => {
        const res = await axios.get('https://randomuser.me/api/?results=10')
        setUsers(res.data.results)
    }

useEffect(() => {
fetchUsers()
}, [])


return (
    <div className='user-list'>
      <ul>
        {Users.map((user, idx) => (
          <li>
            {' '}
            <User user={user} key={idx} />{' '}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList;