import React, { useState } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Toast from "react-bootstrap/Toast";
import Container from "react-bootstrap/Container";
import UserForm from "./FormReview";
import "./App.css";

const ReviewCapsule = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <Toast show={show} onClose={() => toggleShow(!show)}>
      <Toast.Header>
        <strong className="mr-auto">Review-Capsule</strong>
      </Toast.Header>
      <Toast.Body>{children}</Toast.Body>
    </Toast>
  );
};

const App = () => (
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Sent review</h1>
      <ReviewCapsule>
        <div>
          <UserForm />
        </div>
        
        
     </ReviewCapsule>
    </Jumbotron>
  </Container>
);

export default App;
