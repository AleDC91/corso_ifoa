import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function CardDetailComponent() {

    const { email } = useParams();
    const userlist = useSelector( state => state.users );
    const [user, setUser] = useState();

    useEffect(() => {
        let user = userlist.find(user => user.email === email)
        setUser(user);
    }, [email, userlist])
    

  return (
    <>
    {user &&  
    <Card> 
        <Card.Header>{user.name}</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <ul>
                        <li>Username: {user.username}</li>
                        <li>Email: {user.email}</li>
                        <li>Phone: {user.phone}</li>
                        <li>Website: {user.website}</li>
                    </ul>
                </blockquote>
            </Card.Body> 
      </Card>
    }
    </>
  )
}

