import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import 'regenerator-runtime/runtime';


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isAuthenticated = typeof window !== 'undefined' && window.sessionStorage.getItem('authenticated');

  useEffect(() => {
    if (router.pathname !== '/login' && !isAuthenticated) {
      router.push('/login');
    }
  }, [router.pathname, isAuthenticated]);

  return <Component {...pageProps} />;
}

export default MyApp;
