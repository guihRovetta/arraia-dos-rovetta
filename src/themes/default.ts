import {extendTheme} from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    white: 'white',
    black: 'black',
  },
  fonts: {
    heading: `'Bahiana', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  components: {
    Heading: {
      baseStyle: {
        color: 'white',
      },
    },
    Text: {
      baseStyle: {
        color: 'white',
        fontSize: 'lg',
        lineHeight: 0.75,
      },
    },
  },
});

export default theme;
