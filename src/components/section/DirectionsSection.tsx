import {Box, Heading, Link, Text, VStack} from '@chakra-ui/react';
import {useGeolocated} from 'react-geolocated';

import {LongText} from '@internal/components/common';
import {ContentBox} from '@internal/components/template';
import CornImg from 'public/assets/corn.png';

const DEFAULT_LOCATION_LINK = 'https://goo.gl/maps/aW6UfmiBdGfx4Ed69';

export const DirectionsSection = () => {
  const {coords} = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

  return (
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
          alt: 'Milhos',
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
            href={
              coords
                ? `https://www.google.com.br/maps/dir/${coords?.latitude},${coords.longitude}/-23.0584167,-45.8807222`
                : DEFAULT_LOCATION_LINK
            }
            isExternal
            fontSize="lg"
            color="white"
            fontWeight={800}
            textAlign="center"
            textTransform="uppercase"
            textDecoration="underline"
            lineHeight={1.25}
          >
            Clique aqui para abrir o Maps
          </Link>
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
};
