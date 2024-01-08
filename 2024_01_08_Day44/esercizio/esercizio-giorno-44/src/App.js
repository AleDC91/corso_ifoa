import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import ImageComponent from "./components/ImageComponent";
import UserComponent from "./components/UserComponent";
import Loading from "./components/Loading";
import Error from "./components/Error";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("")
  const buttonText = "Invia"; 
  const imageData = {
    src: "https://i2.wp.com/stonemusic.it/wp-content/uploads/2020/12/RANDY.png?resize=800%2C600&ssl=1",
    alt: "Randy e Ozzy",
    title: "Randy e Ozzy",
  };

  
  const URL = "https://jsonplaceholder.typicode.com/users";

  const getData = () => {
    fetch(URL)
      .then((res) => {
        if(res.ok){
          return res.json();
        } else {
          throw Error("errore nel fetch");
        }
      })
      .then((json) => {
        setUsers(json);
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err);
        setIsError(true);
        setIsLoading(false);
        setErrorMsg(err.message);
      });
  };


  useEffect(() => {
    setIsError(false);
    setIsLoading(true)
    getData();
  }, []
  );


  return (
    <div className="App">
      <Button buttonText={buttonText} />
      <ImageComponent imageData={imageData} />
      { isLoading && <Loading />}
      { users && users.map((user) => <UserComponent key={user.id} user={user} />) }
      { isError && <Error errorMsg={errorMsg} /> }
    </div>
  );
}

export default App;
