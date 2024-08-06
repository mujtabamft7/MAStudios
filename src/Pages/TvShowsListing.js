import React, { useState, useEffect } from 'react';
import {
  Box, Image, Text, Heading, Grid, GridItem, Card, CardBody, Stack, Divider, CardFooter,
  ButtonGroup, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, Input
} from '@chakra-ui/react';
import { getAllTVShows } from '../Axios'; // Import Axios functions

const TvShowsListing = () => {
  const [tvShows, setTVShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getAllTVShows()
      .then(response => setTVShows(response.data.slice(0, 1000))) 
      .catch(error => console.error('Error fetching TV shows:', error));
  }, []);

  const handleViewDetails = (show) => {
    setSelectedShow(show);
    onOpen();
  };

  const filteredTVShows = tvShows.filter(show =>
    show.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box p="20px">
      <Heading as="h2" size="xl" mb="20px" color="orange" textAlign="center">All TV Shows</Heading>
      <Input
        placeholder="Search for a TV show..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ color: 'orange' }}
        mb="20px"
      />
      <Grid 
        templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)", xl: "repeat(6, 1fr)" }} 
        gap={6}
      >
        {filteredTVShows.map((show) => (
          <GridItem key={show.showId}>
            <Card maxW="sm" bg="grey" color="orange" boxShadow="lg" borderRadius="lg">
              <CardBody>
                <Image src={show.posterUrl} alt={show.title} borderRadius="lg" objectFit="cover" height="200px" width="100%" />
                <Stack mt="6" spacing="3">
                  <Heading size="md" textAlign="center">{show.title}</Heading>
                  <Text textAlign="center" color="black">Year: {show.year}</Text>
                  <Text textAlign="center" color="black">Rating: {show.rating}</Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter justifyContent="center">
                <ButtonGroup spacing="2">
                  <Button variant="solid" colorScheme="orange" boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)" onClick={() => handleViewDetails(show)}>
                    View Details
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </GridItem>
        ))}
      </Grid>

      {selectedShow && (
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedShow.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image src={selectedShow.posterUrl} alt={selectedShow.title} borderRadius="lg" objectFit="cover" height="400px" width="100%" />
              <Text mt="4">{selectedShow.plot}</Text>
              <Text mt="4" color="black" fontSize="md">Genre: {selectedShow.genres.join(', ')}</Text>
              <Text mt="4" color="black" fontSize="md">Year: {selectedShow.year}</Text>
              <Text mt="4" color="black" fontSize="md">Rating: {selectedShow.rating}</Text>
              <Text mt="4" color="black" fontSize="md">Rent: ${selectedShow.rent}</Text>
              <Text mt="4" color="black" fontSize="md">Buy: ${selectedShow.buy}</Text>
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

export default TvShowsListing;
