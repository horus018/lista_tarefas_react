import TaskList from '@/components/TaskList';
import Header from '@/components/Header';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <TaskList />
    </>
  );
};

export default HomePage;