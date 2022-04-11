import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import app from './Firebase.init';
import { useEffect, useState } from 'react';

const auth = getAuth(app)

function App() {

  const [emailid, setEmailid] = useState('');
  const [registered, setRegistered] = useState(false);
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [validated, setValidated] = useState(false);
  const email = (e) => {
    setEmailid(e.target.value)
  }

  const password = (e) => {
    setPass(e.target.value)
  }
  const submit = (event) => {

    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {

      event.stopPropagation();
      return;
    }


    if (!/(?=.*[a-zA-Z >>!#$%&? "<<])[a-zA-Z0-9 >>!#$%&?<< ]/.test(pass)) {
      setError('password should contain 1 charecter');
      return
    }

    setValidated(true);
    setError('');


    if (registered) {
      console.log(emailid, pass)
      signInWithEmailAndPassword(auth, emailid, pass)
        .then(result => {
          const user = result.user;
          console.log(user);
        })

        .catch(error => {
          console.error(error)
          setError(error.message)
        })
    }
    else {

      createUserWithEmailAndPassword(auth, emailid, pass)
        .then(result => {
          const user = result.user;
          console.log(user)
          setEmailid('')
          setPass('')
          sendEmailVerification(auth.currentUser)
            .then(() => {
              console.log('email verified')
            })
        })
        .catch(error => {
          console.error(error)
          setError(error.message)
        })

    }



    event.preventDefault();
  }

  const handleregistered = (e) => {
    setRegistered(e.target.checked)
  }


  return (
    <div >
      <div className="regestration w-50 mx-auto mt-5">
        <h2 className='text-success'>Please {registered ? 'Login' : 'Registered'}!!</h2>
        <Form noValidate validated={validated} onSubmit={submit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={email} type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              Please choose a email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={password} type="password" placeholder="Password" required />
            <Form.Control.Feedback type="invalid">
              Please choose a password.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check onChange={handleregistered} type="checkbox" label="Already Registered?" />
          </Form.Group>
          <p className='text-danger'>{error}</p>
          <Button variant="primary" type="submit">
            {registered ? 'Login' : 'Registered'}
          </Button>
        </Form>
      </div>

    </div>
  );
}

export default App;
