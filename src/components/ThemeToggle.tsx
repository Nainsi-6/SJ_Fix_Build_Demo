import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('sj-theme');
      if (saved === 'dark' || saved === 'light') return saved;
      
      // Preference: Default to LIGHT mode as requested ("dark and light mode butttt by default design should be in light mode")
      return 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
    localStorage.setItem('sj-theme', theme);
  }, [theme]);

  return (
    <button
      id="theme-toggle-btn"
      onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
      className="p-2.5 rounded-full border border-warm-border dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/85 hover:bg-warm-beige dark:hover:bg-zinc-800 transition-all duration-300 shadow-sm text-gray-800 dark:text-gray-200 focus:outline-hidden"
      aria-label="Toggle theme color preference"
      title={theme === 'light' ? 'Switch to Dark Aesthetic' : 'Switch to Warm Light Aesthetic'}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {theme === 'light' ? (
          <Moon className="w-5 h-5 text-gray-700 transition-all duration-300 transform scale-100 rotate-0" />
        ) : (
          <Sun className="w-5 h-5 text-[#D18B5B] transition-all duration-300 transform scale-100 rotate-0" />
        )}
      </div>
    </button>
  );
}
