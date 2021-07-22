import React from 'react';
import Card from './Card'
import style from './UserList.module.css'

export default function UserList(props){


    return (
        <Card className={style.users}>
        <ul>
            {props.users.map((user, index) => 
            <li key={index}>
            
            {user.username} ({user.age} years old.)
            </li>
            )}
        </ul>
        </Card>
    )
}