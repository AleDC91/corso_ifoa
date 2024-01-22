import React, { useEffect, useState } from 'react'


interface myProps { subTitle: string, num: number}
interface IUser { id: number, name: string, email: string}


export default function MyFuncComponent({subTitle, num}: myProps) {

    const [name, setName] = useState<string>('Mario Rossi');
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
    }, [])


  return (
    <>
        <h1> MyFuncComponent </h1>
        <h2>{subTitle} - {num}</h2>
        <h3>My name is {name}</h3>
        <button onClick={() => setName('Giuseppe Verdi')}>click</button>

        {users.map(u => <p key={u.id}>{u.name} - ({u.email})</p> )}
    </>
  )
}
