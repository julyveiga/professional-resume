import { NavLink } from 'react-router';
import { Languages } from 'lucide-react';
import { useAppLanguage } from '../context/AppLanguageContext';

export default function AppTopNav() {
  const { language, toggleLanguage } = useAppLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-[60] border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-sm print:hidden">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <span className="text-sm font-semibold tracking-tight text-gray-900">Juliana Veiga</span>
        <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                isActive
                  ? 'bg-red-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`
            }
          >
            {language === 'pt' ? 'Versão clássica' : 'Classic version'}
          </NavLink>
          <NavLink
            to="/nova"
            className={({ isActive }) =>
              `rounded-full px-3 py-1.5 text-xs font-semibold transition-colors ${
                isActive
                  ? 'bg-red-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`
            }
          >
            {language === 'pt' ? 'Nova versão' : 'New version'}
          </NavLink>
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1 rounded-full border border-red-900/30 bg-white px-2.5 py-1.5 text-xs font-bold text-red-900 shadow-sm hover:bg-red-50"
            aria-label={language === 'pt' ? 'English' : 'Português'}
          >
            <Languages className="h-3.5 w-3.5" />
            {language === 'pt' ? 'EN' : 'PT'}
          </button>
        </div>
      </div>
    </nav>
  );
}
