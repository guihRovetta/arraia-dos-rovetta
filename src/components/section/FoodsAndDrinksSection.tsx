import {Text, VStack} from '@chakra-ui/react';
import {ContentBox} from '@internal/components/template';
import HotDogImg from 'public/assets/hot-dog.png';

const FOODS = {
  title: 'Comidas',
  list: [
    'Bolinho Caipira',
    'Cachorrinho Quente',
    'Pastelzinho',
    'Pipoca',
    'Docinhos Variados',
    'Bolo de Fubá',
    'Caldinho',
  ],
};

const DRINKS = {
  title: 'Bebidas',
  list: ['Refrigerante', 'Suco', 'Chocolate Quente', 'Quentão'],
};

const ACTIVITIES = {
  title: 'Atividades',
  list: [
    'Música',
    'Atividades Infantis',
    'Bingo com premiações (aprox. 15:30)',
  ],
};

const LIST = [FOODS, DRINKS, ACTIVITIES];

export const FoodsAndDrinksSection = () => (
  <ContentBox
    _vStackProps={{bg: 'green.400', spacing: 10}}
    _imageProps={{
      src: HotDogImg,
      alt: 'Cachorro-Quente',
    }}
  >
    {LIST?.map((item, index) => (
      <VStack key={`item-${index}`} spacing={4}>
        <Text
          fontWeight={700}
          fontSize="2xl"
          textTransform="uppercase"
          letterSpacing="3px"
        >
          {item?.title}
        </Text>
        <VStack>
          {item?.list?.map((element, elementIndex) => (
            <Text
              key={`element-${index}}-${elementIndex}`}
              lineHeight="21px"
              textAlign="center"
            >
              {element}
            </Text>
          ))}
        </VStack>
      </VStack>
    ))}
  </ContentBox>
);
