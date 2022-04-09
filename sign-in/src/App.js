import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAuth } from "firebase/auth";
import app from './Firebase.init';

const auth = getAuth(app)

function App() {
  const email = (e) => {
    console.log(e.target.value)
  }

  const password = (e) => {
    console.log(e.target.value)
  }
  const submit = (e) => {
    console.log('submitted')
    e.preventDefault();
  }
  return (
    <div className="App">
      <form onSubmit={submit}>
        <input onChange={email} type="email" name="" id="" /><br />
        <input onChange={password} type="password" name="" id="" /><br />
        <input type="submit" value="login" />
      </form>

    </div>
  );
}

export default App;
