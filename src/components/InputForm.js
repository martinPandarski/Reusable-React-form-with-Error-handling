import React,{useState} from 'react';
import Card from './Card';
import Button from './Button'
import style from './InputForm.module.css'
import ErrorModal from './ErrorModal'
export default function InputForm(props) {
    const [username,setUsername] = useState('')
    const [age,setAge] = useState('');
    const [error,setError] = useState()

    const onSubmitHandler = (e) => {
        e.preventDefault();
       
        if(username.trim().length === 0 || age.trim().length === 0){
            setError({title: 'Invalid input', message: 'Please enter a valid name and age.'})
            return
        }
        if(Number(age) < 1){
            setError({title: 'Invalid age', message: 'Age should be greater than 1.'})
            return
        }
        
        props.onAddUser(username, age);

        setUsername('')
        setAge('')
    }

    const errorHandler = () => {
        setError(null);
    }



    return (
        <div>
       {error &&  <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
        <Card className={style.input}>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="username">Username</label>
                <input onChange={(e) => setUsername(e.target.value)} type="text" value={username} id="username" />
                <label htmlFor="age">Age</label>
                <input onChange={(e) => setAge(e.target.value)} type="number" value={age} id="age" />
                <Button  type="submit">Add User</Button>
            </form>
        </Card>
        </div>
    )
}