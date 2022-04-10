import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from './Firebase.init';
import { useEffect } from 'react';

const auth = getAuth(app)

function App() {

  const [emailid, setEmailid] = useEffect('');
  const [pass, setPass] = useEffect('');
  const email = (e) => {
    setEmailid(e.target.value)
  }

  const password = (e) => {
    setPass(e.target.value)
  }
  const submit = (e) => {

    createUserWithEmailAndPassword(auth, emailid, pass)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(error => {
        console.error(error)
      })

    e.preventDefault();
  }
  return (
    <div >
      <div className="regestration w-50 mx-auto mt-5">
        <h2 className='text-success'>Please register!!</h2>
        <Form onSubmit={submit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={email} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={password} type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>

    </div>
  );
}

export default App;
