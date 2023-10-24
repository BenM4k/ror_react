import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllGreetings } from '../redux/greetings/greetings';

const Greeting = () => {
  const greeting = useSelector(selectAllGreetings);
  return (
    <>
      <h1>Greetings page</h1>
      <h1>{greeting[0]?.content}</h1>
    </>
  );
};

export default Greeting;
