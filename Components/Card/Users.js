import React from 'react'
import User from './User';
import './users.css'
import { DoctorsList } from '../API/Data';

const Users = () => {
  return (
    <div className="userscard">
    <div className="heading">
        <h4> Doctors list </h4>
       <h4>{'>'}</h4>
      </div>
      {
        DoctorsList.map((data, index)=>{
            return( 
              <div key={index}>
            <User  
                name={data.name}
                profile={data.profile}
                expertise={data.expertise}
                />
                </div>

            )
        })
      }
     
    </div>
  )
}

export default Users