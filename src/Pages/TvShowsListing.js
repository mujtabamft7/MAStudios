import React, { useState, useEffect } from 'react';
import { Box, Image, Text, Heading, Grid, GridItem, Card, CardBody, Stack, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react';

const TvShowsListing = () => {
  const [tvShows, setTVShows] = useState([]);
  const [expandedShowId, setExpandedShowId] = useState(null);

  useEffect(() => {
    fetch('https://json-server-render-j2c0.onrender.com/tvShows')
      .then(response => response.json())
      .then(data => setTVShows(data.slice(0, 102))) 
      .catch(error => console.error('Error fetching TV shows:', error));
  }, []);

  const toggleExpand = (showId) => {
    setExpandedShowId(expandedShowId === showId ? null : showId);
  };

  return (
    <Box p="20px">
      <Heading as="h2" size="xl" mb="20px" color="orange" textAlign="center">All TV Shows</Heading>
      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)", xl: "repeat(6, 1fr)" }} gap={6}>
        {tvShows.map((show) => (
          <GridItem key={show.id}>
            <Card maxW="sm" bg="grey" color="orange" boxShadow="lg" borderRadius="lg">
              <CardBody>
                <Image src={show.posterUrl} alt={show.title} borderRadius="lg" objectFit="cover" height="200px" width="100%" />
                <Stack mt="6" spacing="3">
                  <Heading size="md" textAlign="center">{show.title}</Heading>
                  <Text textAlign="center" color="black">Year: {show.year}</Text>
                  <Text textAlign="center" color="black">Rating: {show.rating}</Text>
                </Stack>
                {expandedShowId === show.id && (
                  <Stack mt="6" spacing="3">
                    <Text>{show.plot}</Text>
                    <Text color="black" fontSize="md">Genre: {show.genres.join(', ')}</Text>
                  </Stack>
                )}
              </CardBody>
              <Divider />
              <CardFooter justifyContent="center">
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="orange" boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)" onClick={() => toggleExpand(show.id)}>
                    {expandedShowId === show.id ? 'Hide Details' : 'View Details'}
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

export default TvShowsListing;
