import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BackGroundImage from './background.png';
import Col from 'react-bootstrap/Col';
function LoginPart()
{
    return(
      
        <div style={{
            backgroundImage: 'url('+BackGroundImage+')',
            height:"100%"
          }}>
        <Card style={{ width: '18rem',marginLeft:"auto",marginRight:"auto",marginTop:"100px" }}>
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Sign In</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Card>

<Card style={{ width: '18rem',marginLeft:"auto",marginRight:"auto",marginTop:"100px" }}>
<Form>
<Form.Label>Sign Up</Form.Label>
 <Form.Row>
    <Form.Group as={Col} controlId="formGridFirstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="name" placeholder="First Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridLastName">
      <Form.Label>LastName</Form.Label>
      <Form.Control type="name" placeholder="Last Name" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>
 <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Card>
</div>

    );

}

export default LoginPart;