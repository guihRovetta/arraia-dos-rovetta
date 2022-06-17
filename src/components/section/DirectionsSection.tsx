import {AspectRatio, Box, Heading, Link, Text, VStack} from '@chakra-ui/react';
import {LongText} from '@internal/components/common';
import {ContentBox} from '@internal/components/template';
import CornImg from 'public/assets/corn.png';

export const DirectionsSection = () => (
  <VStack zIndex={1}>
    <ContentBox
      _vStackProps={{
        bg: 'yellow.700',
        borderRadius: 0,
        bgImage:
          'https://images.unsplash.com/photo-1555505019-8c3f1c4aba5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        bgBlendMode: 'multiply',
        bgRepeat: 'repeat',
        bgSize: 'cover',
      }}
      _imageProps={{
        src: CornImg,
      }}
    >
      <Heading fontSize="5xl" as="h2" lineHeight={0.75}>
        Roça do vô
      </Heading>

      <VStack spacing={4}>
        <LongText textAlign="center">Estrada Vera Cruz, 490</LongText>

        <Text>Final da estrada</Text>

        <LongText textAlign="center">São José dos Campos / SP</LongText>

        <Link
          href="https://goo.gl/maps/aW6UfmiBdGfx4Ed69"
          isExternal
          fontSize="lg"
          color="white"
          fontWeight={700}
          textAlign="center"
          lineHeight={1.25}
        >
          Clique aqui para abrir o Maps
        </Link>

        <AspectRatio
          maxW="500"
          w="full"
          ratio={1}
          borderWidth="1px"
          borderColor="blackAlpha.100"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7342.111096478161!2d-45.88431903908994!3d-23.058424999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2d4a0294e787f2c2!2zMjPCsDAzJzMwLjMiUyA0NcKwNTInNTAuNiJX!5e0!3m2!1spt-BR!2sbr!4v1655060182611!5m2!1spt-BR!2sbr"
            loading="lazy"
          />
        </AspectRatio>
      </VStack>
    </ContentBox>

    <Box
      bg="yellow.700"
      h="100px"
      w={16}
      mt="0px !important"
      bgImage="https://images.unsplash.com/photo-1555505019-8c3f1c4aba5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
      bgBlendMode="multiply"
      bgRepeat="repeat"
      bgSize="cover"
      borderLeftWidth="2px"
      borderRightWidth="2px"
      borderColor="whiteAlpha.300"
    />
  </VStack>
);
