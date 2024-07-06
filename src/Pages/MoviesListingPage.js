import React, { useState, useEffect } from 'react';
import { Box, Image, Text, Heading, Grid, GridItem, Card, CardBody, Stack, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react';

const MoviesListingPage = () => {
  const [movies, setMovies] = useState([]);
  const [expandedMovieId, setExpandedMovieId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5001/movies')
      .then(response => response.json())
      .then(data => setMovies(data.slice(0, 102))) 
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  const toggleExpand = (movieId) => {
    setExpandedMovieId(expandedMovieId === movieId ? null : movieId);
  };

  return (
    <Box p="20px">
      <Heading as="h2" size="xl" mb="20px" color="orange" textAlign="center">All Movies</Heading>
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)", xl: "repeat(6, 1fr)" }} gap={6}>
        {movies.map((movie) => (
          <GridItem key={movie.id}>
            <Card maxW="sm" bg="grey" color="orange" boxShadow="lg" borderRadius="lg">
              <CardBody>
                <Image src={movie.posterUrl} alt={movie.title} borderRadius="lg" objectFit="cover" height="200px" width="100%" />
                <Stack mt="6" spacing="3">
                  <Heading size="md" textAlign="center">{movie.title}</Heading>
                  <Text textAlign="center"color="black">Year: {movie.year}</Text>
                  <Text textAlign="center"color="black">Rating: {movie.rating}</Text>
                </Stack>
                {expandedMovieId === movie.id && (
                  <Stack mt="6" spacing="3">
                    <Text>{movie.plot}</Text>
                    <Text color="black" fontSize="md">Genre: {movie.genres.join(', ')}</Text>
                  </Stack>
                )}
              </CardBody>
              <Divider />
              <CardFooter justifyContent="center">
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="orange" boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)" onClick={() => toggleExpand(movie.id)}>
                    {expandedMovieId === movie.id ? 'Hide Details' : 'View Details'}
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default MoviesListingPage;
