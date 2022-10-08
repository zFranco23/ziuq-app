import React from 'react'

import { HashRouter,Routes,Route } from 'react-router-dom';

import HomePage from '../modules/home/components/HomePage';

const AppRouter = () => {
  return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    </HashRouter>
  )
}

export default AppRouter