import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/** importing our pages */
import { Concerts }  from './concerts';
import { ConcertDetail } from './concertDetail';

export function Pages() {
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
