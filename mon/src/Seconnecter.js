import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './seconnect.css'
function Seconnecter() {
return(
  <div className='aaa'>
        <Form >
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
            
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

        </div>
      );
  
}

export default Seconnecter