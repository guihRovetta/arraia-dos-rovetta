import {Text, TextProps, VStack} from '@chakra-ui/react';
import {LongText} from '@internal/components/common';
import {ContentBox} from '@internal/components/template';
import HotDogImg from 'public/assets/hot-dog.png';

const Title = (props: TextProps) => (
  <Text fontWeight={700} fontSize="2xl" mb={1} {...props} />
);

export const FoodsAndDrinksSection = () => (
  <ContentBox
    _vStackProps={{bg: 'blue.600', spacing: 10}}
    _imageProps={{
      src: HotDogImg,
    }}
  >
    <VStack spacing={4}>
      <Title>Comidas</Title>
      <Text>Bolinho Caipira</Text>
      <Text>Cachorrinho Quente</Text>
      <Text>Pastelzinho</Text>
      <Text>Pipoca</Text>
      <Text>Docinhos Variados</Text>
      <Text>Arroz Doce</Text>
      <Text>Bolo de Fubá</Text>
    </VStack>

    <VStack spacing={4}>
      <Title>Bebidas</Title>
      <Text>Refrigerante</Text>
      <Text>Quentão</Text>
      <Text>Vinho Quente</Text>
      <Text>Chocolate Quente</Text>
    </VStack>

    <VStack spacing={4}>
      <Title>Atrações</Title>
      <Text>Músicas</Text>
      <LongText textAlign="center">
        Bingo com premiações (doação de prendas <strong>opcional</strong>)
      </LongText>
    </VStack>
  </ContentBox>
);
