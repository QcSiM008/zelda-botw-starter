import React from 'react';
import { ReactComponent as Triforce } from '../assets/triforce.svg';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  const handleCLick = () => history.push('/menu');

  return (
    <h1
      className="flex items-center font-bold text-5xl tracking-tight text-gray-900 home-title"
      onClick={handleCLick}
    >
      Zelda BOTW Starter
      <Triforce className="ml-4 w-20 h-20 text-zelda-yellow fill-current" />
    </h1>
  );
};

export default Home;
