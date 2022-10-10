import axios from "axios"


const App = () => {

  axios.get('http://localhost:3001').then(response => {
    console.log(response);
}).catch(e => {
    console.log(e);
});

  return (
    <div>
        
    </div>
  )
}

export default App