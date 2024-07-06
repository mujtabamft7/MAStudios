// src/Pages/RegistrationPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, FormControl, FormLabel, Input, Button, Text, Stack } from '@chakra-ui/react';

const RegistrationPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!firstName) validationErrors.firstName = 'First name is required';
    if (!lastName) validationErrors.lastName = 'Last name is required';
    if (!email) validationErrors.email = 'Email is required';
    if (!password) validationErrors.password = 'Password is required';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setErrors({});
      alert('Sign up complete! Redirecting you to the sign in page.');
      navigate('/login');
    }
  };

  return (
    <Box bg="darkgray" color="white" minH="100vh" display="flex" justifyContent="center" alignItems="center">
      <Box bg="white" color="gray.800" p={6} rounded="md" width={{ base: "90%", md: "400px" }}>
        <Text fontSize="2xl" mb={4} textAlign="center">Create a New Account</Text>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="first-name" isInvalid={errors.firstName}>
              <FormLabel>First Name</FormLabel>
              <Input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              {errors.firstName && <Text color="red.500">{errors.firstName}</Text>}
            </FormControl>
            <FormControl id="last-name" isInvalid={errors.lastName}>
              <FormLabel>Last Name</FormLabel>
              <Input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              {errors.lastName && <Text color="red.500">{errors.lastName}</Text>}
            </FormControl>
            <FormControl id="email" isInvalid={errors.email}>
              <FormLabel>Email</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              {errors.email && <Text color="red.500">{errors.email}</Text>}
            </FormControl>
            <FormControl id="password" isInvalid={errors.password}>
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              {errors.password && <Text color="red.500">{errors.password}</Text>}
            </FormControl>
          </Stack>
          <Button colorScheme="orange" width="100%" mt={4} type="submit">Sign Up</Button>
        </form>
      </Box>
    </Box>
  );
};

export default RegistrationPage;
