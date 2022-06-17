import {Providers} from '@internal/providers';
import type {AppProps} from 'next/app';

function App({Component, pageProps}: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}

export default App;
