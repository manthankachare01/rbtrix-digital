import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext.jsx';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-line dark:border-dark-line text-ink dark:text-dark-text transition-colors hover:bg-surface-soft dark:hover:bg-dark-surface2"
    >
      {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
    </button>
  );
}
