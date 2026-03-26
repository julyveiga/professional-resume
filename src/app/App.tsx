import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { AppLanguageProvider } from './context/AppLanguageContext';
import RecentProjectCoEPage from './pages/RecentProjectCoEPage';
import ResumeClassicPage from './pages/ResumeClassicPage';
import ResumeModernPage from './pages/ResumeModernPage';

const basename =
  import.meta.env.BASE_URL.replace(/\/$/, '') === ''
    ? '/'
    : import.meta.env.BASE_URL.replace(/\/$/, '');

function App() {
  return (
    <BrowserRouter basename={basename === '/' ? undefined : basename}>
      <AppLanguageProvider>
        <Routes>
          <Route path="/" element={<ResumeModernPage />} />
          <Route path="/classica" element={<ResumeClassicPage />} />
          <Route path="/projetos/coe-global" element={<RecentProjectCoEPage />} />
          <Route path="/nova" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppLanguageProvider>
    </BrowserRouter>
  );
}

export default App;
