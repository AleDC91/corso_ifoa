import "../styles/UserComponent.css"

const UserComponent = ({user}) => {

    const {id, name, username, email, address} = user;
    const {street, city, zipcode} = address;

    return ( 
        <div className="user-container">
            <h2>{name}</h2>
            <h4>{username}  -  {email}</h4>
            <p>{street} - {zipcode} - {city}</p>
        </div>
     );
}
 
export default UserComponent;