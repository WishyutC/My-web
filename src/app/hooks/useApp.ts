import { useState, useEffect } from 'react';

type Language = 'en' | 'th' | 'jp';

type Translations = {
  [key in Language]: any;
};

const translations: Translations = {
  en: null,
  th: null,
  jp: null,
};

let translationsLoaded = false;

// Load translation files
async function loadTranslations() {
  if (translationsLoaded) return;
  
  try {
    const [en, th, jp] = await Promise.all([
      import('../../locales/en.json'),
      import('../../locales/th.json'),
      import('../../locales/jp.json'),
    ]);
    
    translations.en = en.default;
    translations.th = th.default;
    translations.jp = jp.default;
    translationsLoaded = true;
  } catch (error) {
    console.error('Failed to load translations:', error);
  }
}

// Start loading translations immediately
loadTranslations();

export function useTranslation() {
  const [isReady, setIsReady] = useState(translationsLoaded);
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    if (saved && ['en', 'th', 'jp'].includes(saved)) {
      return saved as Language;
    }
    
    // Detect browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('th')) return 'th';
    if (browserLang.startsWith('ja')) return 'jp';
    return 'en';
  });

  useEffect(() => {
    if (!translationsLoaded) {
      loadTranslations().then(() => {
        setIsReady(true);
      });
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): any => {
    if (!translationsLoaded || !translations[language]) {
      return key;
    }

    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return value !== undefined ? value : key;
  };

  return { language, setLanguage, t, isReady };
}

export function useTheme() {
  const [theme, setThemeState] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
    
    // Detect system theme
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return { theme, toggleTheme };
}