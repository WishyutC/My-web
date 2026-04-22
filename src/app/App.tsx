import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './components/sections/Home';
import { Timeline } from './components/sections/Timeline';
import { Toolkit } from './components/sections/Toolkit';
import { Philosophy } from './components/sections/Philosophy';
import { useTranslation, useTheme } from './hooks/useApp';
import { Footer } from './components/sections/contact';

export default function App() {
  const { language, setLanguage, t, isReady } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'timeline', 'toolkit', 'philosophy'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  // Show loading state while translations are loading
  if (!isReady) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        toggleTheme={toggleTheme}
        t={t}
        activeSection={activeSection}
      />
      
      <main>
        <Home t={t} />
        <Timeline t={t} />
        <Toolkit t={t} />
        <Philosophy t={t} />
        <Footer t={t} />
      </main>
    </div>
  );
}