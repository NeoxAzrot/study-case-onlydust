import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import '@/styles/main.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
