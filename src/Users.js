import React from 'react'
import './App.css'

function Users(props) {
    return (
        <div className="users">
            <div>
                <p><span>Name:</span>  {props.name}</p>
                <p><span>Birthday: </span>: {props.birthday}</p>
                <p><span>Status: </span> {props.status}</p>
                <p><span>Nickname: </span> {props.nickname}</p>
                <p><span>Portrayed: </span> {props.portrayed}</p>
            </div>
            <div>
                <img className="profile" src={props.src} alt="profile"/>
            </div>
           
        </div>
    )
}

export default Users
