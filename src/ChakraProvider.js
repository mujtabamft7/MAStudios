import { ChakraProvider } from '@chakra-ui/react';

const ChakraProviderWrapper = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

export default ChakraProviderWrapper;
