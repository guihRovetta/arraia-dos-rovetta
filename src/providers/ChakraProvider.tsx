import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';

import {ChakraProvider as ChakraUIProvider} from '@chakra-ui/react';
import theme from '@internal/themes/default';

export const ChakraProvider = ({children}: {children: React.ReactNode}) => (
  <ChakraUIProvider theme={theme}>{children}</ChakraUIProvider>
);
