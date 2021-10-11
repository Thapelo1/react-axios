import "./styles.css";
import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/users')
.then((res) => {
  console.log(res.data);
})


export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
