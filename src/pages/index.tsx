import {Center, VStack} from '@chakra-ui/react';
import {
  AdditionalInfoSection,
  BottomSection,
  DirectionsSection,
  FoodsAndDrinksSection,
  TitleSection,
  FlagsSection,
} from '@internal/components/section';
import type {NextPage} from 'next';

const Home: NextPage = () => {
  return (
    <Center
      minH="100vh"
      bg="purple.900"
      flexDirection="column"
      pt={8}
      bgImage="https://www.papeldeparedestar.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/t/star_design_245264.jpg"
      bgBlendMode="multiply"
      bgRepeat="repeat"
    >
      <FlagsSection top={2} />
      <FlagsSection top="8%" />
      <FlagsSection top="24%" />
      <FlagsSection top="57%" />
      <FlagsSection top="72%" />

      <VStack
        spacing={16}
        alignItems="center"
        justifyContent="center"
        maxW="500px"
        w="full"
        px={8}
        pt={10}
        zIndex={1}
      >
        <TitleSection />

        <FoodsAndDrinksSection />

        <AdditionalInfoSection />

        <DirectionsSection />
      </VStack>

      <BottomSection />
    </Center>
  );
};

export default Home;
