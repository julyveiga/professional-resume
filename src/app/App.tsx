import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { AppLanguageProvider } from './context/AppLanguageContext';
import AppTopNav from './components/AppTopNav';
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
        <AppTopNav />
        <Routes>
          <Route path="/" element={<ResumeClassicPage />} />
          <Route path="/nova" element={<ResumeModernPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppLanguageProvider>
    </BrowserRouter>
  );
}

export default App;
