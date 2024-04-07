// pages/_app.tsx

import LayoutView from '@/components/Layout/LayoutView';
import { AuthProvider } from '@/context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <AuthProvider>
      <LayoutView>
        <Component {...pageProps} />
      </LayoutView>
    </AuthProvider>
  )
}
