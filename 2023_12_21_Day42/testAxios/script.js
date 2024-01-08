// AXIOS GLOBALS
// se il server mi manda un token, potrebbe essere utile
// conservarlo e mandarlo nell'header di tutte le richoeste che fa il client
axios.defaults.headers.common["X-Auth-Token"] =
  "eyJhbGciOiJIUzI1NiJ9.ew0KICAic3ViIjogIjEyMzQ1Njc4OTAiLA0KICAibmFtZSI6ICJEaW8gUG9yY29uIiwNCiAgImlhdCI6IDE1MTYyMzkwMjINCn0.K-tz2GGlQZ3XQwi9ESo8KB24LOm5SspSRXpD4zxB2Zs";

let URL = "https://jsonplaceholder.typicode.com/todos/";

// INTERCEPTING REQUESTS AND RESPONSES

axios.interceptors.request.use(
  (config) => {
    console.log(
      `Richiesta ${config.method.toUpperCase()} inviata a ${config.url}`
    );

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


getTodos();
addTodo();
updateTodo(1);
deleteTodo(4);
getData();
customHeaders();
transformResponse();
errorHandling();
cancelToken();
getTodosWithTimeout();

function getTodos() {
  axios
    .get(URL, { params: { _limit: 6 } })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
}
//   versione lunga:
// axios({
//     method: "get",
//     url: URL,
//     params: {
//         _limit: 10
//     }
// })
// .then(res => console.log(res.data))
// .catch(err => console.log(err))}

function addTodo() {
  axios
    .post(URL, {
      title: "altro todo",
      completed: true,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  // versione lunga
  // axios({ url: URL,
  //         method: "POST",
  //         data:{
  //             title: "nuovo todo",
  //             completed: false
  //         }
  //     })
  //     .then(res => console.log(res))
}

function updateTodo(id) {
  axios
    .patch(URL + id, {
      title: "todo modificato",
      completed: true,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

function deleteTodo(id) {
  axios
    .delete(URL + id)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

// Simultaneous data: fare piu richieste contemporaneamente

function getData() {
  axios
    .all([
      axios.get("https://jsonplaceholder.typicode.com/todos/"),
      axios.get("https://jsonplaceholder.typicode.com/posts/"),
    ])
    .then(
      axios.spread((todos, posts) => {
        console.log(todos);
        console.log(posts);
      })
    );
}

// versione con square bracket notation
// axios.all([
//     axios.get("https://jsonplaceholder.typicode.com/todos/"),
//     axios.get("https://jsonplaceholder.typicode.com/posts/")
// ])
//   .then(res => {
//     console.log(res[0]),
//     console.log(res[1])
//   })
//   .catch(err => console.log(err))



// CUSTOM HEADERS

function customHeaders() {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: "someToken",
    },
  };
  axios
    .post(
      URL,
      {
        title: "altro todo",
        completed: true,
      },
      config
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

// TRANSFORMING REQUESTS AND RESPONSES

function transformResponse() {
  const options = {
    method: "post",
    url: "https://jsonplaceholder.typicode.com/todos/",
    data: {
      title: "ciao ciao",
    },
    transformResponse: axios.defaults.transformResponse.concat((data) => {
      data.title = data.title.toUpperCase();
      return data;
    }),
  };

  axios(options).then((res) => console.log(res));
}


// ERROR HANDLING

function errorHandling(){
    axios
        .get("https://jsonplaceholder.typicode.com/todosssssssssssssss", {
            // validateStatus: function(status) {
            //     return status < 500; // Reject only if status is >= 500
            // }                        // il catch non parte se ad es. c'è err 404
        })
        .then(res => console.log(res))
        .catch(err => {
            if(err.response){
                // server responded with other than 200 range
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else if(err.request){
                // Request made but no response
                console.log(err.request)
            }else{
                console.log(err.message)
            }
        })
}


// CANCEL TOKEN
function cancelToken(){
    const source = axios.CancelToken.source()
    axios
        .get("https://jsonplaceholder.typicode.com/todos", {
            cancelToken: source.token
        })
        .then(res => console.log(res))
        .catch(thrown => {
            if(axios.isCancel(thrown)){
                console.log("Request canceled!!", thrown.message)
            }
        });
        if(true){ // simulo un evento che accade e voglio cancellare la richesta
            source.cancel("Request canceled!!!")
        }
}



// AXIOS INSTANCE

    const axiosInstance = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com"
        // oltre a baseURL posso mettere altri custom settings
    });
    axiosInstance.get('/users')
    .then(res => console.log(res));


// TIMEOUT
// tempo massimo che voglio aspettare in millisecondi
// se non ottengo risposta entro tempo definito,
// mi da errore
function getTodosWithTimeout() {
    axios
      .get(URL, { timeout: 5 })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }




  function setupRequestInterceptor() {
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        console.log(
          `Zio becco ${config.method.toUpperCase()} inviata a ${config.url}`
        );
        // Restituisci la configurazione della richiesta
        return config;
      },
      (error) => {
        // Gestione degli errori
        console.error('Errore nell\'interceptor di richiesta:', error);
        return Promise.reject(error);
      }
    );
    // Restituisci l'ID dell'interceptor per poterlo rimuovere successivamente se necessario
    return requestInterceptor;
  }
  
  
  // Funzione che esegue una chiamata Axios con l'interceptor
  function makeApiCall() {
    // Configura l'interceptor
    const interceptorId = setupRequestInterceptor();
  
    // Esegui la tua chiamata API
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
        console.log('Risposta ricevuta:', response.data);
      })
      .catch(error => {
        console.error('Errore nella risposta:', error);
      })
      .finally(() => {
        console.log("rimosso interceptor")
        // Rimuovi l'interceptor dopo che la chiamata è stata completata
        axios.interceptors.request.eject(interceptorId);
      });
  }
  
  // Chiamare la funzione che esegue la chiamata API con l'interceptor
  makeApiCall();


  function makeApiCall2() {
    // Configura l'interceptor
    const interceptorId = setupRequestInterceptor();
  
    // Esegui la tua chiamata API
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        console.log('Risposta ricevuta:', response.data);
      })
      .catch(error => {
        console.error('Errore nella risposta:', error);
      })

  }

  makeApiCall2()