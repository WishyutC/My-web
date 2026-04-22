import { Heart, Code2, BookOpen, MessageCircle } from 'lucide-react';

interface PhilosophyProps {
  t: (key: string) => any;
}

const iconMap = [Heart, Code2, BookOpen, MessageCircle];

export function Philosophy({ t }: PhilosophyProps) {
  const items = t('philosophy.items');

  // Guard against items not being an array
  if (!Array.isArray(items)) {
    return null;
  }

  return (
    <section
      id="philosophy"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
      style={{ scrollMarginTop: '4rem' }}
    >
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {t('philosophy.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('philosophy.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item: any, index: number) => {
            const Icon = iconMap[index];
            
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all hover:border-primary/50 group"
              >
                <div className="mb-4">
                  <div className="inline-flex p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                
                <p className="text-foreground/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center pt-12 pb-6 border-t border-border">
          <p className="text-muted-foreground">
            
          </p>
        </div>
      </div>
    </section>
  );
}