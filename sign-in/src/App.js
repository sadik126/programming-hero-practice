import logo from './logo.svg';
import './App.css';
import { getAuth } from "firebase/auth";
import app from './Firebase.init';

const auth = getAuth(app)

function App() {
  return (
    <div className="App">
      <form>
        <input type="text" name="" id="" />
        <input type="password" name="" id="" />
      </form>

    </div>
  );
}

export default App;
