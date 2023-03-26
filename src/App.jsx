import React from 'react';
import Button from './components/Button/Button';
import Card from './components/Card/card';
import Header from './components/header/header';

const App = () => {
  return (
    <div>
      <Header />
      <Button>sort by date</Button>
      <Card></Card>
      <Button>see more</Button>
    </div>
  );
};

export default App;