import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Emp from '../employe/Emp'
import './List.css'

function List(props) {
    // get the props from the App.js
    const {apiBase, users} = props


  return (
    <div className='users'> 
      <h1>Employees</h1>
        {users && users.map(user => (
            <div key={user.fname+user.lname}>
                <Emp emp={user} />
            </div>
        ))}
    </div>
  )
}

export default List