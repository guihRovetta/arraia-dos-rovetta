import {VStack, HStack, Box, Heading, Center} from '@chakra-ui/react';

export const TitleSection = () => (
  <VStack spacing={8} w="full">
    <VStack spacing={4} w="full">
      <HStack spacing={2}>
        <Box h={1} w={12} bg="white" as="hr" />

        <Heading
          fontSize="5xl"
          as="h1"
          lineHeight={0.75}
          minW="160px"
          textAlign="center"
        >
          Arraiá dos
        </Heading>

        <Box h={1} w={12} bg="white" as="hr" />
      </HStack>

      <Center bg="red.500" py={6} w="full" borderRadius="full">
        <Heading
          color="white"
          fontSize={{base: '8xl', sm: '9xl'}}
          as="h1"
          lineHeight={0.75}
        >
          Rovetta
        </Heading>
      </Center>
    </VStack>

    <VStack spacing={6}>
      <HStack spacing={2}>
        <Box h={1} w={6} bg="white" as="hr" />

        <Heading fontSize="6xl" as="h2" lineHeight={0.75}>
          26 de Julho
        </Heading>

        <Box h={1} w={6} bg="white" as="hr" />
      </HStack>

      <Heading fontSize="5xl" as="h2" lineHeight={1} textAlign="center">
        13h às 18h
      </Heading>
    </VStack>
  </VStack>
);
