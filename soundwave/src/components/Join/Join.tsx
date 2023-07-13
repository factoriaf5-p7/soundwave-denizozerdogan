import { useState } from "react";
import { Container, Form, Header } from "semantic-ui-react";
import { ButtonJoin } from "../../Atoms/Buttons/ButtonJoin";
import "./Join.css";

export const Join = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleJoin = () => {};

  return (
    <Container id="join-page">
      <Header as="h2" id="header-styling">
        Join the <span>fun.</span>
      </Header>

      <Form id="form-styling">
        <Form.Field className="form-field">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Field>

        <Form.Field className="form-field">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Field>

        <Form.Field className="form-field">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Field>

        <ButtonJoin onClick={handleJoin} />
      </Form>
      <Container className="circle-container">
        <div className="circleJoin circle4"></div>
        <div className="circleJoin circle5"></div>
      </Container>
    </Container>
  );
};
