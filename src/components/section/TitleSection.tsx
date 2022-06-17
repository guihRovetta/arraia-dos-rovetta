import {VStack, HStack, Box, Heading, Center} from '@chakra-ui/react';

export const TitleSection = () => (
  <VStack spacing={8} w="full">
    <VStack spacing={4} w="full">
      <HStack spacing={2}>
        <Box h={1} w={12} bg="white" as="hr" />

        <Heading fontSize="5xl" as="h1" lineHeight={0.75} minW="150px">
          Arraiá dos
        </Heading>

        <Box h={1} w={12} bg="white" as="hr" />
      </HStack>

      <Center bg="red.500" py={6} w="full">
        <Heading color="white" fontSize="9xl" as="h1" lineHeight={0.75}>
          Rovetta
        </Heading>
      </Center>
    </VStack>

    <VStack spacing={4}>
      <Heading fontSize="6xl" as="h2" lineHeight={0.75}>
        9 de Julho
      </Heading>
      <Heading fontSize="5xl" as="h2" lineHeight={0.75}>
        das 14:00 às 19:00
      </Heading>
    </VStack>
  </VStack>
);
