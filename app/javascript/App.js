import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { greetingSlice } from './redux/greetings/greetings';
import store from './redux/store';
import Greeting from './routes/Greetings';

store.dispatch(greetingSlice.endpoints.getGreetings.initiate());

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
