import {Text, VStack} from '@chakra-ui/react';
import {ContentBox} from '@internal/components/template';
import HotDogImg from 'public/assets/hot-dog.png';

const FOODS = {
  title: 'Comidas',
  list: [
    'Bolinho Caipira',
    'Pastelzinho de frango',
    'Cachorrinho quente',
    'Docinhos',
  ],
};

const DRINKS = {
  title: 'Bebidas',
  list: ['Água', 'Refrigerante', 'Quentão'],
};

const ACTIVITIES = {
  title: 'Atividades',
  list: ['Música', 'Bingo com premiações (grátis)'],
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
