import logo from './logo.svg';
import './App.css';
import { getAuth } from "firebase/auth";
import app from './Firebase.init';

const auth = getAuth(app)

function App() {
  const email = () => {

  }
  return (
    <div className="App">
      <form>
        <input onChange={email} type="email" name="" id="" />
        <input type="password" name="" id="" />
      </form>

    </div>
  );
}

export default App;
