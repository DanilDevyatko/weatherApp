import React from 'react';
import { Main } from './pages/Main';
import { Week } from './pages/Week';
import { NoPage } from './pages/NoPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/week" element={<Week />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
