import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Btn = styled.button`
  width: 15%;
  padding: 0.5rem 0;
  background-color: lightgreen;
  font-size: 1rem;
  border: 1px solid #000;
  border-radius: 5px;
  &:hover {
    background-color: green;
    color: #fff;
    border: 1px solid transparent;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
const Label = styled.label`
  color: #333;
`;
const UserName = styled.input`
  padding: 0.7rem;
  border: 1px solid #333;
  border-radius: 5px;
  font-size: 0.8rem;
  width: 300px;
`;

const Email = styled.input`
  padding: 0.7rem;
  border: 1px solid #333;
  border-radius: 5px;
  font-size: 0.8rem;
  width: 300px;
`;
const Password = styled.input`
  padding: 0.7rem;
  border: 1px solid #333;
  border-radius: 5px;
  font-size: 0.8rem;
  width: 300px;
`;
export default function Form() {
  // States for registration

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/user/register", user);
    console.log(user);
  };

  return (
    <div className="form">
      <StyledForm>
        <div>
          <Label className="label">User Name: </Label>
          <UserName
            onChange={(e) => handleChange(e)}
            className="input"
            name="username"
            type="text"
          />
        </div>

        <div>
          <Label className="label">Email: </Label>
          <Email
            onChange={(e) => handleChange(e)}
            className="input"
            name="email"
            type="email"
          />
        </div>
        <div>
          <Label className="label">Password: </Label>
          <Password
            onChange={(e) => handleChange(e)}
            className="input"
            name="password"
            type="password"
          />
        </div>

        <Btn onClick={handleSubmit} className="btn" type="submit">
          Submit
        </Btn>
      </StyledForm>
    </div>
  );
}
