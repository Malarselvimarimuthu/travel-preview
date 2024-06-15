import React, { useState } from 'react';
import styled from 'styled-components';

const BackgroundImage = styled.div`
  background: url('https://cdn.pixabay.com/photo/2017/03/05/00/34/panorama-2117310_1280.jpg');
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 25rem;
  padding: 2.5rem;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 0.625rem;
  backdrop-filter:blur(3px);
`;

const Title = styled.h2`
  margin: 0 0 1.875rem;
  padding: 0;
  color: black;
  text-align: center;
`;

const InputBox = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.625rem 0;
  font-size: 1rem;
  color: black;
  letter-spacing: 0.062rem;
  margin-bottom: 1.875rem;
  border: none;
  border-bottom: 0.065rem solid #fff;
  outline: none;
  background: transparent;

  &:focus ~ label,
  &:valid ~ label,
  &:not([value=""]) ~ label {
    top: -1.125rem;
    left: 0;
    color: #03a9f4;
    font-size: 0.75rem;
  }
`;

const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.625rem 0;
  font-size: 1rem;
  color: black;
  pointer-events: none;
  transition: 0.5s;
`;

const SubmitButton = styled.input`
  border: none;
  outline: none;
  color: #fff;
  background-color: #03a9f4;
  padding: 0.625rem 1.25rem;
  cursor: pointer;
  border-radius: 0.312rem;
  font-size: 1rem;

  &:hover {
    background-color: #1cb1f5;
  }
`;

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted with:', formData);
    // Add your form submission logic here
  };

  return (
    <BackgroundImage>
      <Box>
        <Title>Login</Title>
        <form onSubmit={handleSubmit}>
          <InputBox>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Label>Email Address</Label>
          </InputBox>
          <InputBox>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            />
            <Label>Password</Label>
          </InputBox>
          <SubmitButton type="submit" value="Sign In" />
        </form>
      </Box>
    </BackgroundImage>
  );
};

export default LoginForm;
