import "./styles.css";
import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/users')
.then((res) => {
  console.log(res.data);
})


export default function App() {
  return (
    <div className="App">
      <h1>Hello Axios</h1>
    </div>
  );
}
