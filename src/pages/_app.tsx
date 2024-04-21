// pages/_app.tsx

import LayoutView from '@/components/Layout/LayoutView';
import { AuthProvider } from '@/context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

// import { Tooltip, Toast, Popover } from 'bootstrap/dist/js/bootstrap.bundle';

import type { AppProps } from 'next/app'
import { Dropdown } from 'react-bootstrap';
export default function App({ Component, pageProps }: AppProps) {

  return (
    <AuthProvider>
  
      <LayoutView>
        <Component {...pageProps} />
      </LayoutView>
    </AuthProvider>
  )
}
