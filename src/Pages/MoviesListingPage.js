import React, { useState, useEffect } from 'react';
import {
  Box, Image, Text, Heading, Grid, GridItem, Card, CardBody, Stack, Divider, CardFooter,
  ButtonGroup, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, Input
} from '@chakra-ui/react';
import { getAllMovies } from '../Axios'; // Import Axios functions

const MoviesListingPage = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getAllMovies()
      .then(response => setMovies(response.data.slice(0, 1000))) 
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  const handleViewDetails = (movie) => {
    setSelectedMovie(movie);
    onOpen();
  };

 

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box p="20px">
      <Heading as="h2" size="xl" mb="20px" color="orange" textAlign="center">All Movies</Heading>
      <Input
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ color: 'orange' }} 
        mb="20px"
      />
      
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)", xl: "repeat(6, 1fr)" }} gap={6}>
        {filteredMovies.map((movie) => (
          <GridItem key={movie.movieId}>
            <Card maxW="sm" bg="grey" color="orange" boxShadow="lg" borderRadius="lg">
              <CardBody>
                <Image src={movie.posterUrl} alt={movie.title} borderRadius="lg" objectFit="cover" height="200px" width="100%" />
                <Stack mt="6" spacing="3">
                  <Heading size="md" textAlign="center">{movie.title}</Heading>
                  <Text textAlign="center" color="black">Year: {movie.year}</Text>
                  <Text textAlign="center" color="black">Rating: {movie.rating}</Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter justifyContent="center">
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="orange" boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)" onClick={() => handleViewDetails(movie)}>
                    View Details
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </GridItem>
        ))}
      </Grid>

      {selectedMovie && (
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedMovie.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image src={selectedMovie.posterUrl} alt={selectedMovie.title} borderRadius="lg" objectFit="cover" height="400px" width="100%" />
              <Text mt="4">{selectedMovie.plot}</Text>
              <Text mt="4" color="black" fontSize="md">Genre: {selectedMovie.genres.join(', ')}</Text>
              <Text mt="4" color="black" fontSize="md">Year: {selectedMovie.year}</Text>
              <Text mt="4" color="black" fontSize="md">Rating: {selectedMovie.rating}</Text>
              <Text mt="4" color="black" fontSize="md">Rent: ${selectedMovie.rent}</Text>
              <Text mt="4" color="black" fontSize="md">Buy: ${selectedMovie.buy}</Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="orange" mr="3" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default MoviesListingPage;
