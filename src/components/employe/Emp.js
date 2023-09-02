import React, { useState } from 'react'
import Slider from 'react-input-slider';
import './Emp.css'

function Emp(props) {
    //get props
    const {emp} = props


    // init state:
    const [salary, setSalary] = useState(emp.salary)

    // defined variables
    console.log(emp)
    const age = new Date(emp.age)

    // functions: 
    const handleSalaryChange = (e) => {
        console.log(e)
    }

    return (
        <div className='user'>
            <div className='header'>
                <div className='avatar' style={{backgroundColor: emp.avatar, color: 'white', fontStyle: 'bold'}}>{emp.jobTitle}</div>
            </div>
            <div className='body'>
                <div className='name'>
                <i className="fa-solid fa-user-tie"></i>
                {emp.fname + ' ' + emp.lname}
                </div>
                <div className='email empd'>
                    <i className="fa-regular fa-envelope"></i>
                    {emp.email}
                </div>
                <div className='birthDay empd'>
                    <i className="fa-solid fa-cake-candles"></i>
                    {age.getFullYear()}-{formatAge(age.getMonth() + 1)}-{formatAge(age.getDate())}
                    {}
                </div>
                <div className='country'>
                    <i className="fa-solid fa-flag"></i>
                    {emp.country}
                    {}
                </div>
                
                <div className='salary empd'>
                    <div className="slidecontainer">
                    <h3 className='salary-title'>
                        <i className="fa-solid fa-money-check-dollar"></i>
                        Salary
                    </h3>

                    {salary} $<br/><br/>
                    </div>
                    <div className='salary-value' id='SalaryValue'></div>
                </div>
                
            </div>
            <div className='footer'></div>
        </div>
    )
}


function formatAge (number)  {
    if(number > 9) return number
    if(number < 10) return '0'+number
}

export default Emp