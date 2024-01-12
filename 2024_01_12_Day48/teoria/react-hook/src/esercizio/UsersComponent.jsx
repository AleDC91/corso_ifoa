import React from 'react'
import { Form } from 'react-bootstrap'

export default function UsersComponent({users, changeUser}) {

    return (
        <Form.Select 
                aria-label="Default select example" 
                className="my-3"
                onChange={changeUser}
            >
            <option>Open this select menu</option>
            {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
        </Form.Select>
    )
}