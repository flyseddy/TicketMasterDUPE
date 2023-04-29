import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/** importing our pages */
import { Concerts }  from './concerts';
import { ConcertDetail } from './concertDetail';
import Login from './components/Login/Login';
import useToken from './useToken';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

export function Pages() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Concerts />} path="/" />
        <Route path="concertDetail">
            <Route element={<ConcertDetail />} path=":id" />
            <Route path='edit'>
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
