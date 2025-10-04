
// import React from 'react';
// import { useTheme } from '../context/ThemeContext';

// const ThemeToggle = () => {
//   const { isDark, toggleTheme } = useTheme();

//   return (
//     <button
//       onClick={toggleTheme}
//       className="relative inline-flex h-6 w-11 items-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 transition-colors duration-200 hover:bg-white/30 dark:bg-gray-800/30 dark:border-gray-700/50 dark:hover:bg-gray-700/40"
//     >
//       <span
//         className={`inline-block h-4 w-4 transform rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transition-transform duration-200 ${
//           isDark ? 'translate-x-6' : 'translate-x-1'
//         }`}
//       />
//       <span className="sr-only">Toggle theme</span>
//     </button>
//   );
// };

// export default ThemeToggle;
'use client'
import React from 'react';
import { useTheme } from '@/app/context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-12 w-24 items-center bg-card border-4 border-pixel-border transition-all duration-100 hover:translate-x-1 hover:translate-y-1"
      style={{ 
        boxShadow: '4px 4px 0 hsl(var(--pixel-shadow))'
      }}
    >
      <span className="absolute left-2 text-xl">{isDark ? '🌙' : '☀️'}</span>
      <span className="absolute right-2 text-xl">{isDark ? '⭐' : '🌤️'}</span>
      <span
        className={`inline-block h-6 w-6 transform bg-primary transition-transform duration-200 border-2 border-pixel-border ${
          isDark ? 'translate-x-12' : 'translate-x-1'
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export default ThemeToggle;
