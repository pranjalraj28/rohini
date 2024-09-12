// pages/logout.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    window.sessionStorage.removeItem('authenticated');
    router.push('/login');
  }, []);

  return <p>Logging out...</p>;
};

export default Logout;
