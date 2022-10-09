import React from 'react'

import { HashRouter,Routes,Route } from 'react-router-dom';

import HomePage from '../modules/home/components/HomePage';
import QuizPage from '../modules/quiz/client/components/QuizPage';

const AppRouter = () => {
  return (
    <HashRouter>
        <Routes>
            <Route path="/quiz/abc-quiz" element={<HomePage />} />
            <Route path="/" element={<QuizPage />} />
        </Routes>
    </HashRouter>
  )
}

export default AppRouter