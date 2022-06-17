import {Box, Center, HStack} from '@chakra-ui/react';
import Image from 'next/image';
import BonfireImg from 'public/assets/bonfire.png';
import TreeImg from 'public/assets/tree.png';

export const BottomSection = () => (
  <Box
    bg="blackAlpha.300"
    w="full"
    minH="72px"
    mt="-72px"
    borderTopRadius="full"
    position="relative"
  >
    <HStack
      w="full"
      justifyContent="space-around"
      position="absolute"
      top="-100px"
    >
      {Array(3)
        .fill('')
        ?.map((_, index) => (
          <Image
            key={index}
            width="100px"
            height="100px"
            src={TreeImg}
            alt="Árvore"
            style={{
              filter: 'opacity(30%)',
            }}
          />
        ))}
    </HStack>

    <Center mt="-328px" ml="-450px">
      <Image
        width="400px"
        height="400px"
        objectFit="contain"
        src={BonfireImg}
        alt="Fogueira"
        quality={100}
      />
    </Center>
  </Box>
);
