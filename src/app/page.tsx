// Home Component
"use client"
import React, { useState } from 'react';
import MainPage from './components/MainPage';
import CardOne from './components/CardOne';
import CardTwo from './components/CardTwo';
import ETHSingaporeCard from './components/CardOne-2023/ETHSingaporeCard';
import ETHDenverCard from './components/CardOne-2023/ETHDenverCard';
import ETHCC from './components/CardOne-2023/ETHCC';
import ETHLondon from './components/CardTwo-2024/ETHLondon';
import ETHSydney from './components/CardTwo-2024/ETHSydney';
import ETHTaipei from './components/CardTwo-2024/ETHTaipei';

const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'MainPage' | 'CardOne' | 'CardTwo' | 'ETHSingaporeCard' | 'ETHDenverCard'| 'ETHCC' | 'ETHLondon'|  'ETHSydney' | 'ETHTaipei'>('MainPage');

  const onNavigate = (page: 'MainPage' | 'CardOne' | 'CardTwo' | 'ETHSingaporeCard' | 'ETHDenverCard'| 'ETHCC' | 'ETHLondon'|  'ETHSydney' | 'ETHTaipei') => {
    setCurrentPage(page);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <main>
      
        {currentPage === 'MainPage' && (
          <MainPage onNavigate={onNavigate} />
        )}
        {currentPage === 'CardOne' && (
          <CardOne onNavigate={onNavigate} />
        )}
        {currentPage === 'CardTwo' && (
          <CardTwo onNavigate={onNavigate} />
        )}
        {currentPage === 'ETHSingaporeCard' && (
          <ETHSingaporeCard onNavigate={onNavigate} />
        )}
        {currentPage === 'ETHDenverCard' && (
          <ETHDenverCard onNavigate={onNavigate} />
        )}
        {currentPage === 'ETHCC' && (
          <ETHCC onNavigate={onNavigate} />
        )}
        {currentPage === 'ETHLondon' && (
          <ETHLondon onNavigate={onNavigate} />
        )}
        {currentPage === 'ETHSydney' && (
          <ETHSydney onNavigate={onNavigate} />
        )}
        {currentPage === 'ETHTaipei' && (
          <ETHTaipei onNavigate={onNavigate} />
        )}
      </main>
    </div>
  );
};

export default Home;
