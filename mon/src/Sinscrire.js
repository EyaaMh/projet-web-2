import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Sinscrire.css'

function Sinscrire() {
  return (
    <>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
        <Form.Control type="email" placeholder="Enter Name" />
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
            valider l'inscrire
      </Button>
    </Form>
    </>
  );
}

export default Sinscrire;