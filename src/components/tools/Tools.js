import React from 'react'
import { useState, useEffect } from 'react'

function Tools(props) {
    // get props: 
    const {users, setUsers, refreshAllUsers} = props

//  state: 
const [salary, setSalary] = useState("")
const [age, setAge] = useState('')
const [country, sestCountry] = useState('')
const [fname, setFname] = useState('')
const [lname, setLname] = useState('')

// functions ; 
const handleSalaryChange= (e) => {
    setSalary(e.target.value)
}

const handleSearchClick = () => {
    let list = []
    let updated = false;
    if(fname.length > 1) {
        list = users.filter(user => {
            if(user.fname.toUpperCase().search(fname.toUpperCase()) != -1){
                updated = true;
                return user
            }
        })
        setUsers(list)
    }
    if(lname.length > 1) {
        list = users.filter(user => {
            if(user.lname.toUpperCase().search(lname.toUpperCase()) != -1){
                updated = true;
                return user
            }
        })
        setUsers(list)
    }
    if(age.length == 10) {
        list = users.filter(user => {
            const userB = new Date(user.age)
            const tB = new Date(age)

            console.log(userB == tB)
            if(userB.getFullYear() == tB.getFullYear() && userB.getDate() == tB.getDate() && userB.getMonth() == tB.getMonth()) {
                updated = true;
                return user
            }
        })
        setUsers(list)
    }
    if(!updated) refreshAllUsers()
    if(list.length < 1) refreshAllUsers()

}

  return (
    <div className='tools'>
        <h2>Filter Tools</h2>
        <div className='sections'>
            <div className='section'>
                <h4 className='fieldTitle'>Date of Birth</h4>
                <input type='text' className='dateofbirthInput' placeholder='1997-04-27' onChange={(e) => {setAge(e.target.value)}} value={age}/>
            </div>
            <div className='section'>
                <h4 className='fieldTitle'>Name</h4>
                <input type='text' className='inputName' placeholder='first Name' onChange={(e) => {setFname(e.target.value)}} value={fname}/>
                <input type='text' className='inputName' placeholder='last Name' onChange={(e) => {setLname(e.target.value)}} value={lname}/>
            </div>
            <div className='section'>
                <h4 className='fieldTitle'>Salary</h4>
                <input type='text' className={'salaryInput'} placeholder='5500' onChange={handleSalaryChange} value={salary} />
            </div>
            <div className='submit'>
                <button onClick={handleSearchClick} >search</button>
            </div>
        </div>
    </div>
  )
}

export default Tools