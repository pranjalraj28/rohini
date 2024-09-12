// pages/index.js

import { Main } from 'next/document';
import Dashboard from '../components/Dashboard';
import MainPage from '../components/MainPage';

export default function Home() {
  return (
    <div>
      <MainPage /> 
    </div>
  );
}
