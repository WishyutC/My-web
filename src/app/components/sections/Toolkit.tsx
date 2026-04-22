import { Code, Database, Wrench, Users, BrainCircuit, Network } from 'lucide-react';

interface ToolkitProps {
  t: (key: string) => any;
}

const iconMap: { [key: string]: any } = {
  frontend: Code,
  backend: Database,
  tools: Wrench,
  machine_learning: BrainCircuit,
  infrastructure: Network,
  practices: Users,
};

export function Toolkit({ t }: ToolkitProps) {
  const categories = t('toolkit.categories');
  const categoryKeys = ['frontend', 'backend', 'tools', 'machine_learning','infrastructure', 'practices'];

  // Guard against categories not being an object
  if (!categories || typeof categories !== 'object') {
    return null;
  }

  return (
    <section
      id="toolkit"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
      style={{ scrollMarginTop: '4rem' }}
    >
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            {t('toolkit.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('toolkit.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categoryKeys.map((key) => {
            const category = categories[key];
            const Icon = iconMap[key];
            
            return (
              <div
                key={key}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:border-primary/50 group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-muted text-foreground rounded-lg text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}