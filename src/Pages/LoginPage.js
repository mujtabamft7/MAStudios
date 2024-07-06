// src/Pages/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, FormControl, FormLabel, Input, Button, Text, Link } from '@chakra-ui/react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!email) validationErrors.email = 'Email is required';
    if (!password) validationErrors.password = 'Password is required';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setEmail('');
      setPassword('');
      setErrors({});
      alert('You are signed in! Redirecting you to the home page.');
      navigate('/');
    }
  };

  return (
    <Box bg="darkgray" color="white" minH="100vh" display="flex" justifyContent="center" alignItems="center">
      <Box bg="white" color="gray.800" p={6} rounded="md" width={{ base: "90%", md: "400px" }}>
        <Text fontSize="2xl" mb={4} textAlign="center">Sign In</Text>
        <form onSubmit={handleSubmit}>
          <FormControl id="email" mb={4} isInvalid={errors.email}>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <Text color="red.500">{errors.email}</Text>}
          </FormControl>
          <FormControl id="password" mb={4} isInvalid={errors.password}>
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {errors.password && <Text color="red.500">{errors.password}</Text>}
          </FormControl>
          <Button colorScheme="orange" width="100%" mb={4} type="submit">Sign In</Button>
          <Link href="#" color="orange.500" textAlign="center" display="block" mb={4}>Forgot your password?</Link>
          <Text textAlign="center">Or</Text>
          <Button width="100%" mt={4} bg="blue.800" color="white">Sign in with Facebook</Button>
          <Button width="100%" mt={2} bg="gray.800" color="white">Sign in with Google</Button>
        </form>
      </Box>
    </Box>
  );
};

export default LoginPage;
