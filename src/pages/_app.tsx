import Script from 'next/script';
import type { AppProps } from 'next/app'
import LayoutView from '@/components/Layout/LayoutView';
import { AuthProvider } from '@/context/AuthContext';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <AuthProvider>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous" strategy='lazyOnload'/>
      <LayoutView>
        <Component {...pageProps} />
      </LayoutView>
    </AuthProvider>
  );
}
