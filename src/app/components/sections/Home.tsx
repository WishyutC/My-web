import { ArrowRight } from 'lucide-react';

interface HomeProps {
  t: (key: string) => any;
}

export function Home({ t }: HomeProps) {
  const scrollToTimeline = () => {
    const element = document.getElementById('timeline');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{ scrollMarginTop: '4rem' }}
    >
      <div className="max-w-4xl w-full text-center space-y-8">
        <div className="space-y-4">
          <p className="text-muted-foreground animate-fade-in">
            {t('home.greeting')}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
              font-bold 
              leading-[1.1] 
              pb-2
              bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 
              bg-clip-text text-transparent 
              animate-fade-in-up">
            {t('home.name')}
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground animate-fade-in-up animation-delay-200">
            {t('home.title')}
          </h2>
        </div>
        
        <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
          {t('home.description')}
        </p>

        <button
          onClick={scrollToTimeline}
          className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-all hover:scale-105 animate-fade-in-up animation-delay-600"
        >
          <span>{t('home.cta')}</span>
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />
        </div>
      </div>
    </section>
  );
}
