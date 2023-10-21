import React, { useState } from 'react'
import axios from 'axios'
import { AiOutlineMail } from 'react-icons/ai';
import { FiGlobe } from 'react-icons/fi';
import './UsersPageComponent.css'

const UsersPageComponent = () => {
    const [users, setUsers] = useState([])

    const getUserData = () => {
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => setUsers(response.data))
        .catch(error => console.log(error))
    }

  return (
    <React.Fragment>
        <h1 className='header'>Users</h1>
        <section className='user-card'>
            {users.map((iterator, index) => (
                <div className='container' key={index}>
                    <p className='name'>{iterator.name}</p>
                    <p className='user-name'>{iterator.username}</p>
                    <p className='email'><AiOutlineMail /> {iterator.email}</p>
                    <p className='website'><FiGlobe/> {iterator.website}</p>
                </div>
            ))}
        <button className='get-button' onClick={getUserData}>Get User Data</button>
        </section>
    </React.Fragment>
  )
}

export default UsersPageComponent