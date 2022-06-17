import {ChakraProvider} from './ChakraProvider';
import {NextSeoProvider} from './NextSeoProvider';

export const Providers = ({children}: {children: React.ReactNode}) => (
  <>
    <ChakraProvider>
      <NextSeoProvider />
      {children}
    </ChakraProvider>
  </>
);
